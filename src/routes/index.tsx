import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mir-castle.jpg";
import nesvizhImg from "@/assets/nesvizh-castle.jpg";
import forestImg from "@/assets/belovezhskaya.jpg";
import lakesImg from "@/assets/braslav-lakes.jpg";
import { ArrowRight, MapPin, Compass, Award, Users, Star, Tag } from "lucide-react";
import { QuickTourFinder } from "@/components/QuickTourFinder";
import { SeasonRecommendations } from "@/components/SeasonRecommendations";
import { promotions } from "@/lib/content";

const LIDA_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lida_Castle_2011.jpg/1280px-Lida_Castle_2011.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Открой Беларусь — Скрытая жемчужина Восточной Европы" },
      {
        name: "description",
        content:
          "Незабываемые туры по Беларуси: замки ЮНЕСКО, Лидский замок, первозданные леса и чистейшие озёра. Авторские маршруты от местных экспертов.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { img: LIDA_IMG, name: "Лидский замок", tag: "Средневековая крепость", to: "/lida-castle" as const },
  { img: nesvizhImg, name: "Несвижский замок", tag: "Объект ЮНЕСКО", to: "/destinations" as const },
  { img: forestImg, name: "Беловежская пуща", tag: "Первозданный лес", to: "/destinations" as const },
  { img: lakesImg, name: "Браславские озёра", tag: "Природное чудо", to: "/destinations" as const },
];

const stats = [
  { v: "12+", l: "Лет опыта" },
  { v: "8 400", l: "Довольных путешественников" },
  { v: "36", l: "Авторских маршрутов" },
  { v: "4.9", l: "Средняя оценка" },
];

const testimonials = [
  {
    name: "София М.",
    from: "Минск",
    text: "Абсолютно волшебная неделя. Замки — как из сказки, а истории гида оживляли каждый камень.",
  },
  {
    name: "Даниил Р.",
    from: "Москва",
    text: "Рассвет в Беловежской пуще — то, что я никогда не забуду. Логистика безупречна, темп идеальный.",
  },
  {
    name: "Анна К.",
    from: "Гродно",
    text: "Лидский замок поразил всю семью — дети до сих пор играют в рыцарей. Обязательно вернёмся!",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Мирский замок на закате"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-6 text-center text-cream">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
            Незабываемые экскурсии · с 2013 года
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-fade-up delay-100">
            Открой скрытую жемчужину
            <br />
            <span className="text-gradient-gold italic">Восточной Европы</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-cream/85 animate-fade-up delay-200">
            От средневековых замков до древних лесов, где до сих пор живут зубры — наши местные
            эксперты создадут путешествие вашей мечты по Беларуси.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
            <Link
              to="/tours"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition"
            >
              Забронировать тур
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/lida-castle"
              className="px-8 py-4 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition"
            >
              Лидский замок
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-widest animate-fade-in delay-500">
          ЛИСТАЙТЕ ВНИЗ
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Почему Беларусь</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
              Земля, где время
              <br />
              течёт <em className="text-primary">медленно</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Беларусь — лучший секрет Европы: сказочные замки, древнейший лес континента, более 11
              000 озёр и гостеприимные люди. Более десяти лет мы создаём маршруты, раскрывающие её
              тихую магию.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: Award, t: "Объекты ЮНЕСКО" },
                { icon: Compass, t: "Местные гиды" },
                { icon: MapPin, t: "Авторские маршруты" },
                { icon: Users, t: "Малые группы" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="h-10 w-10 grid place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Link
                key={h.name}
                to={h.to}
                className={`relative rounded-2xl overflow-hidden shadow-elegant group block ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={h.img}
                  alt={h.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-5 text-cream">
                  <div className="text-[10px] uppercase tracking-widest text-gold">{h.tag}</div>
                  <div className="font-display text-lg">{h.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuickTourFinder />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Акции</span>
            <h2 className="mt-4 font-display text-4xl">Специальные предложения</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promotions.map((p) => (
              <Link
                key={p.id}
                to="/promotions"
                className="group bg-card p-6 rounded-2xl border border-border/60 shadow-elegant hover:-translate-y-1 transition-all"
              >
                <span className="inline-block bg-gold text-gold-foreground text-xs font-bold px-2 py-0.5 rounded-full">{p.badge}</span>
                <h3 className="mt-3 font-display text-lg group-hover:text-gold transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gold">
                  <Tag size={12} /> {p.code}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeasonRecommendations />

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl text-gold">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Отзывы</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Истории, которые хочется унести с собой</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card p-8 rounded-2xl shadow-elegant border border-border/60">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed">«{t.text}»</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.from}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center text-cream">
            <img src={forestImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl">
                Ваша история о Беларуси
                <br />
                начинается <em className="text-gradient-gold">здесь</em>.
              </h2>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition"
              >
                Начать планирование <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
