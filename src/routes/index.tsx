import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mir-castle.jpg";
import nesvizhImg from "@/assets/nesvizh-castle.jpg";
import forestImg from "@/assets/belovezhskaya.jpg";
import lakesImg from "@/assets/braslav-lakes.jpg";
import { ArrowRight, MapPin, Compass, Award, Users, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Belarus — Discover Eastern Europe's Hidden Gem" },
      { name: "description", content: "Book unforgettable tours of Belarus: UNESCO castles, primeval forests, and pristine lakes. Curated by local experts." },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { img: nesvizhImg, name: "Nesvizh Castle", tag: "UNESCO Heritage" },
  { img: forestImg, name: "Belovezhskaya Pushcha", tag: "Primeval Forest" },
  { img: lakesImg, name: "Braslav Lakes", tag: "Natural Wonder" },
];

const stats = [
  { v: "12+", l: "Years of Expertise" },
  { v: "8,400", l: "Happy Travelers" },
  { v: "32", l: "Curated Itineraries" },
  { v: "4.9", l: "Average Rating" },
];

const testimonials = [
  { name: "Sophia M.", from: "London, UK", text: "An absolutely magical week. The castles felt like stepping into a storybook, and our guide's stories brought everything to life." },
  { name: "Daniel R.", from: "Berlin, DE", text: "Belovezhskaya at dawn is something I'll never forget. Seamless logistics, thoughtful pacing, real depth." },
  { name: "Aiko T.", from: "Tokyo, JP", text: "Discovered a country I knew almost nothing about — left with friendships and a thousand photographs." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Mir Castle at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-6 text-center text-cream">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
            Unforgettable Excursions · Est. 2013
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-fade-up delay-100">
            Discover the Hidden Gem<br />
            of <span className="text-gradient-gold italic">Eastern Europe</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-cream/85 animate-fade-up delay-200">
            From medieval castles to ancient forests where European bison still roam — let our local experts craft the journey of a lifetime through Belarus.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
            <Link to="/tours" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition">
              Book Your Adventure
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/destinations" className="px-8 py-4 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
              Explore Destinations
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-widest animate-fade-in delay-500">
          SCROLL TO DISCOVER
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Belarus</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
              A land where time<br/>moves <em className="text-primary">slowly</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Belarus is Europe's best-kept secret — a country of fairytale castles, the continent's oldest forest, more than 11,000 lakes, and warm-hearted locals. We've spent over a decade designing journeys that reveal its quiet magic.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: Award, t: "UNESCO Sites" },
                { icon: Compass, t: "Local Guides" },
                { icon: MapPin, t: "Hand-picked Routes" },
                { icon: Users, t: "Small Groups" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={h.name} className={`relative rounded-2xl overflow-hidden shadow-elegant group ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}>
                <img src={h.img} alt={h.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-5 text-cream">
                  <div className="text-[10px] uppercase tracking-widest text-gold">{h.tag}</div>
                  <div className="font-display text-lg">{h.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl text-gold">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Travelers' Voices</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Stories worth bringing home</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card p-8 rounded-2xl shadow-elegant border border-border/60">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.from}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center text-cream">
            <img src={forestImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl">Your Belarus story<br/>begins <em className="text-gradient-gold">here</em>.</h2>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition">
                Start Planning <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
