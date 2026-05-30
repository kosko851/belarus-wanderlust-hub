import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/content";
import { NewsletterForm } from "@/components/NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">
            Открой <span className="text-gradient-gold">Беларусь</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            Авторские путешествия по скрытой жемчужине Восточной Европы — замки, древние леса и
            вечная культура.
          </p>
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Подписка на акции</p>
            <NewsletterForm />
          </div>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full grid place-items-center border border-primary-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Разделы</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/destinations" className="hover:text-gold">Направления</Link></li>
            <li><Link to="/lida-castle" className="hover:text-gold">Лидский замок</Link></li>
            <li><Link to="/tours" className="hover:text-gold">Туры</Link></li>
            <li><Link to="/planner" className="hover:text-gold">Планировщик</Link></li>
            <li><Link to="/map" className="hover:text-gold">Карта</Link></li>
            <li><Link to="/promotions" className="hover:text-gold">Акции</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Галерея</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/about" className="hover:text-gold">О нас</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Инструменты</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/planner" className="hover:text-gold">Создать маршрут</Link></li>
            <li><Link to="/tours" className="hover:text-gold">Калькулятор цены</Link></li>
            <li><Link to="/promotions" className="hover:text-gold">Промокоды</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Бронирование</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Контакты</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold shrink-0" /> Минск, Беларусь
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold shrink-0" /> +375 29 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold shrink-0" /> {CONTACT_EMAIL}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Открой Беларусь. Все права защищены.
      </div>
    </footer>
  );
}
