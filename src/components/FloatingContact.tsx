import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/content";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-card border border-border/60 rounded-2xl shadow-elegant p-4 w-56 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="font-display text-sm">Связаться с нами</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/60 transition text-sm"
            >
              <MessageCircle size={18} className="text-gold" />
              Оставить заявку
            </Link>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/60 transition text-sm"
            >
              <Phone size={18} className="text-gold" />
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/60 transition text-sm truncate"
            >
              <span className="text-gold text-lg">@</span>
              <span className="truncate">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-gold text-gold-foreground shadow-gold grid place-items-center hover:brightness-105 transition"
        aria-label="Контакты"
      >
        {open ? <ChevronUp size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
