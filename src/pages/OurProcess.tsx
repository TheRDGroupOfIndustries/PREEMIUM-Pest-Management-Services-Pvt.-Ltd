import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import ERDMSection from "@/components/ERDMSection";
import GoldSealSection from "@/components/GoldSealSection";
import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, GraduationCap, ClipboardList, Leaf } from "lucide-react";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-primary section-padding text-center">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Process
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              A structured, science-driven approach to pest management built on years of experience and industry best practices.
            </p>
          </div>
        </section>

        <ERDMSection />
        <GoldSealSection />

        {/* Safety, Training, Reporting */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Safety, Training & Reporting
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Safety Protocols", desc: "Strict adherence to occupational health and safety standards during every service" },
                { icon: GraduationCap, title: "Regular Training", desc: "Continuous professional development for all technicians on latest techniques" },
                { icon: ClipboardList, title: "Service Reports", desc: "Detailed documentation including pest activity logs, treatments used, and follow-up plans" },
                { icon: Leaf, title: "Eco-Compliance", desc: "Environmental responsibility in chemical selection and application methods" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-xl p-6 text-center shadow-card hover-lift"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IPM */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Integrated Pest Management (IPM)
              </h2>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-card">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Integrated Pest Management system is a comprehensive approach that combines multiple strategies
                to achieve effective, long-term pest control while minimizing environmental impact. IPM emphasizes
                understanding pest biology, monitoring populations, and using a combination of methods including
                biological controls, habitat modification, and targeted chemical applications.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {["Biological Control Methods", "Habitat Modification", "Targeted Chemical Application", "Continuous Monitoring", "Documentation & Reporting", "Preventive Strategies"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
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

export default OurProcess;
