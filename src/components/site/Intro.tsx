import interior from "@/assets/pioletta-locale-reale.png";
import detail from "@/assets/pioletta-tomini.avif";

export function Intro() {
  return (
    <section id="trattoria" className="relative bg-espresso py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <img
              src={interior}
              alt="Sala de La Pioletta Trattoria Piemontese"
              className="aspect-[4/3] w-full object-cover object-[center_44%]"
              loading="lazy"
            />
            <img
              src={detail}
              alt="Piatto tradizionale piemontese de La Pioletta"
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
              La Pioletta
              <span className="block italic font-light text-sand">in centro a Torino.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/75">
              Nel Quadrilatero Romano, tra i vicoli di Torino, c'è La Pioletta. Una trattoria piccola, raccolta, dove la cucina piemontese è stata da sempre il cuore: agnolotti fatti bene, plin alle erbette, vitello tonnato, carne cruda, i tomini con il bagnet verde.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/65">
              Ingredienti scelti, ricette tradizionali, vini piemontesi che fanno compagnia. Non è un restaurant dove sentirsi fuori posto. È il posto dove tornare, dove la gente si conosce, dove mangi bene senza pretese.
            </p>

            <div className="mt-10 border-l-2 border-sand/70 pl-6">
              <p className="font-display text-2xl italic text-sand">
                Tradizione piemontese, fatta bene.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/58">
                Una piola autentica vive di dettagli: la spesa dal fornitore di fiducia, i piatti cucinati come si deve, il piacere di portare in tavola qualcosa che riconosci, che sai, che ami. Questa è La Pioletta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
