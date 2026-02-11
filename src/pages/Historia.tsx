import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, Award } from "lucide-react";

const timeline = [
  { year: "1978", title: "Fundação", desc: "A Cerâmica Livramento nasce em Imperatriz-MA com o sonho de produzir telhas de qualidade." },
  { year: "1990", title: "Expansão Regional", desc: "Início da distribuição para todo o Maranhão e estados vizinhos." },
  { year: "2005", title: "Modernização", desc: "Investimento em tecnologia e ampliação da capacidade produtiva." },
  { year: "2015", title: "Paletização 100%", desc: "Adoção do sistema 100% paletizado, reduzindo quebras e garantindo qualidade na entrega." },
  { year: "2024", title: "48 Anos de História", desc: "Mais de 500 parceiros e presença consolidada no Norte e Nordeste do Brasil." },
];

const values = [
  { icon: Award, title: "Qualidade", desc: "Matéria-prima selecionada e controle rigoroso em cada etapa." },
  { icon: Users, title: "Parceria", desc: "Relacionamento sólido com revendedores e construtores." },
  { icon: MapPin, title: "Alcance", desc: "Presença forte no Norte e Nordeste brasileiro." },
  { icon: Clock, title: "Tradição", desc: "48+ anos de experiência no mercado cerâmico." },
];

const Historia = () => {
  return (
    <Layout>
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Nossa <span className="text-gradient-gold">História</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Desde 1978 construindo o futuro com telhas de qualidade.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full -translate-x-1.5 mt-2 ring-4 ring-background" />
                <div className="ml-10 md:ml-0 md:w-1/2 bg-card p-6 rounded-xl border border-border">
                  <span className="text-brand-gold font-display font-bold text-lg">{item.year}</span>
                  <h3 className="font-display font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossos <span className="text-gradient-gold">Valores</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <v.icon className="mx-auto mb-3 text-brand-gold" size={32} />
                <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Historia;
