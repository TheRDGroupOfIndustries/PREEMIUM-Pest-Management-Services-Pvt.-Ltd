import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import {
    Award,
    MapPin,
    Phone,
    Clock,
    CheckCircle2,
    Users,
    Zap,
    ShieldCheck,
    Star,
    ArrowRight
} from "lucide-react";

const reviews = [
    {
        text: "Best pest control service in the city. They really care about getting results.",
        name: "Priya Sharma",
        location: "Sigra, Varanasi",
        initial: "P",
    },
    {
        text: "Fast response, fair pricing, and completely solved our termite issue.",
        name: "Amit Verma",
        location: "Hazratganj, Lucknow",
        initial: "A",
    },
    {
        text: "Professional team, highly recommended for commercial spaces.",
        name: "Rahul Singh",
        location: "Gomti Nagar, Lucknow",
        initial: "R",
    }
];

const pests = [
    "Ants", "Cockroaches", "Termites", "Bed Bugs", "Rodents",
    "Spiders", "Wasps", "Fleas", "Moths", "Silverfish"
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const StopPestsSection = () => {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-secondary/50 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-6"
                    >
                        {/* Top Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-1.5 w-fit">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-primary text-sm font-semibold tracking-wide uppercase">30+ Years of Trusted Service</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1]">
                            Stop Pests <br />
                            <span className="text-primary">Dead In Their</span> <br />
                            Tracks
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.div variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                            Professional pest management that works the first time. <br className="hidden md:block" />
                            <span className="font-medium text-foreground">Same-day service</span> available with our <span className="text-primary font-medium">100% satisfaction guarantee.</span>
                        </motion.div>

                        {/* Address Box */}
                        <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-2 hover-lift">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm text-foreground mb-2">Proudly Serving in Pen India:</h4>
                                    <p className="text-sm text-muted-foreground mb-1.5"><strong className="text-foreground font-medium">Varanasi Office:</strong> 5-20/46, Varuna Bridge Varanasi 221002</p>
                                    <p className="text-sm text-muted-foreground"><strong className="text-foreground font-medium">Lucknow Office:</strong> Swiss Plaza, 2nd Floor Shop No. 205, Chaudhary Tola Aliganj, Lucknow 226024</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="tel:+917001664727" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 transition-all text-primary-foreground rounded-lg px-6 py-4 font-semibold text-sm shadow-elevated group flex-1 hover-lift">
                                <Phone className="w-4 h-4 mr-2" />
                                <div className="flex flex-col text-left mr-auto">
                                    <span className="text-xs font-medium opacity-90">Call Now: +91 70016 64727</span>
                                </div>
                                <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link to="/contact" className="inline-flex items-center justify-center bg-background border-2 border-primary text-primary hover:bg-primary/5 transition-all rounded-lg px-6 py-4 font-semibold text-sm flex-1 hover-lift">
                                <Clock className="w-4 h-4 mr-2" />
                                <div className="flex flex-col text-center">
                                    <span>Book free inspection</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Features below buttons */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/50">
                            {[
                                "100% Satisfaction Guarantee",
                                "Licensed & Insured Technicians",
                                "Same-Day Service Available",
                                "Eco-Friendly Treatment Options"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-xs text-muted-foreground font-medium leading-tight">{feature}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <motion.div variants={itemVariants} className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-elevated flex flex-col justify-center min-h-[160px] hover-lift">
                                <Award className="w-8 h-8 mb-4 opacity-90" />
                                <h3 className="text-4xl lg:text-5xl font-bold mb-2">30+</h3>
                                <p className="text-sm font-medium opacity-90 leading-snug">Years Experience in Pest Control</p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-card flex flex-col justify-center relative min-h-[160px] overflow-hidden border hover-lift">
                                <Users className="w-8 h-8 mb-4 text-primary" />
                                <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-foreground">Same Day</h3>
                                <p className="text-sm font-medium text-muted-foreground leading-snug pr-6">Service</p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-card flex flex-col justify-center min-h-[160px] border hover-lift">
                                <Zap className="w-8 h-8 mb-4 text-primary" />
                                <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-foreground">&lt;2h</h3>
                                <p className="text-sm font-medium text-muted-foreground leading-snug">Average Response Time</p>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div variants={itemVariants} className="bg-foreground rounded-2xl p-6 text-background shadow-elevated flex flex-col justify-center min-h-[160px] hover-lift">
                                <ShieldCheck className="w-8 h-8 mb-4 opacity-90 text-primary" />
                                <h3 className="text-4xl lg:text-5xl font-bold mb-2">100%</h3>
                                <p className="text-sm font-medium opacity-90 leading-snug">Satisfaction Guarantee</p>
                            </motion.div>
                        </div>

                        {/* Reviews Card */}
                        <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-card border hover-lift">
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                                <span className="text-sm font-bold ml-2 text-foreground">5.0</span>
                                <span className="text-xs text-muted-foreground ml-1">(500+ Reviews)</span>
                            </div>

                            <div className="min-h-[80px] relative">
                                {reviews.map((review, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: currentReview === idx ? 1 : 0, zIndex: currentReview === idx ? 10 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                        style={{ pointerEvents: currentReview === idx ? 'auto' : 'none' }}
                                    >
                                        <p className="italic text-lg text-foreground/80 mb-4 leading-relaxed tracking-wide font-body">
                                            "{review.text}"
                                        </p>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                                {review.initial}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-foreground font-heading uppercase tracking-wider">{review.name}</h4>
                                                <p className="text-xs text-muted-foreground">{review.location}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center space-x-1.5 mt-8">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentReview(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${currentReview === idx ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Pests We Eliminate Box */}
                        <motion.div variants={itemVariants} className="bg-card rounded-2xl p-6 shadow-card border hover-lift">
                            <h4 className="font-bold text-sm text-foreground mb-4">Pests We Eliminate:</h4>
                            <div className="flex flex-wrap gap-2">
                                {pests.map((pest, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 text-primary text-[11px] font-medium tracking-wide bg-primary/5 cursor-default transition-colors hover:bg-primary/10 hover:border-primary/50"
                                    >
                                        {pest}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StopPestsSection;
