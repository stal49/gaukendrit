import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Leaf, Handshake, Globe, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

/**
 * Partnership Inquiry Page
 * Business collaboration and partnership opportunities
 */

export default function ContactPartnership() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    partnershipType: "distribution",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "partnership" }),
      });
      if (!res.ok) throw new Error("Failed to send inquiry");
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", organization: "", partnershipType: "distribution", message: "" });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to submit form:", err);
    }
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
              भागीदारी के अवसर
            </h1>
            <p className="text-xl text-foreground/70">
              Gaukendrit के साथ मिलकर ग्रामीण आर्थिक क्रांति में भाग लें।
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            भागीदारी के प्रकार
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "वितरण भागीदारी",
                description: "RasGarbha और अन्य उत्पादों का वितरण करें",
                benefits: [
                  "आकर्षक कमीशन संरचना",
                  "विपणन सहायता",
                  "प्रशिक्षण और समर्थन",
                  "विशेष क्षेत्र अधिकार",
                ],
              },
              {
                icon: Handshake,
                title: "तकनीकी भागीदारी",
                description: "RasGarbha तकनीक का लाइसेंस लें",
                benefits: [
                  "अपने ब्रांड के तहत बेचें",
                  "संपूर्ण तकनीकी सहायता",
                  "गुणवत्ता नियंत्रण",
                  "दीर्घकालिक अनुबंध",
                ],
              },
              {
                icon: TrendingUp,
                title: "निवेश भागीदारी",
                description: "Gaukendrit में निवेश करें और लाभ साझा करें",
                benefits: [
                  "आकर्षक रिटर्न",
                  "व्यावसायिक वृद्धि में भाग",
                  "निदेशक मंडल में स्थान",
                  "दीर्घकालिक मूल्य निर्माण",
                ],
              },
              {
                icon: Users,
                title: "कॉर्पोरेट सामाजिक दायित्व",
                description: "CSR कार्यक्रमों के माध्यम से भाग लें",
                benefits: [
                  "ग्रामीण विकास में योगदान",
                  "ब्रांड मूल्य वृद्धि",
                  "सामाजिक प्रभाव",
                  "कर लाभ",
                ],
              },
              {
                icon: Award,
                title: "अनुसंधान भागीदारी",
                description: "नई तकनीकें विकसित करने में सहयोग करें",
                benefits: [
                  "नवाचार में भाग",
                  "पेटेंट अधिकार",
                  "बाजार में प्रथम प्रवेश",
                  "ज्ञान साझाकरण",
                ],
              },
              {
                icon: Leaf,
                title: "खुदरा भागीदारी",
                description: "अपने दुकान में Gaukendrit उत्पाद बेचें",
                benefits: [
                  "अतिरिक्त आय स्रोत",
                  "ब्रांडेड उत्पाद",
                  "विपणन सामग्री",
                  "ग्राहक सहायता",
                ],
              },
            ].map((partnership, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>

                <div className="relative z-10">
                  <partnership.icon className="w-10 h-10 text-primary mb-4" />

                  <h3
                    className="text-2xl font-bold mb-2 text-foreground"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {partnership.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">{partnership.description}</p>

                  <div className="space-y-2">
                    {partnership.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex gap-2 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
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

      {/* Why Partner with Us */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gaukendrit के साथ भागीदारी क्यों करें?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "सिद्ध व्यावसायिक मॉडल",
                description: "Gaukendrit का व्यावसायिक मॉडल पहले से ही सफल साबित हुआ है। हजारों किसान और उद्यमी पहले से जुड़े हैं।",
              },
              {
                title: "मजबूत समर्थन प्रणाली",
                description: "हम प्रशिक्षण, विपणन, और तकनीकी सहायता प्रदान करते हैं। आपकी सफलता हमारी सफलता है।",
              },
              {
                title: "सामाजिक प्रभाव",
                description: "Gaukendrit केवल लाभ के लिए नहीं है। हम ग्रामीण विकास और किसान कल्याण में विश्वास करते हैं।",
              },
              {
                title: "विकास की संभावना",
                description: "Gaukendrit तेजी से बढ़ रहा है। भागीदारों को विस्तार के अवसर मिलते हैं।",
              },
              {
                title: "पारदर्शी संचार",
                description: "हम स्पष्ट शर्तें, नियमित संचार, और निष्पक्ष व्यवहार में विश्वास करते हैं।",
              },
              {
                title: "दीर्घकालिक संबंध",
                description: "हम अल्पकालिक लाभ के लिए नहीं, बल्कि दीर्घकालिक साझेदारी के लिए काम करते हैं।",
              },
            ].map((reason, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "Poppins" }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            हमारे भागीदारों की सफलता
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "अग्रवाल कृषि समूह",
                type: "वितरण भागीदार",
                story: "हमने Gaukendrit के साथ भागीदारी की और 6 महीने में 5 जिलों में अपना नेटवर्क बढ़ाया। अब हम 500+ किसानों को सेवा दे रहे हैं।",
                result: "5 जिले, 500+ किसान, ₹50 लाख वार्षिक आय",
              },
              {
                name: "प्रकृति खाद कंपनी",
                type: "तकनीकी भागीदार",
                story: "हमने RasGarbha तकनीक का लाइसेंस लिया और अपने ब्रांड के तहत बेचना शुरू किया। अब हम राज्य भर में बिक्री कर रहे हैं।",
                result: "राज्य व्यापी उपस्थिति, 30% बाजार हिस्सेदारी",
              },
              {
                name: "ग्रीन फ्यूचर इंवेस्टमेंट्स",
                type: "निवेश भागीदार",
                story: "हमने Gaukendrit में निवेश किया और अब हम व्यावसायिक वृद्धि में भाग ले रहे हैं। निवेश पर रिटर्न 25% वार्षिक है।",
                result: "25% वार्षिक रिटर्न, व्यावसायिक वृद्धि में भाग",
              },
              {
                name: "कॉर्पोरेट सामाजिक दायित्व विभाग",
                type: "CSR भागीदार",
                story: "हमने Gaukendrit के साथ CSR कार्यक्रम चलाए। 1000+ ग्रामीणों को प्रशिक्षण दिया और 100+ नई नौकरियां सृजित कीं।",
                result: "1000+ प्रशिक्षित, 100+ नई नौकरियां, सामाजिक प्रभाव",
              },
            ].map((story, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <div className="mb-4">
                  <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {story.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">{story.type}</p>
                </div>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-bold text-accent">{story.result}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl font-bold mb-4 text-center text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              भागीदारी का प्रस्ताव दें
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              अपनी जानकारी भरें और हमारी भागीदारी टीम आपसे संपर्क करेगी।
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
                    संगठन का नाम
                  </label>
                  <Input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="आपके संगठन का नाम"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    भागीदारी का प्रकार *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="distribution">वितरण भागीदारी</option>
                    <option value="technical">तकनीकी भागीदारी</option>
                    <option value="investment">निवेश भागीदारी</option>
                    <option value="csr">कॉर्पोरेट सामाजिक दायित्व</option>
                    <option value="research">अनुसंधान भागीदारी</option>
                    <option value="retail">खुदरा भागीदारी</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    भागीदारी का विवरण *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="अपने भागीदारी के प्रस्ताव के बारे में विस्तार से बताएं..."
                    required
                    rows={6}
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
                    प्रस्ताव भेजें <ArrowRight className="w-5 h-5" />
                  </Button>
                  {submitted && (
                    <div className="flex items-center text-green-600 font-semibold">
                      ✓ प्रस्ताव सफलतापूर्वक भेजा गया!
                    </div>
                  )}
                </div>
              </form>
            </Card>
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
            आइए साथ मिलकर बदलाव लाएं
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Gaukendrit के साथ भागीदारी करें और ग्रामीण भारत के आर्थिक विकास में भाग लें।
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
