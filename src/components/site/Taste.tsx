import agnolotti from "@/assets/pioletta-agnolotti.avif";
import tomini from "@/assets/pioletta-tomini.avif";
import vini from "@/assets/pioletta-vini.jpg";
import vitello from "@/assets/pioletta-vitello-1.jpg";

export function Taste() {
  return (
    <section className="relative bg-ink py-20 sm:py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Text column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="eyebrow"><span className="rule" />Cucina</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              La cucina
              <span className="block italic text-sand font-light">piemontese autentica.</span>
            </h2>
            <p className="mt-7 text-base text-cream/70 leading-relaxed max-w-md">
              Da La Pioletta cuciniamo i piatti che conosci: agnolotti al sugo d'arrosto, plin alle erbette con fonduta, vitello tonnato come lo facevano gli anziani, carne cruda quando è buona davvero. Piatti semplici, fatti bene, con ingredienti che sai di dove vengono.
            </p>
            <p className="mt-5 text-base text-cream/70 leading-relaxed max-w-md">
              I vini piemontesi fanno il resto: Barbera, Nebbiolo, Dolcetto. Bottiglie che accompagnano la cena senza esagerare, come deve essere in una trattoria che non si prende troppo sul serio ma la cucina sì.
            </p>
          </div>

          {/* Asymmetric photo composition */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-5 lg:gap-8">
              <figure className="col-span-2 sm:col-span-8 lg:col-span-7">
                <img
                  src={vitello}
                  alt="Piatto di vitello tonnato de La Pioletta"
                  className="w-full aspect-[16/11] object-cover sm:aspect-[4/5]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-1 sm:col-span-4 lg:col-span-5 sm:mt-12 lg:mt-28">
                <img
                  src={tomini}
                  alt="Tomini con bagnetto verde"
                  className="w-full aspect-square object-cover sm:aspect-[3/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-1 sm:col-span-7 lg:col-span-6 lg:col-start-2 sm:mt-2 lg:mt-4">
                <img
                  src={agnolotti}
                  alt="Agnolotti al sugo d'arrosto"
                  className="w-full aspect-square object-cover sm:aspect-[5/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-2 sm:col-span-5 lg:col-span-4 sm:mt-10 lg:mt-16">
                <img
                  src={vini}
                  alt="Vini piemontesi de La Pioletta"
                  className="w-full aspect-[16/9] object-cover sm:aspect-[3/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
