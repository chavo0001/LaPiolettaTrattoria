const blocks = [
  { n: "01", title: "Cucina di casa", text: "Sapori italiani, ricette tradizionali e piatti pensati per essere condivisi." },
  { n: "02", title: "Tempo a tavola", text: "Un pranzo, una cena, una serata tra amici: ogni occasione merita il suo spazio." },
  { n: "03", title: "Accoglienza vera", text: "Un ambiente caldo, informale e curato, senza eccessi." },
];

export function Concept() {
  return (
    <section className="bg-ink py-24 lg:py-36 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow"><span className="rule" />Il concept</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Tradizione, tavola
            <span className="italic text-sand font-light"> e accoglienza.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed max-w-xl">
            Il nostro modo di intendere la trattoria parte da cose semplici: piatti
            buoni, servizio attento, vino a tavola e un ambiente in cui sentirsi a
            proprio agio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
          {blocks.map((b) => (
            <div key={b.n} className="bg-ink p-8 lg:p-10">
              <span className="font-display italic text-3xl text-sand font-light">{b.n}</span>
              <h3 className="mt-6 font-display text-2xl text-cream">{b.title}</h3>
              <p className="mt-3 text-sm text-cream/65 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
