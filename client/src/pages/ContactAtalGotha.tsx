import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Leaf, Factory, Users, TrendingUp, Zap, MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

/**
 * Atal Gotha Factory Inquiry Page
 * Information about village-level production units
 */

export default function ContactAtalGotha() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    village: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "atal-gotha" }),
      });
      if (!res.ok) throw new Error("Failed to send inquiry");
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", village: "", message: "" });
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
              Atal Gotha Factory
            </h1>
            <p className="text-xl text-foreground/70">
              गांव स्तर पर उत्पादन इकाई स्थापना और संचालन का संपूर्ण समाधान।
            </p>
          </div>
        </div>
      </section>

      {/* What is Atal Gotha */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold mb-8 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Atal Gotha Factory क्या है?
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Atal Gotha Factory गांव स्तर पर एक छोटी उत्पादन इकाई है जहां RasGarbha और अन्य कृषि उत्पाद तैयार किए जाते हैं। यह न केवल एक उत्पादन केंद्र है बल्कि एक सामुदायिक आर्थिक इकाई है जो स्थानीय रोजगार सृजन करती है।
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <p className="text-foreground/80 font-semibold">
                "Atal Gotha Factory = गांव का आर्थिक केंद्र = स्थानीय रोजगार = ग्रामीण समृद्धि"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            Atal Gotha Factory की विशेषताएं
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "छोटी स्थापना लागत",
                description: "₹50,000 - ₹2,00,000 में एक पूर्ण उत्पादन इकाई स्थापित करें।",
              },
              {
                icon: Users,
                title: "स्थानीय रोजगार",
                description: "प्रत्येक Atal Gotha Factory में 5-10 स्थानीय लोगों को रोजगार मिलता है।",
              },
              {
                icon: TrendingUp,
                title: "उच्च लाभ मार्जिन",
                description: "RasGarbha का उत्पादन लागत ₹30 है और बिक्री मूल्य ₹70 है।",
              },
              {
                icon: Zap,
                title: "सरल तकनीक",
                description: "कोई जटिल तकनीक नहीं। 2-3 दिन का प्रशिक्षण पर्याप्त है।",
              },
              {
                icon: MapPin,
                title: "कहीं भी स्थापित करें",
                description: "खाली जमीन, पुरानी इमारत, या किसी भी उपयुक्त स्थान पर स्थापित करें।",
              },
              {
                icon: Leaf,
                title: "पर्यावरण अनुकूल",
                description: "कोई प्रदूषण नहीं। कृषि अपशिष्ट का पुनः उपयोग करें।",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "Poppins" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            Atal Gotha Factory कैसे स्थापित करें?
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "स्थान का चयन करें",
                description: "गांव में एक उपयुक्त स्थान चुनें। 500-1000 वर्ग फुट की जमीन पर्याप्त है।",
                details: "स्थान पानी के पास हो, सड़क से जुड़ा हो, और किसानों के लिए सुलभ हो।",
              },
              {
                step: "2",
                title: "आवश्यक उपकरण खरीदें",
                description: "मिक्सर, स्टोरेज टैंक, और पैकेजिंग सामग्री खरीदें।",
                details: "कुल लागत: ₹50,000 - ₹1,00,000 (आकार के अनुसार)",
              },
              {
                step: "3",
                title: "कर्मचारियों को प्रशिक्षित करें",
                description: "Gaukendrit की ओर से 2-3 दिन का प्रशिक्षण प्रदान किया जाता है।",
                details: "प्रशिक्षण में RasGarbha उत्पादन, गुणवत्ता नियंत्रण, और पैकेजिंग शामिल है।",
              },
              {
                step: "4",
                title: "उत्पादन शुरू करें",
                description: "RasGarbha का उत्पादन शुरू करें और स्थानीय किसानों को बेचें।",
                details: "प्रारंभ में 100-200 पाउच प्रति सप्ताह का लक्ष्य रखें।",
              },
              {
                step: "5",
                title: "बाजार विस्तार करें",
                description: "धीरे-धीरे अन्य गांवों और तहसीलों में बिक्री बढ़ाएं।",
                details: "6-12 महीने में आप अपने निवेश को वापस पा सकते हैं।",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 mb-2">{step.description}</p>
                  <p className="text-sm text-foreground/60 italic">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            वित्तीय मॉडल
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "Playfair Display" }}>
                प्रारंभिक निवेश
              </h3>
              <div className="space-y-3">
                {[
                  { item: "भूमि/स्थान की तैयारी", cost: "₹10,000" },
                  { item: "मिक्सर मशीन", cost: "₹20,000" },
                  { item: "स्टोरेज टैंक", cost: "₹15,000" },
                  { item: "पैकेजिंग सामग्री", cost: "₹10,000" },
                  { item: "अन्य उपकरण", cost: "₹5,000" },
                ].map((inv, idx) => (
                  <div key={idx} className="flex justify-between border-b border-border pb-2">
                    <span className="text-foreground/70">{inv.item}</span>
                    <span className="font-semibold text-foreground">{inv.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 border-t-2 border-primary">
                  <span className="font-bold text-foreground">कुल निवेश</span>
                  <span className="font-bold text-primary text-lg">₹60,000</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "Playfair Display" }}>
                मासिक आय (अनुमानित)
              </h3>
              <div className="space-y-3">
                {[
                  { item: "उत्पादन: 800 पाउच", qty: "800 × ₹70" },
                  { item: "कुल बिक्री", qty: "₹56,000" },
                  { item: "उत्पादन लागत", qty: "₹24,000" },
                  { item: "पैकेजिंग & अन्य", qty: "₹8,000" },
                ].map((inc, idx) => (
                  <div key={idx} className="flex justify-between border-b border-border pb-2">
                    <span className="text-foreground/70">{inc.item}</span>
                    <span className="font-semibold text-foreground">{inc.qty}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 border-t-2 border-primary">
                  <span className="font-bold text-foreground">शुद्ध लाभ</span>
                  <span className="font-bold text-primary text-lg">₹24,000</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg max-w-4xl mx-auto">
            <p className="text-foreground/80 font-semibold">
              <strong>निवेश वापसी का समय:</strong> ₹60,000 ÷ ₹24,000 = 2.5 महीने
            </p>
            <p className="text-foreground/70 text-sm mt-2">
              (यह अनुमानित है। वास्तविक आय बाजार की मांग, उत्पादन क्षमता, और विपणन कौशल पर निर्भर करती है।)
            </p>
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
            Atal Gotha Factory की सफलता की कहानियां
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "राम कुमार",
                village: "गांव: नवाबगंज, उत्तर प्रदेश",
                story: "मैंने अपने गांव में Atal Gotha Factory स्थापित किया। अब मैं महीने में ₹20,000 की आय कर रहा हूं और 8 लोगों को रोजगार दे रहा हूं।",
                achievement: "8 रोजगार, ₹20,000 मासिक आय",
              },
              {
                name: "सुनीता कुमारी",
                village: "गांव: पटेलपुर, उत्तर प्रदेश",
                story: "मैंने महिला समूह के साथ Atal Gotha Factory शुरू किया। अब हम 15 महिलाओं को रोजगार दे रहे हैं और महीने में ₹30,000 की आय कर रहे हैं।",
                achievement: "15 महिलाओं को रोजगार, ₹30,000 मासिक आय",
              },
              {
                name: "विजय सिंह",
                village: "गांव: धनपुर, उत्तर प्रदेश",
                story: "मैंने 3 महीने में अपने निवेश को वापस पा लिया। अब मैं दूसरे गांव में एक और Atal Gotha Factory खोलने की योजना बना रहा हूं।",
                achievement: "3 महीने में ROI, विस्तार की योजना",
              },
              {
                name: "प्रिया शर्मा",
                village: "गांव: मोहनपुर, उत्तर प्रदेश",
                story: "Atal Gotha Factory के माध्यम से मैंने अपने गांव में एक आर्थिक केंद्र बनाया। अब किसान सीधे मेरे पास आते हैं।",
                achievement: "गांव में आर्थिक विकास, किसान सहयोग",
              },
            ].map((story, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <div className="mb-4">
                  <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {story.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">{story.village}</p>
                </div>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-bold text-accent">{story.achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl font-bold mb-4 text-center text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Atal Gotha Factory खोलना चाहते हैं?
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              हमारी टीम आपको पूरी प्रक्रिया में सहायता करेगी।
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
                    गांव का नाम
                  </label>
                  <Input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    placeholder="आपके गांव का नाम"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    अतिरिक्त जानकारी
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="अपने प्रश्न या विचार साझा करें..."
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
                    अनुरोध भेजें <ArrowRight className="w-5 h-5" />
                  </Button>
                  {submitted && (
                    <div className="flex items-center text-green-600 font-semibold">
                      ✓ अनुरोध सफलतापूर्वक भेजा गया!
                    </div>
                  )}
                </div>
              </form>
            </Card>
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
