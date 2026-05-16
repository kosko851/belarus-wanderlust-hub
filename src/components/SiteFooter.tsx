import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">
            Explore <span className="text-gradient-gold">Belarus</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            Curated journeys through the hidden gem of Eastern Europe — castles, ancient forests, and timeless culture.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full grid place-items-center border border-primary-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/destinations" className="hover:text-gold">Destinations</Link></li>
            <li><Link to="/tours" className="hover:text-gold">Tours</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><MapPin size={14} className="text-gold"/> Minsk, Belarus</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> +375 29 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold"/> hello@explorebelarus.travel</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Explore Belarus. All rights reserved.
      </div>
    </footer>
  );
}
