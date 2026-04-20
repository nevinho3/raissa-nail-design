import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold">
          <span className="text-gradient-gold">Raissa</span>{" "}
          <span className="text-foreground/60 text-sm font-body">Nail Designer</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.link/0rvht5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-rose text-primary-foreground font-body text-sm font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.link/0rvht5"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-rose text-primary-foreground font-body text-sm font-semibold px-5 py-3 rounded-full text-center"
            >
              Agendar agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
