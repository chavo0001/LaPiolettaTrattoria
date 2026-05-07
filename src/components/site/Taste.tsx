import antipasti from "@/assets/antipasti-casa-mia.jpg";
import tartare from "@/assets/tartarine.png";
import carneVerdure from "@/assets/carne-verdure-casa-mia.jpg";
import fiorentina from "@/assets/fiorentina-casa-mia.jpg";

export function Taste() {
  return (
    <section className="relative bg-ink py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="eyebrow"><span className="rule" />Cucina</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Il piacere della carne,
              <span className="block italic text-sand font-light">il calore della trattoria.</span>
            </h2>
            <p className="mt-8 text-base text-cream/70 leading-relaxed max-w-md">
              Da <span className="italic">A Casa Mia</span> la cucina e fatta di
              sapori riconoscibili, materie prime scelte e una forte attenzione alla
              carne: tagli selezionati, frollature curate e piatti pensati per essere
              gustati con calma.
            </p>
            <p className="mt-5 text-base text-cream/70 leading-relaxed max-w-md">
              Il tutto accompagnato da una proposta di vini capace di rendere ogni
              tavolo piu completo, senza perdere l&apos;atmosfera semplice e accogliente
              di una vera trattoria.
            </p>
          </div>

          {/* Asymmetric photo composition */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-12 gap-5 lg:gap-8">
              <figure className="col-span-8 lg:col-span-7">
                <img
                  src={fiorentina}
                  alt="Fiorentina alla griglia"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-4 lg:col-span-5 mt-12 lg:mt-28">
                <img
                  src={tartare}
                  alt="Tartare di carne in quattro varianti"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-7 lg:col-span-6 lg:col-start-2 mt-2 lg:mt-4">
                <img
                  src={antipasti}
                  alt="Antipasto misto con carpaccio e vitello"
                  className="w-full aspect-[5/4] object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                </figcaption>
              </figure>

              <figure className="col-span-5 lg:col-span-4 mt-10 lg:mt-16">
                <img
                  src={carneVerdure}
                  alt="Carne e verdure"
                  className="w-full aspect-[3/4] object-cover"
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
