const FinalCtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
          Suas unhas perfeitas estão a{" "}
          <span className="text-gradient-gold italic">um clique</span> de distância
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto mb-4">
          Não deixe para depois. As melhores profissionais têm agenda cheia — garanta seu horário agora e transforme suas mãos.
        </p>
        <p className="text-primary font-body text-sm font-medium mb-8 animate-pulse-slow">
          ⚡ Restam poucas vagas esta semana
        </p>
        <a
          href="https://wa.link/0rvht5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-rose text-primary-foreground font-body font-bold px-10 py-5 rounded-full text-lg shadow-glow-rose hover:scale-105 transition-transform"
        >
          💬 Quero agendar agora
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
