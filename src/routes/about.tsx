import { createFileRoute } from "@tanstack/react-router";
import minsk from "@/assets/minsk.jpg";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Explore Belarus" },
      { name: "description", content: "Local experts crafting unforgettable Belarus tours since 2013." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, t: "Sustainable", d: "Small groups, local suppliers, low-impact routes." },
  { icon: Heart, t: "Personal", d: "Every itinerary is tailored to who you are." },
  { icon: Shield, t: "Trusted", d: "A decade of safe, seamless journeys across Belarus." },
  { icon: Sparkles, t: "Curated", d: "Hand-picked moments you won't find in guidebooks." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">About Us</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Local experts, lifelong travelers</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</span>
            <h2 className="mt-4 font-display text-4xl">A love letter to a quiet country</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Explore Belarus was founded in 2013 by a small team of Minsk-born guides who believed their homeland deserved more attention. What began as weekend trips for friends has grown into a boutique tour company welcoming travelers from over 40 countries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't do crowds. We do mornings in the forest, dinners in family homes, and unhurried afternoons inside places that mattered for centuries.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={minsk} alt="Minsk at dusk" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl">Four promises we live by</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-card p-8 rounded-2xl border border-border/60 text-center">
                <span className="inline-grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
