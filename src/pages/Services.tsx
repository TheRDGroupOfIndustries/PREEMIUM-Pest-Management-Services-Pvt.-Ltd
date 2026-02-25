import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { Leaf, Home, Building2 } from "lucide-react";

// Filter services by category for different sections
const residentialServices = servicesData.filter(s => s.category === "Residential" || s.category === "Both");
const commercialServices = servicesData.filter(s => s.category === "Commercial" || s.category === "Both");

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
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/services/${s.id}`}
                    className="block bg-accent rounded-xl p-6 shadow-card hover-lift border border-border/50 h-full group"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.shortDesc}</p>
                  </Link>
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
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/services/${s.id}`}
                    className="block bg-background rounded-xl p-6 shadow-card hover-lift border border-border/50 h-full group"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.shortDesc}</p>
                  </Link>
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
