import { motion } from "framer-motion";
import {
  Factory, Warehouse, Pill, UtensilsCrossed,
  Building2, Monitor, Home, Landmark,
} from "lucide-react";

const industries = [
  { icon: Factory, title: "Manufacturing" },
  { icon: Warehouse, title: "Warehousing & Logistics" },
  { icon: Pill, title: "Pharma & Healthcare" },
  { icon: UtensilsCrossed, title: "Food Processing" },
  { icon: Building2, title: "Hotels & Commercial Kitchens" },
  { icon: Monitor, title: "Offices & IT Parks" },
  { icon: Home, title: "Residential Societies" },
  { icon: Landmark, title: "Government & PSU Facilities" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Sectors</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-accent rounded-xl p-6 text-center hover-lift shadow-card group cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                <ind.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xs md:text-sm font-semibold text-foreground">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
