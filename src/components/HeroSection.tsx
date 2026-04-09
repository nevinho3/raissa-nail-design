import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/nrm2MkVB/Captura-de-tela-2026-04-08-230653.png"
          alt="Raissa - Nail Designer"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 py-20 md:py-0">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-body text-muted-foreground">
              +500 clientes satisfeitas em Orocó-PE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Suas unhas merecem um{" "}
            <span className="text-gradient-gold italic">toque de luxo</span>
          </h1>

          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-lg animate-fade-up-delay">
            Transforme suas mãos em obras de arte. Alongamento, nail art e
            esmaltação com materiais premium e durabilidade garantida.
          </p>

          {/* Urgency */}
          <div className="flex items-center gap-2 animate-fade-up-delay">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-body text-primary font-medium">
              🔥 Agenda quase lotada essa semana — garanta seu horário!
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <a
              href="https://wa.link/0rvht5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-rose text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-center text-lg shadow-glow-rose hover:scale-105 transition-transform duration-300"
            >
              ✨ Agendar agora
            </a>
            <a
              href="#portfolio"
              className="border border-accent/30 text-accent font-body font-medium px-8 py-4 rounded-full text-center hover:bg-accent/10 transition-colors"
            >
              Ver trabalhos
            </a>
          </div>

          {/* Social proof mini */}
          <div className="flex items-center gap-4 pt-4 animate-fade-up-delay-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-body text-muted-foreground"
                >
                  {["👩", "💅", "💖", "✨"][i - 1]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-body">
                5.0 · Avaliação das clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
