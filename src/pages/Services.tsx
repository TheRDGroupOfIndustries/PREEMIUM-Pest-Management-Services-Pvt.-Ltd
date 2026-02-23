import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import {
  Bug, Rat, TreeDeciduous, Bird, Flame, SprayCan,
  ShieldAlert, Snail, Flower2, Waves, Sparkles, Target, Leaf, Home, Building2,
} from "lucide-react";

const residentialServices = [
  { icon: Bug, title: "General Pest Management", desc: "Comprehensive treatment for ants, spiders, silverfish, and common household pests using safe, approved chemicals." },
  { icon: Target, title: "Termite Management", desc: "Pre and post-construction anti-termite treatments to protect your property from structural damage." },
  { icon: Rat, title: "Rodent Management", desc: "Strategic baiting, trapping, and exclusion to eliminate rodent infestations from residential premises." },
  { icon: Sparkles, title: "Cockroach Management (GoldSeal 4D)", desc: "Our proprietary 4D approach: Deny Entry, Deny Shelter, Deny Food, and Eliminate for lasting cockroach control." },
  { icon: Waves, title: "Mosquito & Fly Control", desc: "Larvicidal, adulticidal, and fogging treatments for effective mosquito and fly management." },
  { icon: ShieldAlert, title: "Bed Bug Management", desc: "Specialized heat and chemical treatments for complete elimination of bed bug infestations." },
];

const commercialServices = [
  { icon: Flame, title: "Commercial Fumigation", desc: "Warehouse, commodity, and container fumigation compliant with FSSAI and export standards." },
  { icon: Bird, title: "Bird Management Solutions", desc: "Humane bird deterrent systems including netting, spikes, wire systems, and ultrasonic devices." },
  { icon: SprayCan, title: "Snake & Bee Management", desc: "Safe capture, relocation, and preventive measures for snakes, bees, and wasps." },
  { icon: Snail, title: "Spider & Lizard Control", desc: "Targeted treatment programs for spider web removal and lizard habitation prevention." },
  { icon: TreeDeciduous, title: "Weed Control & Vegetation", desc: "Industrial vegetation management for factories, railways, solar farms, and open areas." },
  { icon: Flower2, title: "Garden Pest Management", desc: "Landscape and horticultural pest treatments for corporate campuses and residential societies." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-primary section-padding text-center">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive, science-driven pest management solutions using Integrated Pest Management (IPM) methodology.
            </p>
          </div>
        </section>

        {/* Residential */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Home className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Residential Pest Management
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {residentialServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-xl p-6 shadow-card hover-lift border border-border/50"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial */}
        <section className="section-padding bg-accent">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Commercial & Industrial Pest Management
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {commercialServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-card hover-lift border border-border/50"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IPM Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Integrated Pest Management Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our IPM approach focuses on long-term prevention through a combination of biological controls,
              habitat manipulation, modification of cultural practices, and use of resistant varieties.
              Pesticides are used only after monitoring indicates they are needed, and treatments are made
              with the goal of removing only the target organism while minimizing risks to human health
              and the environment.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Services;
