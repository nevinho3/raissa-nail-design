import { Link } from "react-router-dom";
import { ArrowLeft, Check, Sparkles, Camera, CreditCard, Image as ImageIcon, AlertTriangle, RotateCw } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import catalogHero from "@/assets/catalog-hero.jpg";
import catalogFibra from "@/assets/catalog-fibra.jpg";
import catalogGelTips from "@/assets/catalog-gel-tips.jpg";
import catalogBanho from "@/assets/catalog-banho.jpg";
import catalogFrancesa from "@/assets/catalog-francesa.jpg";
import catalogGelBranco from "@/assets/catalog-gel-branco.jpg";
import catalogManutencao from "@/assets/catalog-manutencao.jpg";
import catalogRoidas from "@/assets/catalog-roidas.jpg";

const WHATSAPP = "https://wa.link/0rvht5";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ServiceCard = ({
  image,
  title,
  price,
  pitch,
  benefits,
  delay = 0,
}: {
  image: string;
  title: string;
  price: string;
  pitch: string;
  benefits: string[];
  delay?: number;
}) => (
  <Reveal delay={delay}>
    <div className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow-rose hover:-translate-y-2 h-full flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-xl font-heading font-bold">{title}</h3>
          <span className="text-gradient-gold font-heading font-bold text-2xl">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground font-body mb-4 italic">{pitch}</p>
        <ul className="space-y-2 mt-auto">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm font-body">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Reveal>
);

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border w-full">
        <div className="container py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <span className="text-sm font-heading italic text-gradient-gold">Catálogo Raissa Nails</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${catalogHero})` }}
        />
        <div className="container relative z-10 text-center max-w-3xl">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
              @raissamenezes_nails
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Suas unhas, no nível que você <span className="text-gradient-gold italic">sempre quis</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-muted-foreground font-body text-lg mb-4">
              Chega de unhas fracas, quebrando ou sem acabamento. Aqui você tem alongamento profissional, resistente e com estética de alto padrão.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <p className="font-body text-sm md:text-base text-foreground/90">
              👉 Atendimento personalizado <span className="text-primary">+</span> técnicas modernas <span className="text-primary">+</span> acabamento impecável
            </p>
          </Reveal>
        </div>
      </section>

      {/* Serviços principais */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="text-center mb-14">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse-slow" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3">
                💎 Escolha o seu <span className="text-gradient-gold italic">estilo</span>
              </h2>
              <p className="text-muted-foreground font-body">Três técnicas, infinitas possibilidades.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              image={catalogFibra}
              title="Fibra de Vidro"
              price="R$120"
              pitch="Para quem quer unhas naturais, resistentes e elegantes."
              benefits={["Alta durabilidade", "Acabamento fino", "Visual natural"]}
              delay={0}
            />
            <ServiceCard
              image={catalogGelTips}
              title="Gel na Tips"
              price="R$120"
              pitch="Ideal para quem quer alongamento rápido e uniforme."
              benefits={["Estrutura firme", "Resultado imediato", "Ótimo para qualquer formato"]}
              delay={150}
            />
            <ServiceCard
              image={catalogBanho}
              title="Banho em Gel"
              price="R$80"
              pitch="Perfeito para quem já tem unhas e quer fortalecer e dar brilho."
              benefits={["Proteção da unha natural", "Mais resistência", "Aparência saudável"]}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Personalize */}
      <section className="py-20 bg-gradient-dark">
        <div className="container">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3">
                ✨ Personalize suas <span className="text-gradient-gold italic">unhas</span>
              </h2>
              <p className="text-muted-foreground font-body">Detalhes que fazem suas unhas chamarem atenção de verdade.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "💎", title: "Francesa 3D", price: "R$10", img: catalogFrancesa },
              { icon: "✨", title: "Encapsulada", price: "R$10", img: catalogHero },
              { icon: "🤍", title: "Gel branco", price: "R$15", img: catalogGelBranco },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gradient-gold font-heading font-bold text-xl">{item.price}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-3">
              🔥 Como funciona o <span className="text-gradient-gold italic">agendamento</span>
            </h2>
            <p className="text-center text-muted-foreground font-body mb-14">
              Pra garantir qualidade no atendimento, seguimos um processo simples.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Camera, title: "Foto da unha natural", desc: "Você envia uma foto para avaliar o melhor procedimento." },
              { icon: Sparkles, title: "Escolhe o serviço", desc: "Definimos juntas a técnica ideal para suas unhas." },
              { icon: ImageIcon, title: "Envia uma inspiração", desc: "Opcional, mas recomendado — referências de design ou formato." },
              { icon: CreditCard, title: "Confirma com 40% de sinal", desc: "Garante sua vaga e permite preparar tudo pra um resultado perfeito." },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="flex gap-4 p-6 bg-gradient-card border border-border rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-glow-rose group h-full">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      <span className="text-primary mr-2">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Unhas roídas + Manutenção */}
      <section className="py-20 bg-gradient-dark">
        <div className="container grid md:grid-cols-2 gap-8 max-w-6xl">
          <Reveal>
            <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={catalogRoidas} alt="Unhas roídas" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-2xl font-bold">Tem unhas roídas?</h3>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  Sem problema — mas precisa de cuidado especial. Unhas roídas são mais sensíveis e podem ter:
                </p>
                <ul className="space-y-2 text-sm font-body">
                  {["Maior risco de descolamento", "Inflamação", "Necessidade de manutenção mais frequente"].map((t) => (
                    <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />{t}</li>
                  ))}
                </ul>
                <p className="text-xs text-primary mt-4 font-body">👉 Aqui o atendimento é adaptado pra garantir segurança e resultado.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={catalogManutencao} alt="Manutenção" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <RotateCw className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-2xl font-bold">Manutenção</h3>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  Para manter suas unhas sempre bonitas:
                </p>
                <ul className="space-y-2 text-sm font-body">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />Manutenção a cada 30 dias</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />Em casos específicos, pode ser necessário antes</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background" />
        <Reveal>
          <div className="container relative z-10 text-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Pronta para unhas <span className="text-gradient-gold italic">de outro nível</span>?
            </h2>
            <p className="text-muted-foreground font-body mb-10">
              Garanta sua vaga agora e venha viver a experiência Raissa Nails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border bg-card hover:bg-secondary text-foreground font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar à página anterior
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-rose text-primary-foreground font-body font-bold px-10 py-4 rounded-full shadow-glow-rose hover:scale-105 transition-all duration-500"
              >
                💬 Agendar agora
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Catalog;
