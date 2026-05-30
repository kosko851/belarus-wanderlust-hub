import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, Users, Tag } from "lucide-react";
import { tours, tourExtras, promotions, formatPrice, applyDiscount } from "@/lib/content";

export function PriceCalculator() {
  const [tourId, setTourId] = useState(tours[0].id);
  const [guests, setGuests] = useState(2);
  const [promoCode, setPromoCode] = useState("");
  const [extras, setExtras] = useState<string[]>([]);

  const tour = tours.find((t) => t.id === tourId)!;
  const promo = promotions.find((p) => p.code.toLowerCase() === promoCode.trim().toLowerCase());
  const extrasTotal = extras.reduce((sum, id) => {
    const extra = tourExtras.find((e) => e.id === id);
    return sum + (extra?.price ?? 0);
  }, 0);

  const baseTotal = tour.price * guests + extrasTotal * guests;
  const discount = promo?.discount ?? 0;
  const finalTotal = applyDiscount(baseTotal, discount);

  function toggleExtra(id: string) {
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));
  }

  return (
    <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-11 w-11 grid place-items-center rounded-full bg-primary/10 text-primary">
          <Calculator size={20} />
        </span>
        <div>
          <h3 className="font-display text-2xl">Калькулятор стоимости</h3>
          <p className="text-sm text-muted-foreground">Рассчитайте цену тура для вашей группы</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Тур</label>
          <select
            value={tourId}
            onChange={(e) => setTourId(e.target.value)}
            className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            {tours.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} — {formatPrice(t.price)}/чел.
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Users size={12} /> Количество гостей: {guests}
          </label>
          <input
            type="range"
            min={1}
            max={12}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 w-full accent-gold"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span>
            <span>12</span>
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Дополнительные услуги</label>
          <div className="mt-3 space-y-2">
            {tourExtras.map((extra) => (
              <label key={extra.id} className="flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-secondary/40 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={extras.includes(extra.id)}
                  onChange={() => toggleExtra(extra.id)}
                  className="accent-gold"
                />
                <span className="text-sm flex-1">{extra.name}</span>
                <span className="text-sm text-gold font-medium">+{formatPrice(extra.price)}/чел.</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Tag size={12} /> Промокод
          </label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Например: LIDA10"
            className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 uppercase"
          />
          {promo && (
            <p className="mt-2 text-sm text-green-600">✓ Промокод «{promo.code}» — скидка {promo.discount}%</p>
          )}
          {promoCode && !promo && (
            <p className="mt-2 text-sm text-muted-foreground">Промокод не найден. Смотрите акции на странице «Акции».</p>
          )}
        </div>

        <div className="pt-4 border-t border-border/60">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{tour.name} × {guests} чел.</span>
            <span>{formatPrice(tour.price * guests)}</span>
          </div>
          {extrasTotal > 0 && (
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>Доп. услуги × {guests}</span>
              <span>{formatPrice(extrasTotal * guests)}</span>
            </div>
          )}
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600 mt-1">
              <span>Скидка {discount}%</span>
              <span>−{formatPrice(baseTotal - finalTotal)}</span>
            </div>
          )}
          <div className="flex justify-between items-baseline mt-4">
            <span className="font-display text-xl">Итого</span>
            <span className="font-display text-4xl text-gold">{formatPrice(finalTotal)}</span>
          </div>
        </div>

        <Link
          to="/contact"
          search={{ tour: tour.name, guests: String(guests), message: promo ? `Промокод: ${promo.code}` : undefined }}
          className="block text-center px-6 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition"
        >
          Забронировать за {formatPrice(finalTotal)}
        </Link>
      </div>
    </div>
  );
}
