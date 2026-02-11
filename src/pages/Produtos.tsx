import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import portuguesaImg from "@/assets/portuguesa-frente.png";
import romanaImg from "@/assets/romana-frente.png";
import producaoImg from "@/assets/producao-telhas.jpg";
import roboImg from "@/assets/robo-fabrica.jpg";
import { Shield } from "lucide-react";

const telhas = [
  {
    name: "Romaninha",
    image: producaoImg,
    versions: ["Natural", "Resinada"],
    specs: {
      rendimento: "26 telhas/m²",
      dimensoes: "20,4 x 39,7 cm",
      galga: "32 cm",
      inclinacao: "30%",
    },
    desc: "Telha versátil e econômica, ideal para diversos tipos de construção.",
  },
  {
    name: "Romana",
    image: romanaImg,
    versions: ["Natural", "Resinada"],
    specs: {
      rendimento: "16 telhas/m²",
      dimensoes: "24,2 x 40,8 cm",
      galga: "32,2 cm",
      inclinacao: "30%",
    },
    desc: "Garante encaixe preciso e cobertura eficiente, unindo resistência e estética ao telhado.",
  },
  {
    name: "Portuguesa",
    image: portuguesaImg,
    versions: ["Natural", "Resinada"],
    specs: {
      rendimento: "16 telhas/m²",
      dimensoes: "24,0 x 40,8 cm",
      galga: "34,0 cm",
      inclinacao: "30%",
    },
    desc: "Design tradicional com alta eficiência na drenagem, uma escolha popular para diversas construções.",
  },
  {
    name: "Suprema",
    image: roboImg,
    versions: ["Natural", "Resinada"],
    specs: {
      rendimento: "10,7 telhas/m²",
      dimensoes: "27,9 x 47,3 cm",
      galga: "47,8 cm",
      inclinacao: "30%",
    },
    desc: "A maior telha cerâmica do Brasil, com acabamento superior e maior cobertura por unidade.",
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
            Telhas de alta qualidade produzidas com argila selecionada, disponíveis nas versões Natural e Resinada. Todos os modelos são resinados.
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
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={telha.image}
                    alt={`Telha ${telha.name} Cerâmica Livramento`}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
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
                      <p className="font-display font-semibold text-foreground">{telha.specs.rendimento}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Dimensões</p>
                      <p className="font-display font-semibold text-foreground">{telha.specs.dimensoes}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Galga</p>
                      <p className="font-display font-semibold text-foreground">{telha.specs.galga}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Inclinação Mín.</p>
                      <p className="font-display font-semibold text-foreground">{telha.specs.inclinacao}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paletização */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <video
                  src={new URL("@/assets/paletizacao-video.mp4", import.meta.url).href}
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

export default Produtos;
