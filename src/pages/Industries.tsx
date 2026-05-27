import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import {
  Factory, Warehouse, Pill, UtensilsCrossed,
  Building2, Monitor, Home, Landmark,
} from "lucide-react";
import { Seo } from "@/lib/seo";

const industries = [
  { icon: Factory, title: "Manufacturing", challenges: "Product contamination, equipment damage, health code violations", solutions: "Scheduled IPM programs, perimeter defense systems, ERDM methodology" },
  { icon: Warehouse, title: "Warehousing & Logistics", challenges: "Stored product pests, rodent damage, compliance failures", solutions: "Fumigation services, rodent baiting networks, monitoring documentation" },
  { icon: Pill, title: "Pharma & Healthcare", challenges: "Contamination risks, audit failures, regulatory non-compliance", solutions: "Cleanroom-compatible treatments, GMP-compliant documentation, sterile protocols" },
  { icon: UtensilsCrossed, title: "Food Processing", challenges: "FSSAI violations, product recalls, pest contamination", solutions: "HACCP-aligned pest programs, comprehensive documentation, audit support" },
  { icon: Building2, title: "Hotels & Commercial Kitchens", challenges: "Guest complaints, health inspections, reputation damage", solutions: "Discreet service schedules, odorless treatments, 24/7 emergency response" },
  { icon: Monitor, title: "Offices & IT Parks", challenges: "Employee discomfort, equipment damage, workspace hygiene", solutions: "Eco-friendly treatments, minimal disruption scheduling, regular monitoring" },
  { icon: Home, title: "Residential Societies", challenges: "Community-wide infestations, common area pests, tenant concerns", solutions: "Society-wide IPM programs, resident awareness, scheduled treatments" },
  { icon: Landmark, title: "Government & PSU Facilities", challenges: "Compliance requirements, large-scale operations, documentation needs", solutions: "Government-compliant services, comprehensive reporting, trained personnel" },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Pest Management for Industries in Varanasi | PREEMIUM"
        description="Industry-specific pest management in Varanasi for manufacturing, warehouses, pharma, food processing, hotels, offices, societies and PSU facilities."
        path="/industries"
      />
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-primary section-padding text-center">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Industries We Serve
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Industry-specific pest management solutions with compliance-ready documentation and professional execution.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-xl p-6 shadow-card hover-lift border border-border/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <ind.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{ind.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wide">Challenges</span>
                      <p className="text-sm text-muted-foreground mt-1">{ind.challenges}</p>
                    </div>
                    <div>
                      <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wide">Our Solutions</span>
                      <p className="text-sm text-muted-foreground mt-1">{ind.solutions}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Industries;
