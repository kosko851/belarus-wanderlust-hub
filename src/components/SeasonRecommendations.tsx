import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { seasonTips } from "@/lib/content";

export function SeasonRecommendations() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Когда ехать</span>
          <h2 className="mt-4 font-display text-4xl">Лучшее время для поездки</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonTips.map((s) => (
            <article key={s.season} className="bg-card p-6 rounded-2xl border border-border/60 hover:-translate-y-1 transition-all">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-3 font-display text-xl">{s.season}</h3>
              <p className="text-xs text-gold uppercase tracking-widest mt-1">{s.months}</p>
              <ul className="mt-4 space-y-2">
                {s.tips.map((tip) => (
                  <li key={tip} className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles size={12} className="text-gold mt-1 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-medium text-primary">Идеально для: {s.bestFor}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/planner" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition">
            Составить маршрут <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
