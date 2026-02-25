import { motion } from "framer-motion";
import { ShieldCheck, Lock, Zap, ClipboardCheck } from "lucide-react";

const steps = [
  { icon: ShieldCheck, letter: "E", title: "Exclusion", desc: "Sealing and proofing all possible pest entry points in the premises" },
  { icon: Lock, letter: "R", title: "Restriction", desc: "Limiting pest access to food, water, and shelter through sanitation measures" },
  { icon: Zap, letter: "D", title: "Destruction", desc: "Targeted elimination of active infestations using approved methods" },
  { icon: ClipboardCheck, letter: "M", title: "Monitoring", desc: "Ongoing inspections, documentation, and reporting for sustained control" },
];

const ERDMSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Our Methodology</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            ERDM Methodology
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 last:mb-0"
            >
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elevated mt-1 sm:mt-0">
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground">{step.letter}</span>
              </div>
              <div className="bg-background rounded-xl p-4 sm:p-6 flex-1 shadow-card border border-border/50">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-heading text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERDMSection;
