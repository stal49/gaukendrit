import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const notificationEmail = process.env.NOTIFICATION_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatFormData(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(
      ([key, val]) =>
        `<tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; white-space: nowrap;">${escapeHtml(key)}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapeHtml(val)}</td>
        </tr>`
    )
    .join("");
}

function buildEmailHtml({
  type,
  fields,
}: {
  type: string;
  fields: Record<string, string>;
}) {
  const fieldRows = formatFormData(fields);
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0; padding:0; background:#f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9; padding: 32px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <tr>
                <td style="background: #16a34a; padding: 24px 32px; text-align: center;">
                  <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-family: 'Georgia', serif;">Gaukendrit Agro Mission</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 32px;">
                  <p style="color: #64748b; font-size: 14px; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.05em;">New Inquiry</p>
                  <h2 style="color: #1e293b; font-size: 20px; margin: 0 0 24px 0;">${escapeHtml(type)}</h2>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                    ${fieldRows}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background: #f8fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was sent from the Gaukendrit contact form.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

const typeLabels: Record<string, string> = {
  general: "General Inquiry",
  investment: "Investment Inquiry",
  rasgarbha: "RasGarbha Inquiry",
  "atal-gotha": "Atal Gotha Factory Inquiry",
  partnership: "Partnership Inquiry",
  other: "Other Inquiry",
};

export async function sendContactEmail({
  type,
  fields,
}: {
  type: string;
  fields: Record<string, string>;
}) {
  if (!resend) {
    throw new Error("Email service (Resend) not configured");
  }
  if (!resendFromEmail) {
    throw new Error("RESEND_FROM_EMAIL not configured");
  }
  if (!notificationEmail) {
    throw new Error("NOTIFICATION_EMAIL not configured");
  }

  const label = typeLabels[type] || "Contact Form Submission";
  const html = buildEmailHtml({ type: label, fields });

  const { data, error } = await resend.emails.send(
    {
      from: resendFromEmail,
      to: [notificationEmail],
      replyTo: fields["Email"] || fields["email"] || undefined,
      subject: `New Inquiry: ${label}`,
      html,
    },
    {
      idempotencyKey: `contact-${type}-${Date.now()}`,
    }
  );

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }

  console.log("[email] Sent successfully:", data?.id);
}
