import interior from "@/assets/real-interior-2.jpg";
import detail from "@/assets/real-tartare.jpg";

export function Intro() {
  return (
    <section id="trattoria" className="relative bg-espresso py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Photo cluster */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <img
              src={interior}
              alt="Sala della Trattoria A Casa Mia"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <img
              src={detail}
              alt="Dettaglio piatto"
              className="hidden md:block absolute -bottom-12 -right-6 w-48 lg:w-60 aspect-[3/4] object-cover border-4 border-espresso shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:pl-8 order-1 lg:order-2">
            <span className="eyebrow"><span className="rule" />La trattoria</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Benvenuti
              <span className="block italic text-sand font-light">a casa.</span>
            </h2>
            <p className="mt-8 text-lg text-cream/75 leading-relaxed">
              A Casa Mia è una trattoria italiana a Rivoli dove la cucina tradizionale
              incontra un’accoglienza semplice e sincera. Un luogo pensato per chi cerca
              piatti riconoscibili, atmosfera calda e il piacere di sedersi a tavola
              senza formalità inutili.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                ["01", "Cucina italiana", "Ricette di tradizione, materia prima onesta."],
                ["02", "Atmosfera familiare", "Servizio attento, ambiente caldo e informale."],
                ["03", "Nel cuore di Rivoli", "Corso Francia 28, a pochi minuti dal centro."],
              ].map(([n, t, d]) => (
                <li key={n} className="grid grid-cols-[auto_1fr] gap-5 border-t border-cream/15 pt-4">
                  <span className="font-display text-2xl text-sand italic">{n}</span>
                  <div>
                    <div className="font-display text-xl text-cream">{t}</div>
                    <div className="text-sm text-cream/60 mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
