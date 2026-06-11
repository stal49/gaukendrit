import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Leaf, Droplet, Zap, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

/**
 * RasGarbha Inquiry Page
 * Detailed technical and practical information about RasGarbha
 */

export default function ContactRasGarbha() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    farmSize: "",
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
        body: JSON.stringify({ ...formData, type: "rasgarbha" }),
      });
      if (!res.ok) throw new Error("Failed to send inquiry");
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", farmSize: "", message: "" });
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
              RasGarbha तकनीक
            </h1>
            <p className="text-xl text-foreground/70">
              मिट्टी पुनर्जीवन और कम लागत खेती का क्रांतिकारी समाधान।
            </p>
          </div>
        </div>
      </section>

      {/* What is RasGarbha */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold mb-8 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              RasGarbha क्या है?
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              RasGarbha एक जैविक अपघटन तकनीक है जो गोबर और अन्य कृषि अपशिष्ट को उच्च गुणवत्ता की खाद में परिवर्तित करती है। यह तकनीक सूक्ष्मजीवों का एक विशेष समूह उपयोग करती है जो प्राकृतिक विघटन प्रक्रिया को तेज करते हैं।
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <p className="text-foreground/80 font-semibold">
                "RasGarbha केवल खाद नहीं है - यह एक संपूर्ण मिट्टी पुनर्जीवन प्रणाली है।"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            RasGarbha के मुख्य लाभ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplet,
                title: "मिट्टी की नमी में वृद्धि",
                description: "RasGarbha से उपचारित मिट्टी अधिक नमी धारण करती है, जिससे सिंचाई की आवश्यकता कम होती है।",
              },
              {
                icon: Zap,
                title: "सूक्ष्मजीव सक्रियता",
                description: "मिट्टी में लाभकारी सूक्ष्मजीवों की संख्या में वृद्धि होती है जो पोषक तत्वों को उपलब्ध कराते हैं।",
              },
              {
                icon: TrendingUp,
                title: "उत्पादन में 20-30% वृद्धि",
                description: "RasGarbha के उपयोग से फसल की पैदावार में 20-30% तक वृद्धि देखी गई है।",
              },
              {
                icon: Shield,
                title: "कीट और रोग नियंत्रण",
                description: "स्वस्थ मिट्टी में पौधों की रोग प्रतिरोधक क्षमता बढ़ती है, कीटों का प्रकोप कम होता है।",
              },
              {
                icon: Leaf,
                title: "जैविक खेती के लिए आदर्श",
                description: "RasGarbha पूरी तरह जैविक है और जैविक प्रमाणन के लिए स्वीकार्य है।",
              },
              {
                icon: TrendingUp,
                title: "खेती की लागत में कमी",
                description: "रासायनिक खाद पर निर्भरता कम होने से खेती की लागत में 30-40% तक कमी आती है।",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "Poppins" }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            RasGarbha का उपयोग कैसे करें?
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "RasGarbha पाउच खरीदें",
                description: "₹70 की कीमत पर एक पाउच खरीदें जो 1 एकड़ के लिए पर्याप्त है।",
              },
              {
                step: "2",
                title: "गुड़ के साथ मिलाएं",
                description: "2 किलो गुड़ को 20 लीटर पानी में घोलें और RasGarbha पाउच को इसमें मिलाएं।",
              },
              {
                step: "3",
                title: "24 घंटे रखें",
                description: "मिश्रण को 24 घंटे के लिए रखें ताकि सूक्ष्मजीव सक्रिय हो जाएं।",
              },
              {
                step: "4",
                title: "खेत में छिड़कें",
                description: "तैयार मिश्रण को खेत में समान रूप से छिड़कें। हर 15 दिन में दोहराएं।",
              },
              {
                step: "5",
                title: "परिणाम देखें",
                description: "2-3 महीने में मिट्टी की गुणवत्ता में सुधार और उत्पादन में वृद्धि देखें।",
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
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            तकनीकी विवरण
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "Playfair Display" }}>
                RasGarbha की संरचना
              </h3>
              <ul className="space-y-3">
                {[
                  "सेल्युलोलिटिक बैक्टीरिया",
                  "एक्टिनोमाइसेट्स",
                  "फंगी",
                  "लैक्टोबैसिलस",
                  "फोटोसिंथेटिक बैक्टीरिया",
                  "यीस्ट",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "Playfair Display" }}>
                अनुप्रयोग दर
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">प्रति एकड़:</p>
                  <p className="text-foreground/70">1 पाउच RasGarbha + 2 किलो गुड़ + 20 लीटर पानी</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">आवृत्ति:</p>
                  <p className="text-foreground/70">हर 15 दिन में एक बार</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">कुल वार्षिक खर्च:</p>
                  <p className="text-foreground/70">₹840 (12 पाउच × ₹70)</p>
                </div>
              </div>
            </Card>
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
            किसानों की सफलता की कहानियां
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "राजेश कुमार",
                village: "गांव: मोहनपुर, उत्तर प्रदेश",
                story: "RasGarbha के उपयोग से मेरी गेहूं की पैदावार 25 क्विंटल से बढ़कर 32 क्विंटल हो गई। खाद का खर्च भी आधा हो गया।",
                result: "+28% उत्पादन वृद्धि",
              },
              {
                name: "सीमा देवी",
                village: "गांव: पटेलपुर, उत्तर प्रदेश",
                story: "मैंने अपनी 2 एकड़ जमीन पर RasGarbha का उपयोग किया। सब्जियों की गुणवत्ता में बहुत सुधार आया और कीटों का प्रकोप कम हो गया।",
                result: "+35% आय वृद्धि",
              },
              {
                name: "विजय सिंह",
                village: "गांव: धनपुर, उत्तर प्रदेश",
                story: "RasGarbha से मेरी मिट्टी की गुणवत्ता में बहुत सुधार हुआ। अब मैं जैविक खेती कर रहा हूं और प्रीमियम कीमत पा रहा हूं।",
                result: "+40% लाभ वृद्धि",
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
                  <p className="text-sm font-bold text-accent">{story.result}</p>
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
              RasGarbha के बारे में जानकारी चाहिए?
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              हमारे विशेषज्ञ आपको RasGarbha के बारे में विस्तृत जानकारी देंगे।
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
                    आपके खेत का आकार (एकड़)
                  </label>
                  <Input
                    type="number"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    placeholder="एकड़ में"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    अतिरिक्त प्रश्न या जानकारी
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="अपने प्रश्न यहाँ पूछें..."
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
                    जानकारी प्राप्त करें <ArrowRight className="w-5 h-5" />
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
