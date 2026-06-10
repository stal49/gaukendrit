import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Zap, Globe, TrendingUp, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const ventureImages = [
  "/images/ven1.jpeg",
  "/images/ven2.jpeg",
  "/images/ven3.jpeg",
  "/images/ven4.jpeg",
  "/images/ven5.jpeg",
  "/images/ven6.jpeg",
  "/images/ven7.jpeg",
  "/images/ven8.jpeg",
  "/images/ven9.jpeg",
];

const doubleVentureImages = [...ventureImages, ...ventureImages];

/**
 * Design Philosophy: Organic Growth
 * - Earth-centric colors: forest green, terracotta, lime green
 * - Flowing, asymmetric layouts with organic transitions
 * - Storytelling through natural progression
 * - Typography: Playfair Display (bold headings) + Inter (body)
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Playfair Display" }}>
              Gaukendrit
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-sm hover:text-primary transition">
              Mission
            </a>
            <a href="#rasgarbha" className="text-sm hover:text-primary transition">
              RasGarbha
            </a>
            <a href="#entrepreneur" className="text-sm hover:text-primary transition">
              Entrepreneur
            </a>
            <a href="#impact" className="text-sm hover:text-primary transition">
              Impact
            </a>
            <a href="#invest" className="text-sm hover:text-primary transition">
              Invest
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919860798997" className="text-sm hover:text-primary transition flex items-center gap-1 font-semibold text-primary">
              📞 +91 98607 98997
            </a>
            <a href="/contact">
              <Button className="flex gap-2" style={{ fontFamily: "Poppins" }}>
                Contact <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-sm font-medium text-accent" style={{ fontFamily: "Poppins" }}>
                  भारत की पहली विकेंद्रीकृत सर्कुलर इकोनॉमी
                </span>
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight text-foreground"
                style={{ fontFamily: "Playfair Display" }}
              >
                Gaukendrit Agro Mission
              </h1>

              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                हर गांव को आत्मनिर्भर आर्थिक इकाई बनाना। किसान से ग्रामीण उद्योगपति। सर्कुलर इकोनॉमी द्वारा स्थायी समृद्धि।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="gap-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    शुरू करें <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    style={{ fontFamily: "Poppins" }}
                  >
                    और जानें
                  </Button>
                </a>
              </div>

              <div className="pt-2">
                <p className="text-sm text-foreground/60 flex items-center gap-2">
                  <span>📞 संपर्क सूत्र:</span>
                  <a href="tel:+919860798997" className="font-semibold text-primary hover:underline transition">
                    +91 98607 98997
                  </a>
                </p>
              </div>

              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "Playfair Display" }}>
                    25 करोड़+
                  </div>
                  <p className="text-sm text-foreground/60">जनसंख्या (उत्तर प्रदेश)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "Playfair Display" }}>
                    60%
                  </div>
                  <p className="text-sm text-foreground/60">कृषि आधारित समाज</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663635929442/ipiRAV9QyoK5fG8MM2CXTt/hero-gaukendrit-aBpjM2qKuZDPDsxSeUcJHD.webp"
                  alt="Farmers celebrating in field"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="h-20 bg-gradient-to-b from-accent/5 to-background"></div>

      {/* Ventures Section */}
      <section className="py-12 bg-background border-y border-border/50 overflow-hidden">
        <div className="container mb-8 text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full" style={{ fontFamily: "Poppins" }}>
            हमारे उद्यम • Our Ventures
          </span>
        </div>
        <div className="relative w-full">
          {/* Gradient overlays for fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 md:gap-12">
              {doubleVentureImages.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 flex items-center justify-center h-20 w-36 md:h-24 md:w-44 bg-card rounded-xl p-3 shadow-sm border border-border/40 hover:border-primary/30 transition-all duration-300 group"
                >
                  <img
                    src={src}
                    alt={`Venture logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Gaukendrit Section */}
      <section id="mission" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Gaukendrit क्या है?
            </h2>
            <p className="text-lg text-foreground/70">
              केवल कृषि प्रोजेक्ट नहीं। केवल जैविक खेती नहीं। यह एक संपूर्ण ग्राम आधारित आर्थिक क्रांति मॉडल है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "विकेंद्रीकरण",
                description: "गांव आधारित, स्थानीय उत्पादन, स्थानीय रोजगार, कम लागत आधारित",
              },
              {
                icon: Leaf,
                title: "सर्कुलर इकोनॉमी",
                description: "गोबर से मूल्य निर्माण, मिट्टी पुनर्जीवन, स्थायी समृद्धि",
              },
              {
                icon: Users,
                title: "किसान सशक्तिकरण",
                description: "हर किसान को सूक्ष्म उद्यमी बनाना, गांव में ही उद्योग निर्माण",
              },
              {
                icon: TrendingUp,
                title: "आर्थिक वृद्धि",
                description: "गांव का पैसा गांव में चलाना, पलायन में कमी",
              },
              {
                icon: Zap,
                title: "तकनीकी नवाचार",
                description: "AI आधारित डैशबोर्ड, डिजिटल इकोसिस्टम, डेटा-संचालित निर्णय",
              },
              {
                icon: Heart,
                title: "सामाजिक प्रभाव",
                description: "महिला सशक्तिकरण, स्वस्थ समाज, जैव विविधता संरक्षण",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="stagger-item p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3
                  className="text-xl font-bold mb-3 text-foreground"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RasGarbha Section */}
      <section id="rasgarbha" className="py-20 bg-accent/5 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663635929442/ipiRAV9QyoK5fG8MM2CXTt/rasgarbha-technology-T2CPQaDYqgjKdXcz7hsLgj.webp"
                  alt="RasGarbha Technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  RasGarbha
                </h2>
                <p className="text-lg text-foreground/70">
                  Gaukendrit Economic Revolution का प्रवेश द्वार
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                RasGarbha केवल Waste Decomposer नहीं है। यह मिट्टी पुनर्जीवन तकनीक, सूक्ष्मजीव सक्रियता प्रणाली, और गोबर अर्थव्यवस्था सक्रियक है।
              </p>

              <div className="space-y-4">
                {[
                  "गोबर से मूल्य निर्माण और प्राकृतिक वर्मी कम्पोस्ट",
                  "हर 15 दिन में मिट्टी की उर्वरता में सुधार",
                  "कीट और रोग नियंत्रण के साथ फसल सुरक्षा",
                  "₹70 पाउच आधारित कम लागत खेती मॉडल",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Leaf className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground/70">{benefit}</p>
                  </div>
                ))}
              </div>

              <a href="/contact/rasgarbha">
                <Button className="gap-2 w-full sm:w-auto" style={{ fontFamily: "Poppins" }}>
                  RasGarbha के बारे में जानें <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Gaukendrit Circular Economy
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              गोबर से शुरू होने वाला एक सतत आर्थिक चक्र जो पूरे गांव को समृद्ध बनाता है
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663635929442/ipiRAV9QyoK5fG8MM2CXTt/circular-economy-cuJDnuQNvoSPwqVq9rY6sA.webp"
                alt="Circular Economy Diagram"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { stage: "गोबर", description: "पशुधन से प्राकृतिक संसाधन" },
              { stage: "RasGarbha", description: "जैविक प्रक्रिया द्वारा रूपांतरण" },
              { stage: "जैविक खाद", description: "पोषक तत्वों से भरपूर खाद" },
              { stage: "उपजाऊ मिट्टी", description: "स्वस्थ और उर्वर भूमि" },
              { stage: "बेहतर उत्पादन", description: "अधिक फसल और गुणवत्ता" },
              { stage: "किसान आय", description: "आर्थिक समृद्धि और विकास" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                  {item.stage}
                </h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atal Gotha Factory Section */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Atal Gotha Factory
                </h2>
                <p className="text-lg text-foreground/70">
                  Gaukendrit मॉडल का हृदय
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                यह गांव स्तर का एक संपूर्ण जैविक उत्पादन केंद्र है जो गोबर प्रोसेसिंग, ग्रामीण MSME, रोजगार निर्माण, और सामाजिक विकास को एक साथ लाता है।
              </p>

              <div className="space-y-3">
                {[
                  "जैविक उत्पादन केंद्र",
                  "गोबर प्रोसेसिंग यूनिट",
                  "महिला SHG आधारित उत्पादन",
                  "स्थानीय रोजगार निर्माण",
                  "सर्कुलर इकोनॉमी हब",
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-foreground/70">{feature}</p>
                  </div>
                ))}
              </div>

              <a href="/contact/atal-gotha">
                <Button className="gap-2" style={{ fontFamily: "Poppins" }}>
                  Atal Gotha के बारे में जानें <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663635929442/ipiRAV9QyoK5fG8MM2CXTt/village-production-T9dS2BbX8Ux6MAjs42ipts.webp"
                  alt="Atal Gotha Factory"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section id="invest" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              निवेशकों के लिए अवसर
            </h2>
            <p className="text-lg text-foreground/70">
              भारत की सबसे बड़ी ग्रामीण सर्कुलर इकोनॉमी संभावना
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AgriTech",
              "AI आधारित कृषि",
              "जैविक उत्पादन",
              "कार्बन क्रेडिट",
              "ग्रामीण लॉजिस्टिक्स",
              "गोबर अर्थव्यवस्था",
              "ग्रामीण MSME",
              "Green Energy",
            ].map((sector, idx) => (
              <Card
                key={idx}
                className="p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg bg-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground">{sector}</h3>
                  <ArrowRight className="w-5 h-5 text-primary/50 group-hover:text-primary transition" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-primary/20">
            <h3
              className="text-2xl lg:text-3xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              आज ही जुड़ें
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Gaukendrit के साथ भारत के ग्रामीण आर्थिक क्रांति का हिस्सा बनें
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact/investment">
                <Button size="lg" style={{ fontFamily: "Poppins" }}>
                  निवेश करें
                </Button>
              </a>
              <a href="/contact/investment">
                <Button size="lg" variant="outline" style={{ fontFamily: "Poppins" }}>
                  और जानें
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer to Micro Entrepreneur Model Section */}
      <section id="entrepreneur" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              किसान से ग्रामीण उद्योगपति
            </h2>
            <p className="text-lg text-foreground/70">
              Farmer to Micro Entrepreneur Model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                level: "ग्राम स्तर",
                title: "Dealer",
                investment: "₹12,000",
                description: "गांव स्तर पर RasGarbha और कृषि समाधान वितरण",
                benefits: [
                  "स्थानीय किसानों को सीधा समर्थन",
                  "कम निवेश, अधिक लाभ",
                  "सामुदायिक नेतृत्व",
                ],
              },
              {
                level: "तहसील स्तर",
                title: "Super Dealer",
                investment: "₹1,00,000",
                description: "तहसील भर में वितरण नेटवर्क और प्रशिक्षण केंद्र",
                benefits: [
                  "क्षेत्रीय नेतृत्व",
                  "डीलर नेटवर्क प्रबंधन",
                  "प्रशिक्षण और समर्थन",
                ],
              },
              {
                level: "जिला स्तर",
                title: "Distributor",
                investment: "₹3,00,000",
                description: "पूरे जिले में संचालन और रणनीतिक नेतृत्व",
                benefits: [
                  "जिला स्तरीय नेतृत्व",
                  "बड़े पैमाने पर प्रभाव",
                  "उच्च आय संभावना",
                ],
              },
            ].map((tier, idx) => (
              <Card
                key={idx}
                className="stagger-item p-8 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg bg-card relative overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>

                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <span className="text-xs font-semibold text-primary" style={{ fontFamily: "Poppins" }}>
                      {tier.level}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-2 text-foreground"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {tier.title}
                  </h3>

                  <div className="mb-6 pb-6 border-b border-border">
                    <p className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Playfair Display" }}>
                      {tier.investment}
                    </p>
                    <p className="text-sm text-foreground/60">निवेश</p>
                  </div>

                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                      मुख्य लाभ
                    </p>
                    {tier.benefits.map((benefit, bidx) => (
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

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              अपने स्तर पर शुरू करें और Gaukendrit के साथ ग्रामीण उद्योगपति बनें। प्रत्येक स्तर पर व्यापक प्रशिक्षण, समर्थन, और आय की गारंटी।
            </p>
            <a href="/contact/investment">
              <Button className="gap-2" size="lg" style={{ fontFamily: "Poppins" }}>
                अपना स्तर चुनें <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Gaukendrit का अंतिम उद्देश्य
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border border-border">
              <h3
                className="text-2xl font-bold mb-4 text-foreground"
                style={{ fontFamily: "Playfair Display" }}
              >
                सामाजिक प्रभाव
              </h3>
              <ul className="space-y-3">
                {[
                  "गांव में रोजगार सृजन",
                  "महिलाओं का सशक्तिकरण",
                  "पलायन में कमी",
                  "स्वस्थ भोजन और समाज",
                  "सामुदायिक सहयोग",
                ].map((impact, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <h3
                className="text-2xl font-bold mb-4 text-foreground"
                style={{ fontFamily: "Playfair Display" }}
              >
                पर्यावरणीय प्रभाव
              </h3>
              <ul className="space-y-3">
                {[
                  "मिट्टी स्वास्थ्य में सुधार",
                  "जैव विविधता संरक्षण",
                  "कार्बन पदचिह्न में कमी",
                  "जल संरक्षण",
                  "सतत विकास",
                ].map((impact, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                नीति से उद्योग और उद्योग से समृद्धि
              </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Gaukendrit के साथ भारत के ग्रामीण आर्थिक क्रांति में भाग लें। हर गांव को आत्मनिर्भर बनाएं।
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" variant="secondary" style={{ fontFamily: "Poppins" }}>
                  अभी शुरू करें
                </Button>
              </a>
              <a
              href="https://wa.me/919860798997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition"
              style={{ fontFamily: "Poppins" }}
            >
              WhatsApp पर संपर्क करें
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold" style={{ fontFamily: "Playfair Display" }}>
                  Gaukendrit
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                भारत की पहली विकेंद्रीकृत सर्कुलर इकोनॉमी आधारित AgriTech व्यवस्था
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                त्वरित लिंक
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mission" className="text-foreground/60 hover:text-primary transition">
                    मिशन
                  </a>
                </li>
                <li>
                  <a href="#rasgarbha" className="text-foreground/60 hover:text-primary transition">
                    RasGarbha
                  </a>
                </li>
                <li>
                  <a href="#entrepreneur" className="text-foreground/60 hover:text-primary transition">
                    उद्योगपति
                  </a>
                </li>
                <li>
                  <a href="#invest" className="text-foreground/60 hover:text-primary transition">
                    निवेश
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-foreground/60 hover:text-primary transition">
                    संपर्क
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                संपर्क
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://wa.me/919860798997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition"
                  >
                    📞 +91 98607 98997
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gaukendrit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition"
                  >
                    🌐 www.gaukendrit.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@AtalGothaFactory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition"
                  >
                    📺 YouTube Channel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                मूल मूल्य
              </h4>
              <div className="flex flex-wrap gap-2">
                {["ETHICS", "DECENTRALIZATION", "SUSTAINABILITY", "HAPPINESS", "GROWTH", "GRAMVIKAS"].map((value) => (
                  <span key={value} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>
              © 2026 Gaukendrit Agro Mission. ABHA Gaukendrit Pvt. Ltd. द्वारा संचालित।
            </p>
            <p className="mt-2">
              भारत की पहली विकेंद्रीकृत सर्कुलर इकोनॉमी आधारित AgriTech व्यवस्था
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
