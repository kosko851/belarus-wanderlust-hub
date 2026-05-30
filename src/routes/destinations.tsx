import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/content";
import { resolveImage } from "@/lib/assets";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Направления — Открой Беларусь" },
      {
        name: "description",
        content:
          "От Лидского замка до Беловежской пущи и Браславских озёр — откройте самые красивые места Беларуси.",
      },
    ],
  }),
  component: DestinationsPage,
});

const filters = ["Все", "Замки", "Природа", "Города", "История"] as const;

const filterMap: Record<string, string[]> = {
  Все: [],
  Замки: ["lida", "mir", "nesvizh"],
  Природа: ["forest", "lakes"],
  Города: ["minsk"],
  История: ["brest", "lida"],
};

function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Все");

  const filtered =
    activeFilter === "Все"
      ? destinations
      : destinations.filter((d) => filterMap[activeFilter]?.includes(d.id));

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Направления</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Семь чудес — одна страна</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Каждое направление выбрано за его историю, красоту и то, как оно отражает душу Беларуси.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border/60">
        <div className="container mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((d, i) => {
            const linkTo = d.id === "lida" ? "/lida-castle" : "/tours";
            return (
              <article
                key={d.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={resolveImage(d.imgKey, d.img)}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                  />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-gold text-gold-foreground px-3 py-1 rounded-full">
                    {d.tag}
                  </span>
                  {"featured" in d && d.featured && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      Популярное
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <Link
                    to={linkTo}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition"
                  >
                    Подробнее <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
