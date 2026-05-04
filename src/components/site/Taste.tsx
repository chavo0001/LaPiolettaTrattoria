import antipasti from "@/assets/real-antipasti.jpg";
import tartare from "@/assets/real-tartare.jpg";
import melanzane from "@/assets/real-melanzane.jpg";
import fiorentina from "@/assets/real-fiorentina.jpg";

export function Taste() {
  return (
    <section className="relative bg-ink py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="eyebrow"><span className="rule" />Cucina</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Sapori di casa,
              <span className="block italic text-sand font-light">con uno sguardo nuovo.</span>
            </h2>
            <p className="mt-8 text-base text-cream/70 leading-relaxed max-w-md">
              Piatti semplici, caldi e tradizionali, raccontati con la cura che meritano.
              Carne, pasta fresca e ricette piemontesi pensate per essere condivise.
            </p>
          </div>

          {/* Asymmetric photo composition */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              <figure className="col-span-8 lg:col-span-7">
                <img
                  src={fiorentina}
                  alt="Fiorentina alla griglia"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                  01 — Fiorentina
                </figcaption>
              </figure>

              <figure className="col-span-4 lg:col-span-5 mt-12 lg:mt-24">
                <img
                  src={tartare}
                  alt="Tartare di carne in quattro varianti"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                  02 — Tartare
                </figcaption>
              </figure>

              <figure className="col-span-7 lg:col-span-6 lg:col-start-2 -mt-4 lg:-mt-12">
                <img
                  src={antipasti}
                  alt="Antipasto misto con carpaccio e vitello"
                  className="w-full aspect-[5/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                  03 — Antipasti
                </figcaption>
              </figure>

              <figure className="col-span-5 lg:col-span-4 mt-8">
                <img
                  src={melanzane}
                  alt="Melanzane stufate"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                  04 — Verdure
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
