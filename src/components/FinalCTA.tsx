import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(0,0%,100%,0.1),transparent_70%)]" />
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Book a Professional Pest Inspection Today
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Get in touch with our experts for a comprehensive assessment and tailored pest management plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917001664727"
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover-lift inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/917001664727"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide hover-lift inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
