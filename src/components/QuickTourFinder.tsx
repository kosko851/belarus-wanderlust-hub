import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { tours, formatPrice } from "@/lib/content";

export function QuickTourFinder() {
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(800);

  const match = tours
    .filter((t) => t.durationDays <= days + 1 && t.price <= budget)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.price - b.price;
    })[0];

  const fallback = tours.reduce((best, t) =>
    Math.abs(t.price - budget) < Math.abs(best.price - budget) ? t : best
  );

  const suggested = match ?? fallback;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-elegant">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-11 w-11 grid place-items-center rounded-full bg-primary/10 text-primary">
              <Search size={20} />
            </span>
            <div>
              <h2 className="font-display text-3xl">Подбор тура</h2>
              <p className="text-sm text-muted-foreground">Найдём идеальный маршрут за 10 секунд</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Сколько дней: {days}
              </label>
              <input
                type="range"
                min={2}
                max={7}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="mt-2 w-full accent-gold"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Бюджет на человека: {formatPrice(budget)}
              </label>
              <input
                type="range"
                min={300}
                max={1500}
                step={50}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-2 w-full accent-gold"
              />
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/60 border border-border/40">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Рекомендуем</p>
            <h3 className="font-display text-2xl">{suggested.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {suggested.duration} · {suggested.difficulty} · {formatPrice(suggested.price)}/чел.
            </p>
            <Link
              to="/contact"
              search={{ tour: suggested.name }}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold text-sm hover:brightness-105 transition"
            >
              Забронировать <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
