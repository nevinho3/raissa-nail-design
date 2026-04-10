import { Heart, Flame, Sparkles, RefreshCw } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const serviceGroups = [
  {
    icon: Heart, title: "💖 Básico",
    services: [
      { name: "Manicure", desc: "Cuidado completo para mãos impecáveis", benefit: "Mãos sempre bem cuidadas" },
      { name: "Pedicure", desc: "Tratamento detalhado para seus pés", benefit: "Pés saudáveis e bonitos" },
    ],
  },
  {
    icon: Flame, title: "🔥 Transformação",
    services: [
      { name: "Alongamento", desc: "Unhas longas e resistentes como você sonha", benefit: "Resultado que impressiona" },
      { name: "Banho de Gel", desc: "Brilho intenso e proteção duradoura", benefit: "Durabilidade de até 30 dias" },
      { name: "Blindagem", desc: "Fortalecimento e nutrição das unhas", benefit: "Unhas mais fortes e saudáveis" },
    ],
  },
  {
    icon: Sparkles, title: "✨ Estilo",
    services: [
      { name: "Nail Art", desc: "Designs exclusivos feitos sob medida", benefit: "Unhas únicas e personalizadas" },
      { name: "Esmaltação em Gel", desc: "Cor vibrante com alta durabilidade", benefit: "Sem lascas por semanas" },
    ],
  },
  {
    icon: RefreshCw, title: "🔄 Manutenção",
    services: [
      { name: "Manutenção", desc: "Retoque profissional para manter a perfeição", benefit: "Sempre impecável" },
      { name: "Remoção", desc: "Remoção segura sem danificar suas unhas", benefit: "Cuidado e segurança" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-dark" id="servicos">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Serviços</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Escolha seu <span className="text-gradient-gold italic">tratamento ideal</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">Cada serviço pensado para entregar o melhor resultado possível</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceGroups.map((group, i) => (
            <div
              key={i}
              className={`bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <h3 className="text-xl font-heading font-bold mb-5">{group.title}</h3>
              <div className="space-y-4">
                {group.services.map((service, j) => (
                  <div key={j} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-foreground">{service.name}</h4>
                      <p className="text-sm text-muted-foreground font-body">{service.desc}</p>
                      <p className="text-xs text-accent font-body mt-1">✓ {service.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.link/0rvht5"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center font-body text-sm font-medium text-primary hover:text-rose-light transition-colors"
              >
                Agendar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
