import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FinalCTA from "@/components/FinalCTA";
import { pestData } from "@/data/pestData";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Seo } from "@/lib/seo";

const PestDetail = () => {
    const { id } = useParams<{ id: string }>();
    const pest = pestData.find((p) => p.id === id);

    if (!pest) {
        return <Navigate to="/pest-control" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Seo
                title={`${pest.title} Control in Varanasi | Pest Guide`}
                description={`${pest.shortDesc} Learn signs, risks and professional treatment options for ${pest.title.toLowerCase()} in Varanasi.`}
                path={`/pest-control/${pest.id}`}
                image={pest.image}
            />
            <Header />
            <main className="pt-20">
                {/* Breadcrumb & Hero */}
                <section className="relative w-full h-[50vh] min-h-[400px] flex items-center">
                    <div className="absolute inset-0 z-0 bg-accent">
                        <img
                            src={pest.image}
                            alt={pest.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-white  h-[80%]">
                        <Link to="/pest-control" className="inline-flex items-center text-sm font-medium hover:text-white/80 transition-colors mb-6 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full border ">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Pest Control
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl mt-[80px]"
                        >
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                {pest.title}
                            </h1>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                                {pest.shortDesc}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="section-padding py-16">
                    <div className="container mx-auto max-w-4xl">

                        {/* Main Content Area */}
                        <div className="space-y-6 mb-12">
                            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Comprehensive Knowledge & Treatment</h2>
                            {pest.content.map((paragraph, idx) => (
                                <p key={idx} className="text-muted-foreground leading-relaxed text-lg text-justify md:text-left">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Benefits box (conditionally rendered if available) */}
                        {pest.benefits && pest.benefits.length > 0 && (
                            <div className="bg-accent rounded-2xl p-8 md:p-10 shadow-card border border-border/50 mb-12">
                                <h3 className="text-2xl font-bold font-heading text-foreground mb-8 border-b border-border pb-4">
                                    {pest.benefitsTitle || "Key Benefits"}
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-6">
                                    {pest.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                            <span className="text-foreground font-medium leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/20">
                            <h4 className="text-2xl font-bold font-heading text-foreground mb-6">
                                Ready to schedule your inspection for {pest.title.toLowerCase()}?
                            </h4>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-4 font-semibold shadow-elevated transition-transform hover:-translate-y-1 text-lg"
                            >
                                Book This Service Now
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

export default PestDetail;
