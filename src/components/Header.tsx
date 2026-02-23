import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Our Process", path: "/our-process" },
  { label: "Pest Control", path: "/pest-control" },
  { label: "Gallery", path: "/gallery" },
  { label: "Certifications", path: "/certifications" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-background"
        }`}
    >
      <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="PREEMIUM Pest Management" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 xl:gap-3 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-pill ${location.pathname === link.path
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-primary-light hover:text-accent-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="tel:+917001664727"
            className="flex items-center gap-2 text-sm text-foreground font-body"
          >
            <Phone className="h-4 w-4 text-primary" />
            +91 70016 64727
          </a>
          <Link
            to="/contact"
            className="bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wide hover-lift"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-foreground p-2 rounded-md hover:bg-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background border-t border-border overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-heading tracking-wide ${location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-heading font-semibold tracking-wide text-center mt-2"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;