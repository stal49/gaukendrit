import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Leaf, CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

/**
 * Investment Inquiry Page
 * Detailed information about investment opportunities
 */

export default function ContactInvestment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tier: "dealer",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "investment" }),
      });
    } catch (err) {
      console.error("Failed to submit form:", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", tier: "dealer", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        links={[{ href: "/contact", label: "← वापस संपर्क" }]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              निवेश के अवसर
            </h1>
            <p className="text-xl text-foreground/70">
              Gaukendrit के साथ ग्रामीण उद्योगपति बनें। अपने स्तर पर निवेश करें और आय अर्जित करें।
            </p>
          </div>
        </div>
      </section>

      {/* Investment Tiers Comparison */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            तीन स्तरीय निवेश संरचना
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                tier: "Dealer",
                level: "ग्राम स्तर",
                investment: "₹12,000",
                icon: Users,
                overview: "गांव स्तर पर RasGarbha और कृषि समाधान वितरण",
                responsibilities: [
                  "स्थानीय किसानों को RasGarbha प्रदान करना",
                  "कृषि समाधान का वितरण",
                  "किसानों को प्रशिक्षण देना",
                  "स्थानीय समुदाय में नेतृत्व",
                ],
                benefits: [
                  "कम निवेश, अधिक लाभ",
                  "सामुदायिक सम्मान",
                  "आवर्ती आय",
                  "Super Dealer बनने का अवसर",
                ],
                monthlyIncome: "₹5,000 - ₹15,000",
              },
              {
                tier: "Super Dealer",
                level: "तहसील स्तर",
                investment: "₹1,00,000",
                icon: TrendingUp,
                overview: "तहसील भर में वितरण नेटवर्क और प्रशिक्षण केंद्र",
                responsibilities: [
                  "Dealer नेटवर्क का प्रबंधन",
                  "तहसील स्तर पर प्रशिक्षण केंद्र संचालन",
                  "गुणवत्ता नियंत्रण",
                  "Dealer का समर्थन और मार्गदर्शन",
                ],
                benefits: [
                  "क्षेत्रीय नेतृत्व",
                  "बड़े पैमाने पर प्रभाव",
                  "उच्च आय संभावना",
                  "Distributor बनने का अवसर",
                ],
                monthlyIncome: "₹30,000 - ₹80,000",
              },
              {
                tier: "Distributor",
                level: "जिला स्तर",
                investment: "₹3,00,000",
                icon: Award,
                overview: "पूरे जिले में संचालन और रणनीतिक नेतृत्व",
                responsibilities: [
                  "पूरे जिले में संचालन",
                  "Super Dealer नेटवर्क प्रबंधन",
                  "रणनीतिक योजना और कार्यान्वयन",
                  "सरकारी एजेंसियों के साथ समन्वय",
                ],
                benefits: [
                  "जिला स्तरीय नेतृत्व",
                  "सबसे बड़ा प्रभाव",
                  "सर्वोच्च आय संभावना",
                  "राज्य स्तर के अवसर",
                ],
                monthlyIncome: "₹1,00,000 - ₹3,00,000",
              },
            ].map((tier, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>

                <div className="relative z-10">
                  <tier.icon className="w-12 h-12 text-primary mb-4" />

                  <h3
                    className="text-2xl font-bold mb-2 text-foreground"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">{tier.level}</p>

                  <div className="mb-6 pb-6 border-b border-border">
                    <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Playfair Display" }}>
                      {tier.investment}
                    </p>
                    <p className="text-xs text-foreground/60">प्रारंभिक निवेश</p>
                    <p className="text-sm text-foreground/70 mt-3">
                      <strong>मासिक आय:</strong> {tier.monthlyIncome}
                    </p>
                  </div>

                  <p className="text-foreground/70 text-sm mb-6">{tier.overview}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                      जिम्मेदारियां
                    </p>
                    {tier.responsibilities.map((resp, ridx) => (
                      <div key={ridx} className="flex gap-2 items-start mb-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/70">{resp}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                      लाभ
                    </p>
                    {tier.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex gap-2 items-start mb-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/70">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Training */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            हमारा समर्थन आपके साथ है
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "व्यापक प्रशिक्षण",
                description: "RasGarbha तकनीक, बिक्री, और व्यावसायिक प्रबंधन में पूर्ण प्रशिक्षण",
              },
              {
                title: "विपणन सहायता",
                description: "डिजिटल मार्केटिंग, विज्ञापन, और ब्रांड प्रचार में सहायता",
              },
              {
                title: "तकनीकी सहायता",
                description: "24/7 तकनीकी सहायता और समस्या समाधान",
              },
              {
                title: "नेटवर्क लाभ",
                description: "Gaukendrit नेटवर्क के साथ जुड़कर अधिक अवसर प्राप्त करें",
              },
              {
                title: "आपूर्ति श्रृंखला",
                description: "निरंतर और विश्वसनीय RasGarbha आपूर्ति सुनिश्चित",
              },
              {
                title: "वित्तीय सहायता",
                description: "निवेश के लिए आसान किस्त और वित्तीय योजनाएं",
              },
              {
                title: "प्रमाणन",
                description: "Gaukendrit प्रमाणित डीलर के रूप में मान्यता",
              },
              {
                title: "उन्नति के अवसर",
                description: "अगले स्तर पर उन्नति के लिए स्पष्ट मार्ग",
              },
            ].map((support, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                  {support.title}
                </h3>
                <p className="text-sm text-foreground/70">{support.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl font-bold mb-4 text-center text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              अब निवेश करें
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              अपना विवरण भरें और हमारी टीम आपसे संपर्क करेगी।
            </p>

            <Card className="p-8 border border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      नाम *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="आपका नाम"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      ईमेल *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="आपका ईमेल"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    फोन नंबर *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    आप किस स्तर में निवेश करना चाहते हैं? *
                  </label>
                  <select
                    name="tier"
                    value={formData.tier}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="dealer">Dealer (₹12,000)</option>
                    <option value="super-dealer">Super Dealer (₹1,00,000)</option>
                    <option value="distributor">Distributor (₹3,00,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    अतिरिक्त जानकारी
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="अपने अनुभव, प्रश्न, या अतिरिक्त जानकारी साझा करें..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="gap-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    आवेदन भेजें <ArrowRight className="w-5 h-5" />
                  </Button>
                  {submitted && (
                    <div className="flex items-center text-green-600 font-semibold">
                      ✓ आवेदन सफलतापूर्वक भेजा गया!
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            अक्सर पूछे जाने वाले प्रश्न
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "निवेश की वापसी कितने समय में होगी?",
                a: "Dealer स्तर पर 6-12 महीने, Super Dealer में 12-18 महीने, और Distributor में 18-24 महीने में आप अपने निवेश को वापस पा सकते हैं।",
              },
              {
                q: "क्या प्रशिक्षण प्रदान किया जाता है?",
                a: "हां, हम व्यापक प्रशिक्षण प्रदान करते हैं जिसमें RasGarbha तकनीक, बिक्री कौशल, और व्यावसायिक प्रबंधन शामिल है।",
              },
              {
                q: "क्या मुझे अपने गांव में ही काम करना होगा?",
                a: "Dealer के लिए हां, आप अपने गांव में काम कर सकते हैं। Super Dealer और Distributor के लिए आप अपने क्षेत्र में विस्तार कर सकते हैं।",
              },
              {
                q: "क्या निवेश के लिए ऋण उपलब्ध है?",
                a: "हां, हम आसान किस्त योजनाएं और बैंक ऋण में सहायता प्रदान करते हैं।",
              },
              {
                q: "अगर मैं Dealer बनता हूं तो क्या मैं बाद में Super Dealer बन सकता हूं?",
                a: "बिल्कुल! यह हमारे मॉडल का मुख्य लाभ है। आप अपने प्रदर्शन के आधार पर अगले स्तर पर उन्नति कर सकते हैं।",
              },
              {
                q: "RasGarbha की आपूर्ति कितनी विश्वसनीय है?",
                a: "हम निरंतर और विश्वसनीय आपूर्ति सुनिश्चित करते हैं। हमारे पास उत्पादन क्षमता है और आपूर्ति श्रृंखला सुव्यवस्थित है।",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border border-border bg-card">
                <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "Poppins" }}>
                  {faq.q}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            आज ही शुरू करें
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Gaukendrit के साथ ग्रामीण उद्योगपति बनें और अपने समुदाय को समृद्ध बनाएं।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919860798997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition"
              style={{ fontFamily: "Poppins" }}
            >
              WhatsApp पर संपर्क करें
            </a>
            <a
              href="tel:+919860798997"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
              style={{ fontFamily: "Poppins" }}
            >
              अभी कॉल करें
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container text-center text-sm text-foreground/60">
          <p>© 2026 Gaukendrit Agro Mission. सभी अधिकार सुरक्षित।</p>
        </div>
      </footer>
    </div>
  );
}
