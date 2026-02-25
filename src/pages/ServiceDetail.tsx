import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { servicesData } from "@/data/servicesData";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = servicesData.find((s) => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                {/* Breadcrumb & Hero */}
                <section className="bg-gradient-primary section-padding text-left text-primary-foreground relative overflow-hidden">
                    <div className="container mx-auto">
                        <Link to="/services" className="inline-flex items-center text-sm font-medium hover:text-white/80 transition-colors mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>

                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-5xl">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 shadow-xl">
                                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </div>
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-heading text-4xl md:text-5xl font-bold mb-4"
                                >
                                    {service.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl leading-relaxed"
                                >
                                    {service.shortDesc}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="section-padding py-16">
                    <div className="container mx-auto max-w-4xl">

                        {/* Main Content Area */}
                        <div className="space-y-6 mb-12">
                            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Comprehensive Treatment</h2>
                            {service.content.map((paragraph, idx) => (
                                <p key={idx} className="text-muted-foreground leading-relaxed text-lg text-justify md:text-left">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Benefits box */}
                        <div className="bg-accent rounded-2xl p-8 md:p-10 shadow-card border border-border/50 mb-12">
                            <h3 className="text-2xl font-bold font-heading text-foreground mb-8 border-b border-border pb-4">
                                Key Benefits
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-foreground font-medium leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/20">
                            <h4 className="text-2xl font-bold font-heading text-foreground mb-6">Ready to schedule your inspection?</h4>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-4 font-semibold shadow-elevated transition-transform hover:-translate-y-1 text-lg"
                            >
                                Book This Service
                            </Link>
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

export default ServiceDetail;
