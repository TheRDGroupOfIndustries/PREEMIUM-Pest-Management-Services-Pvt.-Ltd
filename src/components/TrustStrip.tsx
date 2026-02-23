import { Award, Users, Shield, Clock, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Shield, label: "DPIIT Recognized" },
  { icon: Award, label: "IPCA Member" },
  { icon: BadgeCheck, label: "Proud Member of BNI" },
  { icon: Clock, label: "30+ Years Experience" },
  { icon: Users, label: "Trained & Certified Professionals" },
];

const TrustStrip = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary-foreground"
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="text-xs md:text-sm font-heading font-medium tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
