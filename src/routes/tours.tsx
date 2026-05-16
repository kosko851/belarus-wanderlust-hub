import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, TrendingUp, Check } from "lucide-react";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Itineraries — Explore Belarus" },
      { name: "description", content: "Choose from 3, 5, and 7-day curated itineraries across Belarus — or design your own bespoke journey." },
    ],
  }),
  component: ToursPage,
});

const tours = [
  {
    name: "Castle Explorer",
    duration: "3 days",
    difficulty: "Easy",
    price: 690,
    featured: false,
    highlights: ["Mir Castle private tour", "Nesvizh Palace & gardens", "Minsk old town", "Traditional dinner"],
  },
  {
    name: "Nature & History",
    duration: "5 days",
    difficulty: "Moderate",
    price: 1190,
    featured: true,
    highlights: ["Belovezhskaya Pushcha sunrise", "Bison reserve visit", "Mir & Nesvizh", "Brest Fortress", "Local farm stay"],
  },
  {
    name: "Grand Belarus",
    duration: "7 days",
    difficulty: "Moderate",
    price: 1690,
    featured: false,
    highlights: ["All UNESCO sites", "Braslav Lakes kayaking", "Minsk full-day", "Folk culture workshop", "Wine & honey tasting"],
  },
];

function ToursPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Tours</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Crafted itineraries</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Each tour is designed with care — small groups, local guides, exceptional stays, and time to wander.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {tours.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                t.featured
                  ? "bg-primary text-primary-foreground border-gold shadow-gold scale-[1.02]"
                  : "bg-card border-border/60 shadow-elegant"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] tracking-widest uppercase px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              <div className={`mt-3 flex gap-4 text-xs ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <span className="flex items-center gap-1"><Clock size={12}/> {t.duration}</span>
                <span className="flex items-center gap-1"><TrendingUp size={12}/> {t.difficulty}</span>
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl text-gold">€{t.price}</span>
                <span className={`text-xs ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ person</span>
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${t.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition ${
                  t.featured
                    ? "bg-gold text-gold-foreground hover:brightness-105"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Book This Tour
              </Link>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 mt-20">
          <div className="rounded-3xl bg-secondary/60 border border-border/60 p-10 md:p-16 text-center">
            <h3 className="font-display text-3xl md:text-4xl">Or design your <em className="text-primary">own</em></h3>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Tell us what you dream of and we'll build a bespoke itinerary — from private castle dinners to multi-week deep dives.
            </p>
            <Link to="/contact" className="mt-8 inline-block px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition">
              Request a Custom Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
