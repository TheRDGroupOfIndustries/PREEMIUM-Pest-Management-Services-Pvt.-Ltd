import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";
import { servicesData } from "@/data/servicesData";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  // { label: "Industries", path: "/industries" },
  // { label: "Our Process", path: "/our-process" },
  { label: "Pest Control", path: "/pest-control" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Certifications", path: "/certifications" },
  // { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const servicesActive = location.pathname.startsWith("/services");

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
        <nav className="hidden xl:flex items-center gap-1 bg-accent border border-border/50 rounded-full p-1.5 shadow-sm mx-auto">
          {navLinks.map((link) => {
            if (link.path === "/services") {
              return (
                <div key={link.path} className="group relative">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${servicesActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground hover:bg-black/5"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                      <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
                        <Link to="/services" className="font-heading text-sm font-bold text-foreground hover:text-primary">
                          All Pest Control Services
                        </Link>
                        <span className="text-xs text-muted-foreground">Varanasi</span>
                      </div>
                      <div className="grid gap-1">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.seoSlug}`}
                            className="group/item flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
                          >
                            <service.icon className="h-4 w-4 shrink-0 text-primary" />
                            <span className="leading-snug group-hover/item:text-primary">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-black/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
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
              {navLinks.map((link) => {
                if (link.path === "/services") {
                  return (
                    <div key={link.path} className="rounded-lg border border-border bg-accent/40 p-2">
                      <Link
                        to={link.path}
                        className={`mb-2 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-heading tracking-wide ${servicesActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent"
                          }`}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                      <div className="grid gap-1">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.seoSlug}`}
                            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-background"
                          >
                            <service.icon className="h-4 w-4 shrink-0 text-primary" />
                            <span className="leading-snug">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
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
                );
              })}
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
