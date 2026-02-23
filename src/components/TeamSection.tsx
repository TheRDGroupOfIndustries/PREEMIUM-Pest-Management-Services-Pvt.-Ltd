import { motion } from "framer-motion";
import { Users } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Our People</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Team
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 md:p-12 shadow-card border border-border/50 max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
            Our Trained & Dedicated Pest Management Professionals
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our team comprises uniformed, trained, and certified technicians along with experienced
            office and operations staff. Every team member undergoes regular training on safety protocols,
            chemical handling, and advanced pest management techniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Uniformed Technicians", "Certified Professionals", "Operations Staff", "Safety Trained"].map((tag) => (
              <span key={tag} className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-heading font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
