import { Clock, Shield, Gem, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const differentials = [
  { icon: Clock, title: "Atendimento Rápido", desc: "Seu tempo é precioso. Pontualidade e agilidade sem perder a qualidade." },
  { icon: Shield, title: "Durabilidade Garantida", desc: "Materiais premium que mantêm suas unhas impecáveis por semanas." },
  { icon: Heart, title: "Ambiente Confortável", desc: "Um espaço pensado para você relaxar enquanto se transforma." },
  { icon: Gem, title: "Materiais de Qualidade", desc: "Só trabalhamos com os melhores produtos do mercado." },
];

const WhyChooseSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20" id="diferenciais">
      <div className="container">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Por que me escolher?</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
              Não é só unha, <span className="text-gradient-gold italic">é autoestima</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 leading-relaxed">
              Cada detalhe importa. Do primeiro contato ao resultado final, meu compromisso
              é fazer você se sentir especial, confiante e <strong className="text-foreground">apaixonada</strong> pelas suas mãos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                  style={{ transitionDelay: visible ? `${300 + i * 100}ms` : "0ms" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-body mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-border shadow-glow-rose">
              <img
                src="https://i.postimg.cc/4Ng4yxBh/Captura-de-tela-2026-04-07-193807.png"
                alt="Raissa trabalhando"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={`absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: "600ms" }}>
              <p className="font-heading text-2xl font-bold text-gradient-gold">1+</p>
              <p className="text-xs text-muted-foreground font-body">ano de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
