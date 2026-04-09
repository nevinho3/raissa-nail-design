import { useState } from "react";

const styles = [
  { emoji: "🌸", name: "Delicada", desc: "Tons suaves, francesinha e designs discretos", query: "Olá! Quero unhas delicadas e discretas ✨" },
  { emoji: "🔥", name: "Ousada", desc: "Cores vibrantes, brilho e designs marcantes", query: "Olá! Quero unhas ousadas e chamativas 💅" },
  { emoji: "👑", name: "Luxo", desc: "Pedras, cromado, efeito espelho e glamour", query: "Olá! Quero unhas luxuosas e glamourosas 👑" },
  { emoji: "🖤", name: "Minimalista", desc: "Clean, tons neutros e elegância simples", query: "Olá! Quero unhas minimalistas e elegantes 🖤" },
];

const StyleQuizSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20" id="estilo">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">
            Experiência Interativa
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Qual é o seu{" "}
            <span className="text-gradient-gold italic">estilo?</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Escolha e agende diretamente pelo WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {styles.map((style, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`bg-gradient-card border rounded-2xl p-6 text-center transition-all hover:scale-105 ${
                selected === i
                  ? "border-primary shadow-glow-rose"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <span className="text-4xl block mb-3">{style.emoji}</span>
              <h4 className="font-heading font-bold text-foreground mb-1">
                {style.name}
              </h4>
              <p className="text-xs text-muted-foreground font-body">
                {style.desc}
              </p>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="text-center mt-8 animate-fade-up">
            <a
              href={`https://wa.link/0rvht5`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-rose text-primary-foreground font-body font-semibold px-8 py-4 rounded-full shadow-glow-rose hover:scale-105 transition-transform"
            >
              Agendar estilo {styles[selected].name} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default StyleQuizSection;
