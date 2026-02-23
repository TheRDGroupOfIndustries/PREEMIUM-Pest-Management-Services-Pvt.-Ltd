import { motion } from "framer-motion";

import tata from "@/assets/Logos/tata.png";
import bajaj from "@/assets/Logos/bajaj.png";
import mahindra from "@/assets/Logos/mahindra.png";
import wipro from "@/assets/Logos/wipro.png";
import infosys from "@/assets/Logos/infosys.png";
import unilever from "@/assets/Logos/unilever.png";
import godrej from "@/assets/Logos/gordej.png";
import asian from "@/assets/Logos/asian.png";
import reliance from "@/assets/Logos/reliance.png";
import reddy from "@/assets/Logos/reddy.png";
import cipla from "@/assets/Logos/Cipla.svg";
import itc from "@/assets/Logos/itc.png";
import marriott from "@/assets/Logos/marriot.png";
import hyatt from "@/assets/Logos/hyatt.png";
import railways from "@/assets/Logos/railways.png";
import bhel from "@/assets/Logos/bhel.png";

const clients = [
  { name: "Tata Motors", src: tata },
  { name: "Bajaj Auto", src: bajaj },
  { name: "Mahindra & Mahindra", src: mahindra },
  { name: "Wipro", src: wipro },
  { name: "Infosys", src: infosys },
  { name: "Hindustan Unilever", src: unilever },
  { name: "Godrej", src: godrej },
  { name: "Asian Paints", src: asian },
  { name: "Reliance Industries", src: reliance },
  { name: "Dr. Reddy's", src: reddy },
  { name: "Cipla", src: cipla },
  { name: "ITC Hotels", src: itc },
  { name: "Marriott", src: marriott },
  { name: "Hyatt", src: hyatt },
  { name: "Indian Railways", src: railways },
  { name: "BHEL", src: bhel },
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-accent/40 border-y border-border/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase">Our Clients</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Trusted by Leading Industries & Organizations
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 flex items-center justify-center hover:shadow-card border border-border/60 min-h-[100px] transition-all duration-300 group"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain transition-all duration-300 mix-blend-multiply"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
