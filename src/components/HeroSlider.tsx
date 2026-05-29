import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "@/assets/Primium Pest Control/image2.jpeg";
import hero2 from "@/assets/Primium Pest Control/image5.jpeg";
import hero3 from "@/assets/Primium Pest Control/image8.jpeg";

const slides = [
  {
    image: hero1,
    headline: "Professional Pest Control Services in Varanasi",
    subheadline: "Science-driven termite, cockroach, rodent, mosquito and bed bug treatment for homes, industries and businesses",
  },
  {
    image: hero2,
    headline: "Compliance-Ready Pest Management for Industries & PSUs",
    subheadline: "Documentation, safety, and professional execution you can rely on",
  },
  {
    image: hero3,
    headline: "30+ Years of Experience. One Trusted Name.",
    subheadline: "Protecting environments with structured, long-term pest control systems",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mt-16 md:mt-[72px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={`${slides[current].headline} service background`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 drop-shadow-sm">
              {slides[current].headline}
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/90 mb-8 leading-relaxed drop-shadow-sm">
              {slides[current].subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover-lift inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Book Free Inspection
              </a>
              <a
                href="https://wa.me/917001664727"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover-lift inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/30 transition-colors" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/30 transition-colors" aria-label="Next slide">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-primary-foreground/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
