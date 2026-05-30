import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Clock, TrendingUp, Check, SlidersHorizontal } from "lucide-react";
import { tours, formatPrice } from "@/lib/content";
import { PriceCalculator } from "@/components/PriceCalculator";
import { TourCompareBar, TourCompareCheckbox } from "@/components/TourCompare";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Туры и маршруты — Открой Беларусь" },
      {
        name: "description",
        content: "Выберите тур на 2, 3, 5 или 7 дней по Беларуси — или создайте индивидуальный маршрут.",
      },
    ],
  }),
  component: ToursPage,
});

type SortKey = "price-asc" | "price-desc" | "days-asc" | "days-desc";

const categoryFilters = [
  { id: "all", label: "Все" },
  { id: "castles", label: "Замки" },
  { id: "nature", label: "Природа" },
  { id: "combined", label: "Комбинированные" },
] as const;

const difficultyFilters = ["Все", "Лёгкий", "Средний"];

function ToursPage() {
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("Все");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let result = tours.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (difficulty !== "Все" && t.difficulty !== difficulty) return false;
      if (t.price > maxPrice) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "days-asc": return a.durationDays - b.durationDays;
        case "days-desc": return b.durationDays - a.durationDays;
        default: return 0;
      }
    });

    return result;
  }, [category, difficulty, maxPrice, sort]);

  function toggleCompare(id: string) {
    setCompare((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  }

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Туры</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Авторские маршруты</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Фильтруйте, сравнивайте и рассчитывайте стоимость — найдите идеальный тур.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border/60 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium">
            <SlidersHorizontal size={16} className="text-gold" /> Фильтры и сортировка
          </div>
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Категория</label>
              <div className="flex gap-2 mt-2">
                {categoryFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCategory(f.id)}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      category === f.id ? "bg-primary text-primary-foreground" : "bg-background border border-border/60"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Сложность</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="mt-2 block bg-background border border-input rounded-xl px-4 py-2 text-sm"
              >
                {difficultyFilters.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="min-w-[180px]">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Макс. цена: {formatPrice(maxPrice)}
              </label>
              <input
                type="range"
                min={300}
                max={1500}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-2 w-full accent-gold"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Сортировка</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="mt-2 block bg-background border border-input rounded-xl px-4 py-2 text-sm"
              >
                <option value="price-asc">Цена ↑</option>
                <option value="price-desc">Цена ↓</option>
                <option value="days-asc">Длительность ↑</option>
                <option value="days-desc">Длительность ↓</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              Нет туров по выбранным фильтрам.{" "}
              <button onClick={() => { setCategory("all"); setDifficulty("Все"); setMaxPrice(1500); }} className="text-gold underline">
                Сбросить фильтры
              </button>
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((t) => (
                <div
                  key={t.id}
                  className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                    t.featured
                      ? "bg-primary text-primary-foreground border-gold shadow-gold lg:scale-[1.02]"
                      : "bg-card border-border/60 shadow-elegant"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] tracking-widest uppercase px-4 py-1 rounded-full font-semibold whitespace-nowrap">
                      Самый популярный
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-2xl">{t.name}</h3>
                    <TourCompareCheckbox tourId={t.id} selected={compare} onToggle={toggleCompare} />
                  </div>
                  <div className={`mt-3 flex gap-4 text-xs ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    <span className="flex items-center gap-1"><Clock size={12} /> {t.duration}</span>
                    <span className="flex items-center gap-1"><TrendingUp size={12} /> {t.difficulty}</span>
                  </div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl text-gold">{formatPrice(t.price)}</span>
                    <span className={`text-xs ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ чел.</span>
                  </div>
                  <ul className={`mt-6 space-y-3 text-sm flex-1 ${t.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check size={16} className="text-gold mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    search={{ tour: t.name }}
                    className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition ${
                      t.featured ? "bg-gold text-gold-foreground hover:brightness-105" : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Забронировать
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 max-w-2xl">
          <PriceCalculator />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-secondary/60 border border-border/60 p-10 md:p-16 text-center">
            <h3 className="font-display text-3xl md:text-4xl">
              Или создайте <em className="text-primary">свой</em> маршрут
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Используйте планировщик — выберите места, и мы составим индивидуальный тур.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/planner" className="px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition">
                Открыть планировщик
              </Link>
              <Link to="/promotions" className="px-8 py-4 rounded-full border border-border font-semibold hover:border-gold hover:text-gold transition">
                Смотреть акции
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TourCompareBar selected={compare} onToggle={toggleCompare} />
    </>
  );
}
