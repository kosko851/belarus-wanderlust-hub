import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/content";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Новая подписка на рассылку",
          _template: "table",
          Email: email,
          Тип: "Подписка на новости и акции",
        }),
      });
      setSent(true);
      setEmail("");
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="text-sm text-primary-foreground/80">
        ✓ Спасибо! Вы подписаны на рассылку акций и новостей.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваш email"
        className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2.5 rounded-full bg-gold text-gold-foreground font-semibold text-sm hover:brightness-105 transition disabled:opacity-60 shrink-0"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
      </button>
    </form>
  );
}
