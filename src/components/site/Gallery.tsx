import interior1 from "@/assets/real-interior-1.jpg";
import interior2 from "@/assets/real-interior-2.jpg";
import antipasti from "@/assets/real-antipasti.jpg";
import melanzane from "@/assets/real-melanzane.jpg";
import fiorentina from "@/assets/real-fiorentina.jpg";
import tartare from "@/assets/real-tartare.jpg";

export function Gallery() {
  return (
    <section className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="rule" />Galleria</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Un assaggio
            <span className="italic text-sand font-light"> di A Casa Mia.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4 lg:gap-6">
          <img src={fiorentina} alt="Fiorentina" loading="lazy"
            className="col-span-6 lg:col-span-4 aspect-[3/4] object-cover" />
          <img src={interior2} alt="Sala" loading="lazy"
            className="col-span-6 lg:col-span-5 aspect-[4/3] object-cover lg:mt-12" />
          <img src={tartare} alt="Tartare" loading="lazy"
            className="col-span-12 lg:col-span-3 aspect-square lg:aspect-[3/4] object-cover" />
          <img src={antipasti} alt="Antipasti" loading="lazy"
            className="col-span-7 lg:col-span-5 aspect-[5/4] object-cover lg:-mt-8" />
          <img src={melanzane} alt="Melanzane" loading="lazy"
            className="col-span-5 lg:col-span-3 aspect-[3/4] object-cover" />
          <img src={interior1} alt="Interno" loading="lazy"
            className="col-span-12 lg:col-span-4 aspect-video object-cover lg:mt-16" />
        </div>
      </div>
    </section>
  );
}
