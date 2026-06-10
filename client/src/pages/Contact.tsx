import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, TrendingUp, Leaf } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";

/**
 * Contact Page - Design Philosophy: Organic Growth
 * Multiple contact channels, inquiry forms, and detailed information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
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
        body: JSON.stringify({ ...formData, type: formData.inquiryType }),
      });
    } catch (err) {
      console.error("Failed to submit form:", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", inquiryType: "general", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/#mission", label: "Mission" },
          { href: "tel:+919860798997", label: "Call Us" },
        ]}
        actions={
          <a
            href="https://wa.me/919860798997"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
            style={{ fontFamily: "Poppins" }}
          >
            WhatsApp
          </a>
        }
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              संपर्क करें
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Gaukendrit के साथ जुड़ें। हमारी टीम आपके सभी प्रश्नों का उत्तर देने के लिए तैयार है।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "फोन",
                value: "+91 98607 98997",
                link: "tel:+919860798997",
              },
              {
                icon: Mail,
                title: "ईमेल",
                value: "info@gaukendrit.com",
                link: "mailto:info@gaukendrit.com",
              },
              {
                icon: MapPin,
                title: "वेबसाइट",
                value: "www.gaukendrit.com",
                link: "https://www.gaukendrit.com",
              },
              {
                icon: Clock,
                title: "उपलब्धता",
                value: "सोमवार - शुक्रवार",
                subtext: "9 AM - 6 PM IST",
              },
            ].map((contact, idx) => (
              <Card
                key={idx}
                className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card text-center"
              >
                <contact.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                  {contact.title}
                </h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <>
                    <p className="text-foreground/70 font-semibold">{contact.value}</p>
                    {contact.subtext && <p className="text-sm text-foreground/60 mt-1">{contact.subtext}</p>}
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Type Selection */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-bold mb-12 text-center text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              आप किस बारे में पूछना चाहते हैं?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: "निवेश के बारे में",
                  description: "Dealer, Super Dealer, या Distributor बनने के बारे में जानें",
                  link: "/contact/investment",
                },
                {
                  icon: Leaf,
                  title: "RasGarbha के बारे में",
                  description: "RasGarbha तकनीक और लाभ के बारे में विस्तृत जानकारी",
                  link: "/contact/rasgarbha",
                },
                {
                  icon: Users,
                  title: "Atal Gotha Factory",
                  description: "गांव स्तरीय उत्पादन इकाई स्थापना के बारे में",
                  link: "/contact/atal-gotha",
                },
                {
                  icon: Phone,
                  title: "सामान्य पूछताछ",
                  description: "Gaukendrit के बारे में सामान्य प्रश्न",
                  link: "#general-form",
                },
                {
                  icon: Mail,
                  title: "भागीदारी के अवसर",
                  description: "व्यावसायिक सहयोग और भागीदारी की संभावनाएं",
                  link: "/contact/partnership",
                },
                {
                  icon: MapPin,
                  title: "अन्य प्रश्न",
                  description: "अन्य किसी भी विषय के लिए संपर्क करें",
                  link: "#general-form",
                },
              ].map((inquiry, idx) => (
                <Link key={idx} href={inquiry.link}>
                  <a className="block">
                    <Card className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card cursor-pointer h-full">
                      <inquiry.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                        {inquiry.title}
                      </h3>
                      <p className="text-sm text-foreground/70">{inquiry.description}</p>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Contact Form */}
      <section id="general-form" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl font-bold mb-4 text-center text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              हमें संदेश भेजें
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              अपनी जानकारी भरें और हम जल्द ही आपसे संपर्क करेंगे।
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
                    पूछताछ का विषय *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general">सामान्य पूछताछ</option>
                    <option value="investment">निवेश के बारे में</option>
                    <option value="rasgarbha">RasGarbha के बारे में</option>
                    <option value="atal-gotha">Atal Gotha Factory</option>
                    <option value="partnership">भागीदारी</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    संदेश *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="अपना संदेश यहाँ लिखें..."
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
                    संदेश भेजें <ArrowRight className="w-5 h-5" />
                  </Button>
                  {submitted && (
                    <div className="flex items-center text-green-600 font-semibold">
                      ✓ संदेश सफलतापूर्वक भेजा गया!
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl font-bold mb-8 text-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              हमें सोशल मीडिया पर फॉलो करें
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919860798997"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                WhatsApp
              </a>
              <a
                href="https://www.gaukendrit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Website
              </a>
              <a
                href="https://youtube.com/@AtalGothaFactory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                YouTube
              </a>
            </div>
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
