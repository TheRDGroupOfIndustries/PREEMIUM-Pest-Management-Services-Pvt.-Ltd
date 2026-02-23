import { motion } from "framer-motion";
import { Building } from "lucide-react";

const clients = [
  "Tata Motors", "Bajaj Auto", "Mahindra & Mahindra", "Wipro", "Infosys",
  "Hindustan Unilever", "Godrej", "Asian Paints", "Reliance Industries",
  "Dr. Reddy's", "Cipla", "ITC Hotels", "Marriott", "Hyatt",
  "Indian Railways", "BHEL",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Our Clients</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Trusted by Leading Industries & Organizations
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-4 flex flex-col items-center justify-center text-center hover-lift shadow-card border border-border/50 min-h-[80px]"
            >
              <Building className="h-5 w-5 text-primary/40 mb-2" />
              <span className="text-xs font-heading font-medium text-foreground">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
