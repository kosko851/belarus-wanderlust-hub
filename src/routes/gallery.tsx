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

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Explore Belarus" },
      { name: "description", content: "A visual journey through Belarus: castles, ancient forests, lakes and culture." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: mir, alt: "Mir Castle" },
  { src: church, alt: "Wooden church in wheat field" },
  { src: forest, alt: "Belovezhskaya forest" },
  { src: lakes, alt: "Braslav Lakes from above" },
  { src: bison, alt: "European bison" },
  { src: nesvizh, alt: "Nesvizh Palace" },
  { src: folk, alt: "Traditional folk embroidery" },
  { src: sunset, alt: "Sunset over the lake" },
  { src: minsk, alt: "Minsk skyline" },
  { src: brest, alt: "Brest Fortress" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Gallery</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Belarus in light</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {images.map((img, i) => (
              <figure
                key={i}
                className="mb-5 break-inside-avoid overflow-hidden rounded-2xl group shadow-elegant"
              >
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
