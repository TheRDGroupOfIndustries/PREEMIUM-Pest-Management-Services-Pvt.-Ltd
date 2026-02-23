import { motion } from "framer-motion";
import { Award, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";

const certs = [
  { icon: ShieldCheck, title: "DPIIT Startup Recognition", desc: "Recognized by the Department for Promotion of Industry and Internal Trade, Government of India" },
  { icon: Award, title: "IPCA Membership", desc: "Active member of the Indian Pest Control Association, the premier industry body" },
  { icon: Handshake, title: "Proud Member of BNI", desc: "Part of Business Network International, the world's largest referral organization" },
  { icon: BadgeCheck, title: "Environmental & Safety Standards", desc: "Full compliance with environmental protection and occupational safety regulations" },
];

const CertificationsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Trust & Credibility</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Associations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-xl p-6 text-center hover-lift shadow-card border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
