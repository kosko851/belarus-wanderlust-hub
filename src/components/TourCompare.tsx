import { tours, formatPrice } from "@/lib/content";
import { Check, X } from "lucide-react";

type TourCompareProps = {
  selected: string[];
  onToggle: (id: string) => void;
};

export function TourCompareBar({ selected, onToggle }: TourCompareProps) {
  if (selected.length === 0) return null;

  const selectedTours = tours.filter((t) => selected.includes(t.id));

  return (
    <div className="sticky bottom-0 z-40 bg-primary text-primary-foreground border-t border-gold/30 shadow-lg animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm">
            Сравнение: {selected.length}/2 тура
            {selected.length < 2 && " — выберите ещё один"}
          </span>
          <div className="flex gap-2">
            {selected.map((id) => (
              <button
                key={id}
                onClick={() => onToggle(id)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-foreground/10 text-xs hover:bg-primary-foreground/20"
              >
                {tours.find((t) => t.id === id)?.name}
                <X size={12} />
              </button>
            ))}
          </div>
        </div>

        {selected.length === 2 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-primary-foreground/20">
                  <th className="text-left py-2 pr-4 text-primary-foreground/70 font-normal">Параметр</th>
                  {selectedTours.map((t) => (
                    <th key={t.id} className="text-left py-2 px-4 font-display text-base">{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Цена", values: selectedTours.map((t) => formatPrice(t.price)) },
                  { label: "Длительность", values: selectedTours.map((t) => t.duration) },
                  { label: "Сложность", values: selectedTours.map((t) => t.difficulty) },
                  { label: "Пунктов в программе", values: selectedTours.map((t) => String(t.highlights.length)) },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-primary-foreground/10">
                    <td className="py-3 pr-4 text-primary-foreground/70">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-3 px-4">{v}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 text-primary-foreground/70 align-top">Включено</td>
                  {selectedTours.map((t) => (
                    <td key={t.id} className="py-3 px-4 align-top">
                      <ul className="space-y-1">
                        {t.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-1.5">
                            <Check size={12} className="text-gold mt-0.5 shrink-0" />
                            <span className="text-xs">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function TourCompareCheckbox({ tourId, selected, onToggle }: { tourId: string; selected: string[]; onToggle: (id: string) => void }) {
  const isSelected = selected.includes(tourId);
  const disabled = !isSelected && selected.length >= 2;

  return (
    <button
      type="button"
      onClick={() => !disabled && onToggle(tourId)}
      disabled={disabled}
      className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border transition ${
        isSelected
          ? "bg-gold text-gold-foreground border-gold"
          : disabled
            ? "border-border/40 text-muted-foreground/50 cursor-not-allowed"
            : "border-border/60 text-muted-foreground hover:border-gold hover:text-gold"
      }`}
    >
      {isSelected ? "✓ В сравнении" : "Сравнить"}
    </button>
  );
}
