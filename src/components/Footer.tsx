import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="PREEMIUM" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's trusted professional pest management company with 30+ years of
              science-driven, eco-friendly solutions for homes, industries & businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Industries We Serve", path: "/industries" },
                { label: "Our Process", path: "/our-process" },
                { label: "Pest Control", path: "/pest-control" },
                { label: "Certifications", path: "/certifications" },
                { label: "Gallery", path: "/gallery" },
                { label: "Career", path: "/career" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "General Pest Management",
                "Termite Management",
                "Rodent Management",
                "Commercial Fumigation",
                "Bird Management",
                "Weed Control",
                "Fogging Service",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 w-full max-w-[280px] md:max-w-none">
              <a href="tel:+917001664727" className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span>+91 70016 64727</span>
              </a>
              <a href="tel:+917460855879" className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span>+91 74608 55879</span>
              </a>
              <a href="mailto:info@preemiumpestmangagement.com" className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span className="break-all text-center md:text-left">info@preemiumpestmangagement.com</span>
              </a>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span>Varanasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-primary-light">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PREEMIUM Pest Management Services Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            DPIIT Recognized Startup | IPCA Member | Proud Member of BNI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
