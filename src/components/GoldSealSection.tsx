import { motion } from "framer-motion";
import { ShieldBan, Home, UtensilsCrossed, Crosshair } from "lucide-react";

const steps = [
  { icon: ShieldBan, title: "Deny Entry", desc: "Sealing entry points to prevent pest ingress into premises" },
  { icon: Home, title: "Deny Shelter", desc: "Eliminating harborage areas where pests hide and breed" },
  { icon: UtensilsCrossed, title: "Deny Food", desc: "Removing food sources and maintaining sanitary conditions" },
  { icon: Crosshair, title: "Pest Elimination", desc: "Targeted treatment using eco-friendly, approved chemicals" },
];

const GoldSealSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Premium Service</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            GoldSeal Service 4D
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Our proprietary four-dimensional approach to cockroach management ensures
            complete and lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-accent rounded-xl p-6 sm:p-8 text-center hover-lift shadow-card group"
            >
              <div className="absolute top-3 right-4 font-heading text-3xl sm:text-4xl font-bold text-primary/10">
                {i + 1}
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary transition-colors">
                <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldSealSection;
