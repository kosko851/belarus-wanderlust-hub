import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Explore Belarus" },
      { name: "description", content: "Reach out to plan your Belarus journey. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Contact</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Let's plan your journey</h1>
          <p className="mt-6 max-w-xl mx-auto text-primary-foreground/80">
            Tell us a little about yourself — our team will respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-elegant">
            {sent ? (
              <div className="text-center py-16">
                <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold">
                  <Send size={24} />
                </div>
                <h3 className="mt-6 font-display text-3xl">Thank you!</h3>
                <p className="mt-3 text-muted-foreground">Your request has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <h2 className="font-display text-3xl mb-2">Booking Inquiry</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Preferred Tour" name="tour" placeholder="e.g. Castle Explorer" />
                  <Field label="Travel Dates" name="dates" placeholder="June 2026" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about your dream trip</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:brightness-105 transition"
                >
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <InfoCard icon={MapPin} title="Visit" lines={["Nezavisimosti Ave, 12", "Minsk, Belarus"]} />
            <InfoCard icon={Phone} title="Call" lines={["+375 29 000 0000", "Mon–Sat · 9:00–19:00"]} />
            <InfoCard icon={Mail} title="Write" lines={["hello@explorebelarus.travel", "bookings@explorebelarus.travel"]} />

            <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]">
              <iframe
                title="Map of Minsk"
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

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ size?: number }>; title: string; lines: string[] }) {
  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 flex gap-4">
      <span className="h-11 w-11 grid place-items-center rounded-full bg-primary/10 text-primary shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-foreground/85">{l}</div>)}
      </div>
    </div>
  );
}
