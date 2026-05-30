import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/content";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    tour: typeof search.tour === "string" ? search.tour : "",
    guests: typeof search.guests === "string" ? search.guests : "",
    message: typeof search.message === "string" ? search.message : "",
  }),
  head: () => ({
    meta: [
      { title: "Контакты и бронирование — Открой Беларусь" },
      { name: "description", content: "Свяжитесь с нами для планирования путешествия по Беларуси. Ответим в течение 24 часов." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { tour, guests, message } = Route.useSearch();

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Контакты</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Спланируем ваше путешествие</h1>
          <p className="mt-6 max-w-xl mx-auto text-primary-foreground/80">
            Расскажите немного о себе — наша команда ответит в течение 24 часов с персональным
            предложением.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-elegant">
            <BookingForm defaultTour={tour} defaultGuests={guests} defaultMessage={message} />
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <InfoCard icon={MapPin} title="Адрес" lines={["пр. Независимости, 12", "Минск, Беларусь"]} />
            <InfoCard icon={Phone} title="Телефон" lines={["+375 29 000 0000", "Пн–Сб · 9:00–19:00"]} />
            <InfoCard icon={Mail} title="Email" lines={[CONTACT_EMAIL]} />

            <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]">
              <iframe
                title="Карта Минска"
                src="https://www.openstreetmap.org/export/embed.html?bbox=27.45%2C53.85%2C27.65%2C53.95&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 flex gap-4">
      <span className="h-11 w-11 grid place-items-center rounded-full bg-primary/10 text-primary shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-foreground/85">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
