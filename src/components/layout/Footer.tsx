import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Cerâmica <span className="text-gradient-gold">Livramento</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Desde 1978 fabricando telhas de qualidade para o Norte e Nordeste
              do Brasil. 100% paletizado para garantir a integridade do produto.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-brand-gold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Produtos", path: "/produtos" },
                { label: "Calculadora", path: "/calculadora" },
                { label: "Cotação", path: "/cotacao" },
                { label: "Nossa História", path: "/historia" },
                { label: "Seja Parceiro", path: "/parceiro" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-brand-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-brand-gold mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-brand-gold shrink-0" />
                <span>Timon - MA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="https://wa.me/559931183000" className="hover:text-brand-gold transition-colors">(99) 3118-3000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <span>contato@ceramicalivramento.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-brand-gold shrink-0" />
                <span>Seg a Sex: 7h às 17h</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-brand-gold mb-4">
              Redes Sociais
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-navy/50 flex items-center justify-center text-primary-foreground/70 hover:bg-brand-gold hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-navy/50 flex items-center justify-center text-primary-foreground/70 hover:bg-brand-gold hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Cerâmica Livramento. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
