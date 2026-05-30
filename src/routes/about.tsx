import { createFileRoute } from "@tanstack/react-router";
import minsk from "@/assets/minsk.jpg";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О нас — Открой Беларусь" },
      { name: "description", content: "Местные эксперты, создающие незабываемые туры по Беларуси с 2013 года." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, t: "Экологичность", d: "Малые группы, местные поставщики, маршруты с минимальным воздействием." },
  { icon: Heart, t: "Индивидуальный подход", d: "Каждый маршрут адаптируется под вас." },
  { icon: Shield, t: "Надёжность", d: "Десять лет безопасных и комфортных путешествий по Беларуси." },
  { icon: Sparkles, t: "Авторский отбор", d: "Моменты, которых не найти в путеводителях." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">О нас</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Местные эксперты и путешественники</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Наша история</span>
            <h2 className="mt-4 font-display text-4xl">Любовное письмо тихой стране</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              «Открой Беларусь» основана в 2013 году небольшой командой минских гидов, которые верили,
              что их родина заслуживает большего внимания. То, что начиналось как поездки для друзей,
              выросло в бутик-туроператора, принимающего путешественников из более чем 40 стран.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Мы не делаем массовый туризм. Мы делаем утренние прогулки в лесу, ужины в семейных
              домах и неспешные дни в местах, которые помнили века.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={minsk} alt="Минск на закате" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Почему мы</span>
            <h2 className="mt-4 font-display text-4xl">Четыре обещания, которым мы следуем</h2>
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
