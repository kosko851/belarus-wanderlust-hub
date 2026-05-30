import { createFileRoute } from "@tanstack/react-router";
import mir from "@/assets/hero-mir-castle.jpg";
import nesvizh from "@/assets/nesvizh-castle.jpg";
import forest from "@/assets/belovezhskaya.jpg";
import minsk from "@/assets/minsk.jpg";
import lakes from "@/assets/braslav-lakes.jpg";
import brest from "@/assets/brest-fortress.jpg";
import church from "@/assets/gallery-church.jpg";
import bison from "@/assets/gallery-bison.jpg";
import folk from "@/assets/gallery-folk.jpg";
import sunset from "@/assets/gallery-sunset.jpg";

const LIDA_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lida_Castle_2011.jpg/1280px-Lida_Castle_2011.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Галерея — Открой Беларусь" },
      { name: "description", content: "Визуальное путешествие по Беларуси: замки, леса, озёра и культура." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: LIDA_IMG, alt: "Лидский замок" },
  { src: mir, alt: "Мирский замок" },
  { src: church, alt: "Деревянная церковь в поле" },
  { src: forest, alt: "Беловежская пуща" },
  { src: lakes, alt: "Браславские озёра с высоты" },
  { src: bison, alt: "Зубр" },
  { src: nesvizh, alt: "Несвижский дворец" },
  { src: folk, alt: "Традиционная вышивка" },
  { src: sunset, alt: "Закат над озером" },
  { src: minsk, alt: "Панорама Минска" },
  { src: brest, alt: "Брестская крепость" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Галерея</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Беларусь в свете</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {images.map((img, i) => (
              <figure key={i} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl group shadow-elegant">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
