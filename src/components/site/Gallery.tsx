import cannoli from "@/assets/cannoli-pistacchio.jpg";
import semifreddo from "@/assets/semifreddo-dolce.jpg";
import tortaFrutti from "@/assets/torta-frutti-bosco.jpg";
import costata from "@/assets/costata-cruda.jpg";
import antipastiMisti from "@/assets/antipasti-misti.jpg";
import tartareCloseup from "@/assets/tartare-closeup.jpg";
import antipasti from "@/assets/antipasti-casa-mia.jpg";
import fiorentina from "@/assets/fiorentina-casa-mia.jpg";
import tartarine from "@/assets/tartarine.png";

const photos = [
  { src: fiorentina, alt: "Fiorentina", className: "aspect-[3/4]" },
  { src: tortaFrutti, alt: "Torta ai frutti di bosco", className: "aspect-[4/3]" },
  { src: tartarine, alt: "Tartare in quattro varianti", className: "aspect-[3/4]" },
  { src: antipasti, alt: "Antipasti", className: "aspect-[5/4]" },
  { src: antipastiMisti, alt: "Antipasti misti", className: "aspect-[3/4]" },
  { src: semifreddo, alt: "Dolce al cucchiaio", className: "aspect-video" },
  { src: cannoli, alt: "Cannoli al pistacchio", className: "aspect-[3/4]" },
  { src: tartareCloseup, alt: "Dettaglio tartare", className: "aspect-[4/5]" },
  { src: costata, alt: "Costata cruda selezionata", className: "aspect-[4/3]" },
];

export function Gallery() {
  return (
    <section className="bg-ink pt-24 pb-28 lg:pt-36 lg:pb-44">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="rule" />Galleria</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Un assaggio
            <span className="italic text-sand font-light"> di A Casa Mia.</span>
          </h2>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8">
          {photos.map((photo, index) => (
            <figure
              key={photo.alt}
              className={`mb-5 break-inside-avoid lg:mb-8 ${index % 3 === 1 ? "lg:pt-8" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full rounded-sm object-cover ${photo.className}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
