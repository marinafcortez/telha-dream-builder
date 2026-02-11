import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Produtos", path: "/produtos" },
  { label: "Calculadora", path: "/calculadora" },
  { label: "Cotação", path: "/cotacao" },
  { label: "Nossa História", path: "/historia" },
  { label: "Seja Parceiro", path: "/parceiro" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-navy border-b border-brand-navy/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
              Cerâmica{" "}
              <span className="text-gradient-gold">Livramento</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-brand-gold bg-brand-navy/50"
                    : "text-primary-foreground/80 hover:text-brand-gold hover:bg-brand-navy/30"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/cotacao">
              <Button className="ml-2 bg-gradient-gold text-primary font-display font-semibold hover:opacity-90 transition-opacity">
                Solicitar Cotação
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-gradient-navy border-t border-brand-navy/30 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-brand-gold bg-brand-navy/50"
                      : "text-primary-foreground/80 hover:text-brand-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/cotacao" onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-gold text-primary font-display font-semibold">
                  Solicitar Cotação
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
