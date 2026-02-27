import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Handshake, BadgeCheck, Leaf, FileCheck, FileText } from "lucide-react";

// Certificate Images
import cert1 from "@/assets/Primium Pest Control/certificate1.png";
import cert2 from "@/assets/Primium Pest Control/certificate2.jpeg";
import cert3 from "@/assets/Primium Pest Control/certificate3.jpeg";
import cert4 from "@/assets/Primium Pest Control/certificate4.jpeg";

const certificateImages = [
  { img: cert1, title: "Registration Certificate" },
  { img: cert2, title: "Safety Compliance" },
  { img: cert3, title: "AIB Training " },
  { img: cert4, title: "Quality Assurance" },
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "DPIIT Startup Recognition",
    desc: "PREEMIUM is recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This recognition validates our innovative approach to pest management and our commitment to building a scalable, professional enterprise.",
  },
  {
    icon: Award,
    title: "IPCA Membership",
    desc: "As an active member of the Indian Pest Control Association (IPCA), we adhere to the highest standards of professional practice. IPCA membership ensures our methods, chemicals, and protocols meet stringent industry requirements.",
  },
  {
    icon: Handshake,
    title: "BNI Membership",
    desc: "PREEMIUM is a proud member of Business Network International (BNI), the world's largest business networking and referral organization. This membership reflects our commitment to building strong business relationships and delivering trusted services.",
  },
  {
    icon: Leaf,
    title: "Environmental Compliance",
    desc: "All our treatments comply with environmental protection regulations. We use only government-approved chemicals and follow application protocols that minimize ecological impact.",
  },
  {
    icon: FileCheck,
    title: "Safety Standards",
    desc: "Our operations follow strict occupational health and safety standards. All technicians are trained in safe handling of chemicals, use of PPE, and emergency response procedures.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "We maintain rigorous quality assurance processes including regular audits, client feedback mechanisms, and continuous improvement programs to ensure service excellence.",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-primary section-padding text-center">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Certifications & Compliance
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our credentials reflect our commitment to excellence, safety, and professional integrity.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-xl p-6 shadow-card hover-lift border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-accent/30 border-y border-border/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <FileText className="h-3.5 w-3.5" />
                Proof of Excellence
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
                Official Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparency and compliance are the pillars of our professional service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificateImages.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-4 shadow-card border border-border group"
                >
                  <div className="relative aspect-[1/1.414] overflow-hidden rounded-lg bg-accent mb-4">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-center text-foreground">{cert.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Certifications;