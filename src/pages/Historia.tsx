import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, Award, Leaf, Cpu } from "lucide-react";
import minaImg from "@/assets/mina-argila.jpeg";
import roboImg from "@/assets/robo-fabrica.jpg";
import producaoImg from "@/assets/producao-telhas.jpg";

const timeline = [
  { year: "1978", title: "Fundação", desc: "A Cerâmica Livramento inicia suas atividades com uma pequena fábrica no bairro Ininga, em Teresina (PI), próxima à Universidade Federal do Piauí." },
  { year: "1985", title: "Filial em Timon", desc: "Criação da filial de Timon (MA), com uma nova fábrica de layout moderno, produzindo telhas extrusadas sem rebarbas." },
  { year: "1989", title: "Nova Sede", desc: "A fábrica do Maranhão se torna a sede da empresa, com a desativação da fábrica do Piauí." },
  { year: "1997", title: "Forno Túnel", desc: "Construção de nova fábrica com o primeiro forno túnel da região, aumentando e diversificando a produção com processo quase totalmente automatizado." },
  { year: "2017", title: "Nova Livramento", desc: "Inauguração da Nova Livramento: moagem a seco, prensas automatizadas, robôs na carga e descarga, secador contínuo e forno túnel de grande capacidade." },
  { year: "2024", title: "46+ Anos de História", desc: "Mais de 500 parceiros e presença consolidada no Norte e Nordeste do Brasil, com tecnologia de ponta na produção." },
];

const values = [
  { icon: Award, title: "Qualidade", desc: "Matéria-prima selecionada e controle rigoroso em cada etapa com laboratório próprio." },
  { icon: Users, title: "Parceria", desc: "Relacionamento sólido com mais de 500 revendedores e construtores." },
  { icon: MapPin, title: "Alcance", desc: "Presença forte no Norte e Nordeste brasileiro, sede em Timon-MA." },
  { icon: Cpu, title: "Tecnologia", desc: "Robôs, prensas automatizadas, moinhos pendulares e processos de ponta." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Planos de manejo florestal e substituição de lenha por combustíveis alternativos." },
  { icon: Clock, title: "Tradição", desc: "46+ anos de experiência e pioneirismo no mercado cerâmico." },
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
            Desde 1978 construindo o futuro com telhas de qualidade. O nome Livramento vem da cidade natal de um dos sócios fundadores, João Freitas.
          </motion.p>
        </div>
      </section>

      {/* Photos */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: minaImg, alt: "Mina de argila da Cerâmica Livramento" },
              { src: roboImg, alt: "Robô KUKA na fábrica Nova Livramento" },
              { src: producaoImg, alt: "Linha de produção de telhas" },
            ].map((photo) => (
              <motion.div
                key={photo.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pioneirismo */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl border border-border"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Pioneirismo e <span className="text-gradient-gold">Tecnologia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Cerâmica Livramento sempre esteve na vanguarda, criando ou aperfeiçoando inovações na indústria cerâmica. 
              Foi graças à criatividade e dedicação dos nossos técnicos que surgiu a <strong>telha canal paralela</strong>, 
              produzida por extrusão, sem rebarbas, que facilita o manuseio e é a que melhor se ajusta na montagem do telhado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossas vagonetas com bandejas móveis foram desenvolvidas pela nossa equipe, permitindo o carregamento manual 
              por um lado da vagoneta, sem necessidade de virador. A substituição da lenha por combustíveis alternativos como 
              GLP, serragem e cavaco de bambu demonstra nosso compromisso com inovação e meio ambiente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossa <span className="text-gradient-gold">Trajetória</span>
          </h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
