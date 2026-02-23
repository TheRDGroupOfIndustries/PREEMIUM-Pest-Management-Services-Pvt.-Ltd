import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bug, Rat, TreeDeciduous, Bird, Flame, SprayCan,
  ShieldAlert, Snail, Flower2, Waves, Sparkles, Target,
} from "lucide-react";

const services = [
  { icon: Bug, title: "General Pest Management", desc: "Comprehensive solutions for common household and commercial pests" },
  { icon: Target, title: "Termite Management", desc: "Pre & post-construction anti-termite treatments with long-term protection" },
  { icon: Rat, title: "Rodent Management", desc: "Strategic rodent control using advanced baiting and exclusion techniques" },
  { icon: Sparkles, title: "Cockroach Management", desc: "GoldSeal Service 4D – Deny Entry, Deny Shelter, Deny Food & Eliminate" },
  { icon: Waves, title: "Mosquito & Fly Control", desc: "Larvicidal and adulticidal treatments for mosquito and fly management" },
  { icon: ShieldAlert, title: "Bed Bug Management", desc: "Heat treatment and residual spray programs for complete bed bug elimination" },
  { icon: Snail, title: "Spider & Lizard Control", desc: "Targeted treatment for spider webs and lizard habitation areas" },
  { icon: SprayCan, title: "Snake & Bee Management", desc: "Safe capture, relocation, and preventive measures for snakes and bees" },
  { icon: Bird, title: "Bird Management", desc: "Humane bird deterrent systems including netting, spikes, and exclusion" },
  { icon: Flame, title: "Commercial Fumigation", desc: "Warehouse and commodity fumigation compliant with FSSAI standards" },
  { icon: TreeDeciduous, title: "Weed Control", desc: "Vegetation management for industrial sites, railways, and open areas" },
  { icon: Flower2, title: "Garden Pest Management", desc: "Specialized treatment for landscape and horticultural pest issues" },
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Specialized Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to="/services"
                className="block bg-background rounded-xl p-6 shadow-card hover-lift h-full border border-border/50 group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
