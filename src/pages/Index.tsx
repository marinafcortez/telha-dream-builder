import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, Package, Users, Clock, ChevronRight, Shield, Truck } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import portuguesaImg from "@/assets/portuguesa-frente.png";
import romanaImg from "@/assets/romana-frente.png";
import producaoImg from "@/assets/producao-telhas.jpg";
import roboImg from "@/assets/robo-fabrica.jpg";
import paletizacaoVideo from "@/assets/paletizacao-video.mp4";

const stats = [
  { number: 46, suffix: "+", label: "Anos de Mercado", icon: Clock },
  { number: 500, suffix: "+", label: "Parceiros", icon: Users },
  { number: 4, suffix: "", label: "Modelos de Telhas", icon: Package },
  { number: 100, suffix: "%", label: "Paletizado", icon: Shield },
];

const products = [
  { name: "Romaninha", desc: "Versátil e econômica, ideal para diversos projetos.", image: producaoImg },
  { name: "Romana", desc: "Encaixe preciso, resistência e estética.", image: romanaImg },
  { name: "Portuguesa", desc: "Tradição e alta eficiência na drenagem.", image: portuguesaImg },
  { name: "Suprema", desc: "A maior telha cerâmica do Brasil.", image: roboImg },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, hsl(35 95% 55% / 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(215 60% 30% / 0.3) 0%, transparent 50%)"
          }} />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold font-display font-semibold text-sm md:text-base tracking-wider uppercase mb-4"
            >
              Desde 1978 construindo o futuro
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Telhas de qualidade para{" "}
              <span className="text-gradient-gold">toda obra</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-2xl"
            >
              100% paletizado para garantir a integridade do produto. 
              4 modelos de telhas para atender a todas as necessidades da sua construção.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/produtos">
                <Button size="lg" className="bg-gradient-gold text-primary font-display font-semibold text-base hover:opacity-90 transition-opacity">
                  Conheça nossos Produtos
                  <ChevronRight size={18} />
                </Button>
              </Link>
              <Link to="/calculadora">
                <Button size="lg" variant="outline" className="border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 font-display font-semibold text-base">
                  <Calculator size={18} />
                  Calcule suas Telhas
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <stat.icon className="mx-auto mb-3 text-brand-gold" size={28} />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-gradient-gold">Produtos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              4 modelos de telhas nas versões Natural e Resinada, todas produzidas com argila de alta qualidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Telha ${product.name}`}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                  <span className="text-brand-gold text-sm font-medium group-hover:underline">
                    Natural & Resinada →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/produtos">
              <Button variant="outline" size="lg" className="font-display font-semibold">
                Ver Catálogo Completo
                <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Calculadora */}
      <section className="py-16 md:py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calculator className="mx-auto mb-4 text-brand-gold" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Quantas telhas você precisa?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Use nossa calculadora avançada para descobrir a quantidade exata de telhas para seu telhado.
            </p>
            <Link to="/calculadora">
              <Button size="lg" className="bg-gradient-gold text-primary font-display font-semibold hover:opacity-90">
                Abrir Calculadora
                <ChevronRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Paletização */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <video
                  src={paletizacaoVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster={roboImg}
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                100% <span className="text-gradient-gold">Paletizado</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nossas telhas são entregues 100% paletizadas, garantindo a integridade 
                do produto desde a fábrica até a obra. Menos quebras, menos desperdício.
              </p>
              <ul className="space-y-3 text-foreground">
                {["Menor índice de quebras no transporte", "Carregamento e descarregamento ágil", "Organização e controle no canteiro de obras", "Proteção contra intempéries"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Shield size={16} className="text-brand-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
