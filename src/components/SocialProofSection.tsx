import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana S.",
    text: "Minhas unhas nunca ficaram tão lindas! A Raissa tem um cuidado incrível e o resultado dura semanas. Super recomendo!",
    rating: 5,
    service: "Alongamento",
  },
  {
    name: "Camila R.",
    text: "Ambiente super confortável e a Raissa é muito atenciosa. Sempre saio de lá me sentindo uma diva! 💅",
    rating: 5,
    service: "Nail Art",
  },
  {
    name: "Juliana M.",
    text: "Faço manutenção todo mês e nunca me decepcionei. Qualidade premium e atendimento rápido!",
    rating: 5,
    service: "Manutenção",
  },
  {
    name: "Ana Beatriz",
    text: "Procurava alguém de confiança em Orocó e encontrei a melhor! Trabalho impecável e duradouro.",
    rating: 5,
    service: "Banho de Gel",
  },
  {
    name: "Fernanda L.",
    text: "Desde que conheci o trabalho da Raissa, não troco por nada! Ela entende exatamente o que eu quero.",
    rating: 5,
    service: "Esmaltação em Gel",
  },
];

const beforeAfter = [
  {
    before: "https://i.postimg.cc/tJP0yWL3/Captura-de-tela-2026-04-08-231431.png",
    after: "https://i.postimg.cc/Pxp9z1rf/Captura-de-tela-2026-04-08-231456.png",
  },
  {
    before: "https://i.postimg.cc/Lshb2jPQ/Captura-de-tela-2026-04-08-231842.png",
    after: "https://i.postimg.cc/YCCXzQbZ/Captura-de-tela-2026-04-08-231903.png",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gradient-dark" id="depoimentos">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">
            Prova Social
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            O que nossas{" "}
            <span className="text-gradient-gold italic">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Resultados reais de quem já viveu a experiência
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
              <p className="font-body text-foreground/80 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {review.service}
                  </p>
                </div>
                <div className="flex text-gold">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-heading font-bold">
            Antes & <span className="text-gradient-gold italic">Depois</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {beforeAfter.map((item, i) => (
            <div key={i} className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden border border-border">
              <div className="relative">
                <img src={item.before} alt="Antes" className="w-full h-48 object-cover" />
                <span className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm text-xs font-body px-3 py-1 rounded-full">
                  Antes
                </span>
              </div>
              <div className="relative">
                <img src={item.after} alt="Depois" className="w-full h-48 object-cover" />
                <span className="absolute bottom-2 left-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-body px-3 py-1 rounded-full">
                  Depois ✨
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
