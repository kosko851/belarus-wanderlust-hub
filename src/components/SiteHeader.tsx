import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tours", label: "Tours" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`h-9 w-9 rounded-full grid place-items-center font-display text-lg font-bold transition-colors ${scrolled ? "bg-primary text-primary-foreground" : "bg-gold text-gold-foreground"}`}>
            B
          </span>
          <div className="leading-tight">
            <div className={`font-display text-lg font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-cream"}`}>
              Explore <span className="text-gradient-gold">Belarus</span>
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-cream/70"}`}>
              Unforgettable Excursions
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-cream/90 hover:text-gold"
              }`}
              activeProps={{ className: "text-gold after:w-full" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-gold text-gold-foreground text-sm font-semibold shadow-gold hover:brightness-105 transition"
          >
            Book Now
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
