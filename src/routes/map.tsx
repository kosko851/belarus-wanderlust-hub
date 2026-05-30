import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { mapLocations, getMapEmbedUrl } from "@/lib/content";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Карта направлений — Открой Беларусь" },
      { name: "description", content: "Интерактивная карта достопримечательностей Беларуси с расстояниями от Минска." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  const [active, setActive] = useState(mapLocations[0]);

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Карта</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Направления на карте</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Все ключевые точки маршрутов — расстояния, время в пути и описание.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="space-y-3 lg:max-h-[600px] overflow-y-auto">
            {mapLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${
                  active.id === loc.id
                    ? "bg-primary text-primary-foreground border-gold shadow-gold"
                    : "bg-card border-border/60 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg">{loc.name}</h3>
                    <p className={`text-xs mt-1 ${active.id === loc.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {loc.region}
                    </p>
                  </div>
                  <MapPin size={16} className="text-gold shrink-0 mt-1" />
                </div>
                <div className={`mt-3 flex gap-4 text-xs ${active.id === loc.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  <span className="flex items-center gap-1">
                    <Navigation size={11} /> {loc.distanceFromMinsk} от Минска
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {loc.travelTime}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-elegant">
              <div className="p-6 border-b border-border/60">
                <h2 className="font-display text-2xl">{active.name}</h2>
                <p className="mt-2 text-muted-foreground">{active.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to={active.id === "lida" ? "/lida-castle" : "/destinations"}
                    className="px-5 py-2 rounded-full bg-gold text-gold-foreground text-sm font-semibold hover:brightness-105 transition"
                  >
                    Подробнее
                  </Link>
                  <a
                    href={`https://www.openstreetmap.org/?mlat=${active.lat}&mlon=${active.lng}#map=13/${active.lat}/${active.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-5 py-2 rounded-full border border-border text-sm hover:border-gold hover:text-gold transition"
                  >
                    Открыть в OSM <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="aspect-[16/10]">
                <iframe
                  title={`Карта: ${active.name}`}
                  src={getMapEmbedUrl(active.lat, active.lng)}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Расстояние от Минска", value: active.distanceFromMinsk },
                { label: "Время в пути", value: active.travelTime },
                { label: "Регион", value: active.region },
              ].map((item) => (
                <div key={item.label} className="bg-secondary/60 rounded-xl p-4 text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
                  <div className="mt-1 font-display text-xl">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
