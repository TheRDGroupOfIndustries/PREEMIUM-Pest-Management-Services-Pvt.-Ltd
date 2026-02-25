import { motion } from "framer-motion";
import { Shield, Leaf, FileCheck } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PREEMIUM Pest Management Services Pvt. Ltd. is a DPIIT-recognized professional pest management company
              delivering science-driven, eco-friendly solutions across India for over 27 years. We combine advanced
              Integrated Pest Management (IPM) methodologies with strict regulatory compliance to protect homes,
              industries, and commercial establishments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to hygiene, safety, and documentation ensures that every client receives world-class
              pest management services that meet the highest industry standards and government regulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Shield, title: "DPIIT Recognized", desc: "Government-recognized startup ensuring trust & credibility" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable, science-driven pest management solutions" },
              { icon: FileCheck, title: "Compliance First", desc: "Fully compliant with safety & environmental standards" },
            ].map((item, i) => (
              <div key={i} className="bg-accent rounded-xl p-6 text-center hover-lift shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
