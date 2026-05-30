import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

const destinationLinks = [
  { to: "/lida-castle", label: "Лидский замок" },
  { to: "/destinations", label: "Все направления" },
  { to: "/map", label: "Карта" },
  { to: "/planner", label: "Планировщик" },
  { to: "/tours", label: "Туры и маршруты" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textClass = scrolled ? "text-foreground/80 hover:text-primary" : "text-cream/90 hover:text-gold";

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
          <span
            className={`h-9 w-9 rounded-full grid place-items-center font-display text-lg font-bold transition-colors ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-gold text-gold-foreground"
            }`}
          >
            Б
          </span>
          <div className="leading-tight">
            <div
              className={`font-display text-lg font-semibold tracking-tight ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Открой <span className="text-gradient-gold">Беларусь</span>
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.2em] ${
                scrolled ? "text-muted-foreground" : "text-cream/70"
              }`}
            >
              Незабываемые экскурсии
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((n) => {
            if (n.to === "/destinations") {
              return (
                <div
                  key={n.to}
                  className="relative"
                  onMouseEnter={() => setDestOpen(true)}
                  onMouseLeave={() => setDestOpen(false)}
                >
                  <Link
                    to={n.to}
                    className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${textClass}`}
                    activeProps={{ className: "text-gold" }}
                  >
                    {n.label}
                    <ChevronDown size={14} className={`transition-transform ${destOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {destOpen && (
                    <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                      <div className="bg-background border border-border/60 rounded-xl shadow-elegant py-2 animate-fade-in">
                        {destinationLinks.map((d) => (
                          <Link
                            key={d.to}
                            to={d.to}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-gold hover:bg-secondary/60 transition"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className={`text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${textClass}`}
                activeProps={{ className: "text-gold after:w-full" }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-gold text-gold-foreground text-sm font-semibold shadow-gold hover:brightness-105 transition"
          >
            Забронировать
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2.5 border-b border-border/40"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold"
            >
              Забронировать
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
