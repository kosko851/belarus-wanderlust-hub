import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Castle,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  Sword,
  Users,
} from "lucide-react";
import { lidaActivities, lidaTours, formatPrice } from "@/lib/content";
import { BookingForm } from "@/components/BookingForm";

const LIDA_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lida_Castle_2011.jpg/1280px-Lida_Castle_2011.jpg";

export const Route = createFileRoute("/lida-castle")({
  head: () => ({
    meta: [
      { title: "Лидский замок — Открой Беларусь" },
      {
        name: "description",
        content:
          "Лидский замок XIV века: рыцарские турниры, стрельба из лука, ночные экскурсии, средневековые банкеты и семейные программы.",
      },
    ],
  }),
  component: LidaCastlePage,
});

const features = [
  { icon: Castle, title: "Готическая крепость", desc: "Построена в 1323 году великим князем Гедимином" },
  { icon: Sword, title: "8 активностей", desc: "От рыцарских турниров до мастер-классов кузнеца" },
  { icon: Users, title: "Для всей семьи", desc: "Детские программы и фотосессии в костюмах" },
  { icon: Shield, title: "Живая история", desc: "Реконструкции и фестивали круглый год" },
];

function LidaCastlePage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img
          src={LIDA_IMG}
          alt="Лидский замок"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Гродненская область</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Лидский замок</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/85 text-lg">
            Средневековая крепость XIV века — место, где история оживает. Рыцари, турниры, факелы и
            легенды на каждом шагу.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <MapPin size={14} className="text-gold" /> г. Лида, 170 км от Минска
            </span>
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <Clock size={14} className="text-gold" /> 09:00–20:00 ежедневно
            </span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-6 rounded-2xl border border-border/60 text-center">
              <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Что можно сделать</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">8 незабываемых впечатлений</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lidaActivities.map((a, i) => (
              <article
                key={a.title}
                className="bg-card p-6 rounded-2xl border border-border/60 hover:-translate-y-1 transition-all animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Sparkles size={18} className="text-gold" />
                <h3 className="mt-3 font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <span className="mt-4 inline-block text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {a.season}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Тарифы</span>
            <h2 className="mt-4 font-display text-4xl">Программы посещения</h2>
            <p className="mt-4 text-muted-foreground">Доступные цены в белорусских рублях</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lidaTours.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-7 border transition-all hover:-translate-y-1 ${
                  t.family
                    ? "bg-primary text-primary-foreground border-gold shadow-gold"
                    : "bg-card border-border/60 shadow-elegant"
                }`}
              >
                {t.family && (
                  <span className="text-[10px] uppercase tracking-widest bg-gold text-gold-foreground px-3 py-1 rounded-full">
                    Для семей
                  </span>
                )}
                <h3 className="mt-3 font-display text-2xl">{t.name}</h3>
                <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {t.duration}
                </div>
                <div className="mt-4 font-display text-4xl text-gold">{formatPrice(t.price)}</div>
                <div className="text-xs text-muted-foreground">/ человек</div>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">История</span>
            <h2 className="mt-4 font-display text-4xl">Крепость, которой 700 лет</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Лидский замок был заложен в 1323 году великим князем литовским Гедимином как форпост на
              границе с Тевтонским орденом. Квадратная крепость с четырьмя угловыми башнями и
              центральным донжоном — один из немногих сохранившихся образцов готической
              оборонительной архитектуры Беларуси.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Сегодня замок — центр культурной жизни региона. Здесь проходят международные
              рыцарские фестивали, средневековые ярмарки и концерты под звёздами.
            </p>
            <Link
              to="/tours"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition"
            >
              Смотреть комбинированные туры <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant">
            <BookingForm title="Забронировать визит в Лидский замок" defaultTour="Лидский замок" compact />
          </div>
        </div>
      </section>
    </>
  );
}
