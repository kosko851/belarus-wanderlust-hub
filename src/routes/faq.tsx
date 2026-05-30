import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/content";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Частые вопросы — Открой Беларусь" },
      { name: "description", content: "Ответы на частые вопросы о турах, бронировании и поездках по Беларуси." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">FAQ</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Частые вопросы</h1>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80">
            Всё, что нужно знать перед поездкой — от бронирования до оплаты.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/60 rounded-xl px-6 shadow-elegant"
              >
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant">
            <BookingForm title="Не нашли ответ?" compact />
          </div>
        </div>
      </section>
    </>
  );
}
