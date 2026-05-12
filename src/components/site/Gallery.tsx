import agnolotti from "@/assets/pioletta-agnolotti.avif";
import bonet from "@/assets/pioletta-bonet.png";
import brasato from "@/assets/pioletta-brasato.avif";
import brasatoSecondo from "@/assets/pioletta-brasato-2.jpg";
import guancia from "@/assets/pioletta-guancia.avif";
import insalataRussa from "@/assets/pioletta-insalata-russa.avif";
import locale from "@/assets/pioletta-locale-reale.png";
import plinBlu from "@/assets/pioletta-plin-blu.png";
import plinCrema from "@/assets/pioletta-plin-crema.jpg";
import plinPiatto from "@/assets/pioletta-plin-piatto.png";
import tartare from "@/assets/pioletta-piatto-tartare.avif";
import tomini from "@/assets/pioletta-tomini.avif";
import vini from "@/assets/pioletta-vini.jpg";
import vitello from "@/assets/pioletta-vitello-1.jpg";
import vitelloSecondo from "@/assets/pioletta-vitello-2.jpg";

const photos = [
  { src: locale, alt: "Bancone e sala de La Pioletta", className: "aspect-[3/4]", mobileClassName: "col-span-2 aspect-[16/11]" },
  { src: vitello, alt: "Vitello tonnato con pane e vino", className: "aspect-[4/5]", mobileClassName: "aspect-[4/5]" },
  { src: agnolotti, alt: "Agnolotti al sugo d'arrosto", className: "aspect-[4/3]", mobileClassName: "aspect-[4/5]" },
  { src: vini, alt: "Selezione di vini piemontesi", className: "aspect-[3/4]", mobileClassName: "col-span-2 aspect-[16/10]" },
  { src: plinCrema, alt: "Plin con fonduta", className: "aspect-[3/4]", mobileClassName: "aspect-square" },
  { src: tomini, alt: "Tomini con bagnetto verde", className: "aspect-[4/5]", mobileClassName: "aspect-square" },
  { src: brasatoSecondo, alt: "Brasato con polenta", className: "aspect-[4/5]", mobileClassName: "aspect-[4/5]" },
  { src: vitelloSecondo, alt: "Antipasto piemontese", className: "aspect-[4/5]", mobileClassName: "aspect-[4/5]" },
  { src: bonet, alt: "Bonet piemontese", className: "aspect-[4/5]", mobileClassName: "aspect-square" },
  { src: plinBlu, alt: "Plin nel piatto", className: "aspect-[3/4]", mobileClassName: "aspect-square" },
  { src: tartare, alt: "Carne cruda battuta", className: "aspect-[4/3]", mobileClassName: "col-span-2 aspect-[16/10]" },
  { src: brasato, alt: "Piatto caldo piemontese", className: "aspect-[4/3]", mobileClassName: "aspect-square" },
  { src: guancia, alt: "Secondo piemontese in terracotta", className: "aspect-[4/3]", mobileClassName: "aspect-square" },
  { src: insalataRussa, alt: "Insalata russa", className: "aspect-[4/3]", mobileClassName: "aspect-square" },
  { src: plinPiatto, alt: "Plin e vino rosso", className: "aspect-[3/4]", mobileClassName: "aspect-square" },
];

export function Gallery() {
  return (
    <section className="bg-ink pt-20 pb-20 sm:pt-24 sm:pb-28 lg:pt-36 lg:pb-44">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="rule" />Galleria</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Un assaggio
            <span className="italic text-sand font-light"> de La Pioletta.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:block sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-8">
          {photos.map((photo, index) => (
            <figure
              key={photo.alt}
              className={`${photo.mobileClassName} overflow-hidden sm:mb-5 sm:block sm:break-inside-avoid lg:mb-8 ${index % 3 === 1 ? "lg:pt-8" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`h-full w-full rounded-sm object-cover sm:h-auto ${photo.className}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
