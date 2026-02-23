import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-primary section-padding text-center">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact & Support
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch with our pest management experts for a professional consultation.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: Mail, label: "Email", value: "info@preemium.in", href: "mailto:info@preemium.in" },
                    { icon: MapPin, label: "Address", value: "Varanasix`", href: undefined },
                    { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wide">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="block text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency */}
                <div className="bg-accent rounded-xl p-5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-sm font-semibold text-foreground">Emergency Pest Service</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For urgent pest emergencies, call our 24/7 helpline or reach us via WhatsApp for immediate assistance.
                  </p>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-xl overflow-hidden border border-border shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.097999664!2d82.90870816554735!3d25.32089491852635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1771841131687!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PREEMIUM Location"
                  />
                </div>
              </div>

              {/* Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Enquiry Form</h2>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent rounded-xl p-8 text-center shadow-card"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-accent rounded-xl p-6 shadow-card space-y-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-foreground mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold text-foreground mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-foreground mb-1.5">Service Required</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option>General Pest Management</option>
                        <option>Termite Management</option>
                        <option>Rodent Management</option>
                        <option>Cockroach Management</option>
                        <option>Mosquito & Fly Control</option>
                        <option>Bed Bug Management</option>
                        <option>Commercial Fumigation</option>
                        <option>Bird Management</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-foreground mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-full font-heading font-semibold text-sm tracking-wide hover-lift"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Contact;