import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Tag, Copy, Check, ArrowRight } from "lucide-react";
import { promotions, formatPrice, applyDiscount, tours } from "@/lib/content";

export const Route = createFileRoute("/promotions")({
  head: () => ({
    meta: [
      { title: "Акции и скидки — Открой Беларусь" },
      { name: "description", content: "Специальные предложения и промокоды на туры по Беларуси." },
    ],
  }),
  component: PromotionsPage,
});

function PromotionsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Акции</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Специальные предложения</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Используйте промокоды при бронировании — скидка применяется при подтверждении заявки.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="relative bg-card border border-border/60 rounded-2xl p-8 shadow-elegant hover:-translate-y-1 transition-all overflow-hidden"
            >
              <span className="absolute top-4 right-4 bg-gold text-gold-foreground text-sm font-bold px-3 py-1 rounded-full">
                {promo.badge}
              </span>
              <Tag size={24} className="text-gold" />
              <h3 className="mt-4 font-display text-2xl">{promo.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{promo.desc}</p>
              <p className="mt-4 text-xs text-muted-foreground">Действует до {promo.validUntil}</p>

              <div className="mt-6 flex items-center gap-3">
                <code className="flex-1 bg-secondary/60 border border-dashed border-gold/40 rounded-xl px-4 py-3 font-mono text-lg tracking-widest text-center">
                  {promo.code}
                </code>
                <button
                  onClick={() => copyCode(promo.code)}
                  className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90 transition shrink-0"
                  aria-label="Скопировать промокод"
                >
                  {copied === promo.code ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <Link
                to="/contact"
                search={{ message: `Промокод: ${promo.code}` }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition"
              >
                Использовать промокод <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-center mb-10">Пример экономии</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tours.map((t) => {
              const discounted = applyDiscount(t.price, 15);
              return (
                <div key={t.id} className="bg-card rounded-xl p-5 border border-border/60 text-center">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="mt-2 text-muted-foreground line-through text-sm">{formatPrice(t.price)}</div>
                  <div className="font-display text-xl text-gold">{formatPrice(discounted)}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">с промокодом −15%</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
