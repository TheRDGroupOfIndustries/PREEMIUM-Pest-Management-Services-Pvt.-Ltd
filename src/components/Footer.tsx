import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="PREEMIUM" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's trusted professional pest management company with 30+ years of
              science-driven, eco-friendly solutions for homes, industries & businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Industries We Serve", path: "/industries" },
                { label: "Our Process", path: "/our-process" },
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
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "General Pest Management",
                "Termite Management",
                "Rodent Management",
                "Commercial Fumigation",
                "Bird Management",
                "Weed Control",
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
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@preemium.in" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                info@preemium.in
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Varanasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-primary-light">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
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