import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["Todos", "Alongamento", "Nail Art", "Manutenção"];

const works = [
  { src: "https://i.postimg.cc/BbJ5QGzY/Captura-de-tela-2026-04-08-232242.png", cat: "Alongamento" },
  { src: "https://i.postimg.cc/SN3Xghrq/Captura-de-tela-2026-04-08-232147.png", cat: "Nail Art" },
  { src: "https://i.postimg.cc/LsBn4ZM1/Captura-de-tela-2026-04-08-232209.png", cat: "Alongamento" },
  { src: "https://i.postimg.cc/tJfgv3Fw/Captura-de-tela-2026-04-08-231957.png", cat: "Nail Art" },
  { src: "https://i.postimg.cc/rpcwHFty/Captura-de-tela-2026-04-08-231740.png", cat: "Manutenção" },
  { src: "https://i.postimg.cc/Dz27gjt8/Captura-de-tela-2026-04-08-231248.png", cat: "Alongamento" },
  { src: "https://i.postimg.cc/RZTW4Hmm/Captura-de-tela-2026-04-08-231541.png", cat: "Nail Art" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? works : works.filter((w) => w.cat === active);
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20" id="portfolio">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Portfólio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trabalhos que <span className="text-gradient-gold italic">encantam</span>
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-rose text-primary-foreground shadow-glow-rose"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((work, i) => (
            <div
              key={`${active}-${i}`}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={work.src}
                alt={work.cat}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-body text-sm text-foreground">{work.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
