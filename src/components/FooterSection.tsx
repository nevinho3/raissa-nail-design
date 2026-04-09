import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-heading text-lg font-bold">
            <span className="text-gradient-gold">Raissa</span>{" "}
            <span className="text-foreground/60 text-sm font-body">Nail Designer</span>
          </p>
          <p className="text-xs text-muted-foreground font-body">Orocó-PE · Transformando unhas e autoestima</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/raissamenezes_nails"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Instagram className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
