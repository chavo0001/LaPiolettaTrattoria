import interior from "@/assets/real-interior-2.jpg";
import detail from "@/assets/verdure-fresche.jpg";

export function Intro() {
  return (
    <section id="trattoria" className="relative bg-espresso py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <img
              src={interior}
              alt="Sala della Trattoria A Casa Mia"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <img
              src={detail}
              alt="Piatto con verdure fresche alla Trattoria A Casa Mia"
              className="absolute -bottom-12 -right-6 hidden aspect-[4/5] w-52 border-4 border-espresso object-cover shadow-2xl md:block lg:w-72"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-8">
            <span className="eyebrow">
              <span className="rule" />
              La trattoria
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
              Benvenuti
              <span className="block italic font-light text-sand">a casa.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/75">
              Verdura surgelata? No grazie. Da Trattoria A Casa Mia scegliamo solo
              verdure fresche di contadino, acquistate ogni giorno dallo chef per
              garantire qualita e sapore autentico.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/65">
              Come riportato nel nostro menu, utilizziamo materie prime fresche e di
              prima qualita, acquistate giornalmente. Per noi la tradizione comincia
              da qui: ingredienti semplici, scelti bene, serviti con cura.
            </p>

            <div className="mt-10 border-l-2 border-sand/70 pl-6">
              <p className="font-display text-2xl italic text-sand">
                Freschezza quotidiana, sapore autentico.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/58">
                Una trattoria vive di gesti concreti: la spesa del mattino, la cucina
                fatta con attenzione e il piacere di portare in tavola qualcosa di
                riconoscibile, buono, sincero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
