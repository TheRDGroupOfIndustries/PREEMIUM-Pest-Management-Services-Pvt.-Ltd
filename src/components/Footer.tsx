import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { servicesData } from "@/data/servicesData";

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
                { label: "Blog", path: "/blog" },
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
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.seoSlug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.title}
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
              <a href="mailto:info@preemiumpestmanagementservices.com" className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span className="break-all text-center md:text-left">info@preemiumpestmanagementservices.com</span>
              </a>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 md:mt-0.5 text-primary shrink-0" />
                <span>Varanasi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-background shadow-card">
          <iframe
            title="PREEMIUM Pest Management Varanasi service area map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.550080781173!2d82.98093999999999!3d25.352874399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d9c3bb77c43%3A0x33ad269414602ce5!2sPreemium%20Pest%20Management%20Services%20Pvt%20Ltd%20-%20Pest%20Control%20Services%20In%20Varanasi!5e0!3m2!1sen!2sin!4v1776410419477!5m2!1sen!2sin"
            className="h-64 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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
