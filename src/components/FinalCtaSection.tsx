import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCtaSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div
        ref={ref}
        className={`container relative z-10 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
          Suas unhas perfeitas estão a <span className="text-gradient-gold italic">um clique</span> de distância
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-4">
          Não deixe para depois. As melhores profissionais têm agenda cheia — garanta seu horário agora e transforme suas mãos.
        </p>

        {/* Catálogo CTA */}
        <div
          className={`mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="font-body text-foreground/90 mb-3 text-base md:text-lg">
            ✨ <span className="italic text-gradient-gold">Veja primeiro nosso catálogo</span>
          </p>
          <Link
            to="/catalogo"
            className="inline-block bg-gradient-to-r from-accent to-gold text-accent-foreground font-body font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-glow-gold"
          >
            👀 Veja aqui
          </Link>
        </div>

        <p className="text-primary font-body text-sm font-medium mb-8 animate-pulse-slow">⚡ Restam poucas vagas esta semana</p>
        <a
          href="https://wa.link/ojewgn"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-gradient-rose text-primary-foreground font-body font-bold px-10 py-5 rounded-full text-lg shadow-glow-rose hover:scale-105 transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          style={{ transitionDelay: "300ms" }}
        >
          💬 Quero agendar agora
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
