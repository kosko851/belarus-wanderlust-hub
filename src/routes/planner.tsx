import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Calendar, MapPin, Wallet, Send, Check } from "lucide-react";
import { plannerSpots, formatPrice } from "@/lib/content";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Планировщик маршрута — Открой Беларусь" },
      { name: "description", content: "Составьте свой маршрут по Беларуси — выберите места и узнайте стоимость." },
    ],
  }),
  component: PlannerPage,
});

const categories = ["Все", ...Array.from(new Set(plannerSpots.map((s) => s.category)))];

function PlannerPage() {
  const [selected, setSelected] = useState<string[]>(["lida", "mir"]);
  const [filter, setFilter] = useState("Все");
  const [showForm, setShowForm] = useState(false);

  const filtered = filter === "Все" ? plannerSpots : plannerSpots.filter((s) => s.category === filter);

  const { totalDays, totalPrice, spots } = useMemo(() => {
    const spots = plannerSpots.filter((s) => selected.includes(s.id));
    const totalDays = spots.reduce((sum, s) => sum + s.days, 0);
    const totalPrice = spots.reduce((sum, s) => sum + s.days * s.pricePerDay, 0);
    return { totalDays, totalPrice, spots };
  }, [selected]);

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  }

  const tourName = spots.length > 0 ? `Индивидуальный: ${spots.map((s) => s.name).join(" + ")}` : "";

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Планировщик</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Создайте свой маршрут</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Выберите места, которые хотите посетить — мы рассчитаем длительность и примерную стоимость.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {filtered.map((spot) => {
                const isSelected = selected.includes(spot.id);
                return (
                  <button
                    key={spot.id}
                    onClick={() => toggle(spot.id)}
                    className={`text-left p-5 rounded-2xl border transition-all ${
                      isSelected
                        ? "bg-primary/5 border-gold shadow-gold"
                        : "bg-card border-border/60 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-gold">{spot.category}</span>
                        <h3 className="font-display text-lg mt-1">{spot.name}</h3>
                      </div>
                      <span
                        className={`h-6 w-6 rounded-full grid place-items-center text-xs ${
                          isSelected ? "bg-gold text-gold-foreground" : "border border-border"
                        }`}
                      >
                        {isSelected && <Check size={12} />}
                      </span>
                    </div>
                    <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {spot.days} {spot.days === 1 ? "день" : "дня"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Wallet size={11} /> {formatPrice(spot.pricePerDay)}/день
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-elegant sticky top-28">
              <h3 className="font-display text-2xl">Ваш маршрут</h3>

              {spots.length === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">Выберите хотя бы одно направление</p>
              ) : (
                <>
                  <ol className="mt-4 space-y-2">
                    {spots.map((s, i) => (
                      <li key={s.id} className="flex items-center gap-3 text-sm">
                        <span className="h-6 w-6 rounded-full bg-gold/20 text-gold text-xs grid place-items-center font-semibold">
                          {i + 1}
                        </span>
                        <span className="flex-1">{s.name}</span>
                        <span className="text-muted-foreground">{s.days}д</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 pt-4 border-t border-border/60 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} /> Длительность
                      </span>
                      <span className="font-semibold">{totalDays} {totalDays === 1 ? "день" : totalDays < 5 ? "дня" : "дней"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Wallet size={14} /> Примерная стоимость
                      </span>
                      <span className="font-display text-2xl text-gold">{formatPrice(totalPrice)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">* за одного человека, без проживания</p>
                  </div>

                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold hover:brightness-105 transition"
                  >
                    <Send size={16} /> Отправить маршрут
                  </button>
                </>
              )}
            </div>

            {showForm && spots.length > 0 && (
              <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-elegant animate-fade-in">
                <BookingForm
                  title="Заявка на маршрут"
                  defaultTour={tourName}
                  compact
                />
              </div>
            )}

            <div className="bg-secondary/60 rounded-2xl p-5 text-sm text-muted-foreground">
              <MapPin size={16} className="text-gold mb-2" />
              Наши гиды оптимизируют маршрут с учётом логистики и помогут забронировать отели.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
