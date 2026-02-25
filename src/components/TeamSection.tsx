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
          className="bg-background rounded-2xl p-5 sm:p-8 md:p-12 shadow-card border border-border/50 max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-balance">
            Our Trained & Dedicated Pest Management Professionals
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 text-balance">
            Our team comprises uniformed, trained, and certified technicians along with experienced
            office and operations staff. Every team member undergoes regular training on safety protocols,
            chemical handling, and advanced pest management techniques.
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6">
            {["Uniformed Technicians", "Certified Professionals", "Operations Staff", "Safety Trained"].map((tag) => (
              <span key={tag} className="bg-accent text-accent-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-heading font-medium text-center">
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
