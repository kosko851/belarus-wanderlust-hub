import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import mir from "@/assets/hero-mir-castle.jpg";
import nesvizh from "@/assets/nesvizh-castle.jpg";
import forest from "@/assets/belovezhskaya.jpg";
import minsk from "@/assets/minsk.jpg";
import lakes from "@/assets/braslav-lakes.jpg";
import brest from "@/assets/brest-fortress.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Explore Belarus" },
      { name: "description", content: "From Mir & Nesvizh Castles to Belovezhskaya Pushcha and the Braslav Lakes — discover Belarus's most breathtaking destinations." },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { img: mir, name: "Mir & Nesvizh Castles", tag: "UNESCO Heritage", desc: "Two of Eastern Europe's most spectacular Renaissance and Baroque castles, set among lakes and formal gardens." },
  { img: nesvizh, name: "Nesvizh Palace", tag: "Magnate Residence", desc: "The historic residence of the Radziwiłł family — a baroque masterpiece restored to its 17th-century splendor." },
  { img: forest, name: "Belovezhskaya Pushcha", tag: "UNESCO Natural Park", desc: "Europe's last primeval forest, home to the free-roaming European bison and 900-year-old oaks." },
  { img: minsk, name: "Minsk City Tour", tag: "Capital Discovery", desc: "Wide boulevards, Stalinist architecture, hidden cafés and the warm pulse of modern Belarusian life." },
  { img: lakes, name: "Braslav Lakes", tag: "Natural Wonder", desc: "An archipelago of 300 crystalline glacial lakes, perfect for kayaking, fishing and slow summer days." },
  { img: brest, name: "Brest Fortress", tag: "Historic Monument", desc: "A monumental WWII memorial complex on the border — moving, vast, and unforgettable." },
];

function DestinationsPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Destinations</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Six wonders, one country</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Each destination has been hand-selected for its story, beauty, and the way it captures the soul of Belarus.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <article
              key={d.name}
              className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-gold text-gold-foreground px-3 py-1 rounded-full">
                  {d.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <Link to="/tours" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition">
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
