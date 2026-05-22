import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { Shield, Sparkles, Home, Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { pestData } from "@/data/pestData";
import heroImg from "@/assets/Primium Pest Control/image7.jpeg";
import { Seo } from "@/lib/seo";

const processSteps = [
    {
        icon: Home,
        title: "1. Pest Inspection",
        desc: "Our trained experts conduct a thorough survey of your premises to identify the pest species, severity of the infestation, and potential entry points.",
        features: ["Detailed site analysis", "Identification of pest type", "Risk assessment"],
    },
    {
        icon: Sparkles,
        title: "2. Precision Treatment",
        desc: "We deploy targeted, science-backed treatments using approved chemicals and advanced methodologies to eliminate pests safely and effectively.",
        features: ["Targeted application", "Eco-friendly options", "Minimal disruption"],
    },
    {
        icon: Shield,
        title: "3. Long-term Protection",
        desc: "Post-treatment, we provide expert recommendations on proofing and sanitation to prevent future recurrences and maintain a pest-free environment.",
        features: ["Prevention advice", "Follow-up monitoring", "Guaranteed results"],
    },
];

const PestControl = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            <Seo
                title="Pest Control in Varanasi | Home & Commercial Pest Experts"
                description="Get pest control in Varanasi for homes, offices, hotels, hospitals and industries. PREEMIUM handles termite, cockroach, rodent, mosquito, bed bug and commercial pest problems."
                path="/pest-control"
            />
            <Header />

            <main className="pt-[72px]">
                {/* 1. Hero Section */}
                <section className="relative w-full h-[60vh] min-h-[500px] flex items-center">
                    <div className="absolute inset-0 z-0 bg-accent">
                        <img src={heroImg} alt="Pest Control Services" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Professional Pest Control Services in Varanasi
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                                Protecting your home and business with science-driven, safe, and effective pest management strategies. Expert solutions tailored to your needs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                                <Link
                                    to="/contact"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-semibold tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <ShieldCheck className="w-5 h-5 shrink-0" />
                                    Book Inspection
                                </Link>
                                <a
                                    href="tel:+917001664727"
                                    className="bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-semibold tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg"
                                >
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    Call +91 70016 64727
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Process Section (3-Column) */}
                <section className="py-20 bg-accent/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Trusted pest control solutions for your space
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Our comprehensive 3-step approach ensures your property remains pest-free, protecting your health, reputation, and peace of mind.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-background rounded-2xl p-6 sm:p-8 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 text-primary">
                                        <step.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                    </div>
                                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                                        {step.desc}
                                    </p>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {step.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 sm:gap-3 text-sm text-foreground/80 font-medium">
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Services Grid */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Protecting homes and businesses from pests
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                We offer specialized treatments for a wide variety of pests. Select your pest problem below to learn more about our targeted solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pestData.map((service, idx) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-card transition-all bg-white flex flex-col"
                                >
                                    <div className="relative h-56 overflow-hidden bg-accent">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 justify-between">
                                        <div>
                                            <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                {service.shortDesc}
                                            </p>
                                        </div>
                                        <Link
                                            to={`/pest-control/${service.id}`}
                                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link mt-auto"
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-heading font-semibold hover:bg-primary hover:text-white transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 4. CTA Banner Section (Rentokil style) */}
                <section className="bg-primary text-primary-foreground py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="font-heading text-3xl font-bold mb-6">Need expert help immediately?</h2>
                        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                            Don't let pests take over. Connect with our experts today for a rapid response and professional assessment.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
                            <a
                                href="tel:+917001664727"
                                className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform shadow-lg"
                            >
                                <Phone className="w-5 h-5 bg-primary/10 p-1 rounded-full shrink-0" />
                                Call Toll Free: +91 70016 64727
                            </a>
                            <a
                                href="https://wa.me/917001664727"
                                className="w-full sm:w-auto bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold tracking-wide flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5 shrink-0" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default PestControl;
