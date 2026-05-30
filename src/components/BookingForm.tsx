import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { submitInquiry } from "@/lib/submit-inquiry";

type BookingFormProps = {
  title?: string;
  defaultTour?: string;
  defaultGuests?: string;
  defaultMessage?: string;
  compact?: boolean;
};

export function BookingForm({
  title = "Заявка на бронирование",
  defaultTour = "",
  defaultGuests = "",
  defaultMessage = "",
  compact = false,
}: BookingFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      await submitInquiry({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: (fd.get("phone") as string) || undefined,
        tour: (fd.get("tour") as string) || undefined,
        dates: (fd.get("dates") as string) || undefined,
        guests: (fd.get("guests") as string) || undefined,
        message: (fd.get("message") as string) || undefined,
      });
      setSent(true);
      form.reset();
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже или напишите на bikbu83@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold">
          <Send size={24} />
        </div>
        <h3 className="mt-6 font-display text-3xl">Спасибо!</h3>
        <p className="mt-3 text-muted-foreground">Заявка отправлена на bikbu83@gmail.com. Мы свяжемся с вами в течение 24 часов.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-primary hover:text-gold transition"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="font-display text-3xl mb-2">{title}</h2>
      <div className={`grid ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"} gap-5`}>
        <Field label="Имя и фамилия" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Телефон" name="phone" type="tel" placeholder="+375 29 ..." />
        <Field label="Количество гостей" name="guests" type="number" placeholder="2" defaultValue={defaultGuests} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Интересующий тур" name="tour" defaultValue={defaultTour} placeholder="Замковый экспресс" />
        <Field label="Даты поездки" name="dates" placeholder="Июнь 2026" />
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
          Расскажите о вашей мечте
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          defaultValue={defaultMessage}
          className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition disabled:opacity-60"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
      />
    </div>
  );
}
