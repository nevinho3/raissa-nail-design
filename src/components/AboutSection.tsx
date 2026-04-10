import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-dark" id="sobre">
      <div className="container">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Sobre mim</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Prazer, eu sou a <span className="text-gradient-gold italic">Raissa</span>
          </h2>

          <div className={`w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 border-primary/30 shadow-glow-rose transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: "200ms" }}>
            <img
              src="https://i.postimg.cc/nrm2MkVB/Captura-de-tela-2026-04-08-230653.png"
              alt="Raissa"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Sou nail designer apaixonada pelo que faço. Comecei nessa profissão movida pelo desejo de
            fazer mulheres se sentirem mais bonitas e confiantes. Cada unha que eu faço é uma forma de arte,
            feita com <strong className="text-foreground">amor, dedicação e os melhores materiais</strong>.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Aqui em Orocó-PE, construí meu espaço pensando no seu conforto. Um ambiente acolhedor onde
            você pode relaxar, se sentir especial e sair com as unhas dos seus sonhos. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
