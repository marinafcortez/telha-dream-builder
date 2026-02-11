import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const telhas = [
  {
    name: "Romaninha",
    versions: ["Natural", "Resinada"],
    specs: { perM2: "26 telhas/m²", dimensions: "40,5 x 21 cm" },
    desc: "Telha versátil e econômica, ideal para diversos tipos de construção.",
  },
  {
    name: "Romana",
    versions: ["Natural", "Resinada"],
    specs: { perM2: "16 telhas/m²", dimensions: "40,5 x 24 cm" },
    desc: "Design clássico com encaixe perfeito, unindo beleza e funcionalidade.",
  },
  {
    name: "Portuguesa",
    versions: ["Natural", "Resinada"],
    specs: { perM2: "16 telhas/m²", dimensions: "40,5 x 24 cm" },
    desc: "Elegância e tradição para coberturas sofisticadas e duráveis.",
  },
  {
    name: "Suprema",
    versions: ["Natural", "Resinada"],
    specs: { perM2: "12 telhas/m²", dimensions: "47 x 32 cm" },
    desc: "Nossa linha premium com acabamento superior e maior cobertura por unidade.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Produtos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Nossos <span className="text-gradient-gold">Produtos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Telhas de alta qualidade produzidas com argila selecionada, disponíveis nas versões Natural e Resinada.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {telhas.map((telha, i) => (
              <motion.div
                key={telha.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                  <Package className="text-muted-foreground/30" size={64} />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">{telha.name}</h2>
                  <p className="text-muted-foreground mb-4">{telha.desc}</p>

                  <div className="flex gap-2 mb-4">
                    {telha.versions.map((v) => (
                      <span
                        key={v}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Rendimento</p>
                      <p className="font-display font-semibold text-foreground">{telha.specs.perM2}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Dimensões</p>
                      <p className="font-display font-semibold text-foreground">{telha.specs.dimensions}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
