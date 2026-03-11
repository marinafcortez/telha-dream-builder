import Layout from "@/components/layout/Layout";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Layers, Ruler, Weight, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

import portuguesaImg from "@/assets/portuguesa-frente.png";
import romanaImg from "@/assets/romana-frente.png";
import producaoImg from "@/assets/producao-telhas.jpg";
import roboImg from "@/assets/robo-fabrica.jpg";

const modelos = [
  { id: 1, nome: "Romaninha", rendimentoM2: 26, pesoKg: 2.4, imagem: producaoImg },
  { id: 2, nome: "Romana", rendimentoM2: 16, pesoKg: 3.0, imagem: romanaImg },
  { id: 3, nome: "Portuguesa", rendimentoM2: 16, pesoKg: 2.8, imagem: portuguesaImg },
  { id: 4, nome: "Suprema", rendimentoM2: 10.7, pesoKg: 4.5, imagem: roboImg },
];

const TelhadoSVG = ({ inclinacao, largura }: { inclinacao: number; largura: number }) => {
  const svgW = 400;
  const svgH = 220;
  const baseY = 180;
  const baseLeft = 60;
  const baseRight = svgW - 60;
  const baseMid = svgW / 2;
  const halfSpan = (baseRight - baseLeft) / 2;
  const cumeeira = baseY - halfSpan * (inclinacao / 100);

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-w-md mx-auto">
      {/* Base / paredes */}
      <rect x={baseLeft} y={baseY} width={baseRight - baseLeft} height={30} rx={2} className="fill-muted stroke-border" strokeWidth={1.5} />
      {/* Pano esquerdo */}
      <motion.polygon
        animate={{ points: `${baseLeft},${baseY} ${baseMid},${cumeeira} ${baseMid},${baseY}` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fill-brand-navy/80 stroke-brand-gold"
        strokeWidth={2}
      />
      {/* Pano direito */}
      <motion.polygon
        animate={{ points: `${baseRight},${baseY} ${baseMid},${cumeeira} ${baseMid},${baseY}` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fill-brand-navy/90 stroke-brand-gold"
        strokeWidth={2}
      />
      {/* Cumeeira dot */}
      <motion.circle
        animate={{ cy: cumeeira }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        cx={baseMid}
        r={4}
        className="fill-brand-gold"
      />
      {/* Labels */}
      <text x={baseMid} y={baseY + 22} textAnchor="middle" className="fill-muted-foreground text-[11px]">
        {largura.toFixed(1)}m
      </text>
      <motion.text
        animate={{ y: cumeeira - 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        x={baseMid}
        textAnchor="middle"
        className="fill-brand-gold text-[11px] font-semibold"
      >
        {inclinacao}%
      </motion.text>
    </svg>
  );
};

const Calculadora = () => {
  const [largura, setLargura] = useState(8);
  const [comprimento, setComprimento] = useState(12);
  const [inclinacao, setInclinacao] = useState(30);
  const [beiral, setBeiral] = useState("0.5");
  const [modeloId, setModeloId] = useState<number | null>(null);

  const modelo = modelos.find((m) => m.id === modeloId) ?? null;
  const beiralNum = parseFloat(beiral) || 0;

  const calc = useMemo(() => {
    const metade = largura / 2;
    const alturaCumeeira = metade * (inclinacao / 100);
    const pano = Math.sqrt(metade ** 2 + alturaCumeeira ** 2);
    const areaTotal = (pano + beiralNum) * (comprimento + beiralNum) * 2;

    if (!modelo) return { areaTotal, totalTelhas: 0, pesoTotal: 0 };

    const totalTelhas = Math.ceil(areaTotal * modelo.rendimentoM2 * 1.05);
    const pesoTotal = totalTelhas * modelo.pesoKg;
    return { areaTotal, totalTelhas, pesoTotal };
  }, [largura, comprimento, inclinacao, beiralNum, modelo]);

  const whatsappMsg = modelo
    ? `Olá! Gostaria de um orçamento:%0A%0A📐 *Calculadora de Telhado*%0A• Modelo: ${modelo.nome}%0A• Largura: ${largura}m%0A• Comprimento: ${comprimento}m%0A• Inclinação: ${inclinacao}%%0A• Beiral: ${beiralNum}m%0A• Área total: ${calc.areaTotal.toFixed(1)} m²%0A• Quantidade: ${calc.totalTelhas.toLocaleString("pt-BR")} telhas%0A• Peso estimado: ${(calc.pesoTotal / 1000).toFixed(1)} ton%0A%0APor favor, enviem o valor!`
    : "";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calculator className="mx-auto mb-4 text-brand-gold" size={48} />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
              Calculadora de <span className="text-gradient-gold">Telhado</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Mova os controles e veja o cálculo em tempo real — sem precisar apertar nenhum botão.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          {/* SVG */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <TelhadoSVG inclinacao={inclinacao} largura={largura} />
          </motion.div>

          {/* Seleção de modelo */}
          <div>
            <h2 className="font-display text-lg font-semibold mb-3">Escolha o Modelo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {modelos.map((m) => (
                <Card
                  key={m.id}
                  onClick={() => setModeloId(m.id)}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    modeloId === m.id
                      ? "ring-2 ring-brand-gold border-brand-gold shadow-lg"
                      : "border-border"
                  }`}
                >
                  <CardContent className="p-3 text-center">
                    <img src={m.imagem} alt={m.nome} className="w-full h-20 object-cover rounded mb-2" />
                    <p className="font-display font-semibold text-sm">{m.nome}</p>
                    <p className="text-muted-foreground text-xs">{m.rendimentoM2} telhas/m²</p>
                    <p className="text-muted-foreground text-xs">{m.pesoKg} kg/un</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Largura (vão livre)</Label>
                <span className="text-sm font-semibold text-brand-gold">{largura.toFixed(1)}m</span>
              </div>
              <Slider min={2} max={20} step={0.5} value={[largura]} onValueChange={([v]) => setLargura(v)} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Comprimento</Label>
                <span className="text-sm font-semibold text-brand-gold">{comprimento.toFixed(1)}m</span>
              </div>
              <Slider min={2} max={50} step={0.5} value={[comprimento]} onValueChange={([v]) => setComprimento(v)} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Inclinação</Label>
                <span className="text-sm font-semibold text-brand-gold">{inclinacao}%</span>
              </div>
              <Slider min={10} max={60} step={1} value={[inclinacao]} onValueChange={([v]) => setInclinacao(v)} />
            </div>
            <div className="space-y-2">
              <Label>Beiral (m)</Label>
              <Input
                type="number"
                min={0}
                max={2}
                step={0.1}
                value={beiral}
                onChange={(e) => setBeiral(e.target.value)}
              />
            </div>
          </div>

          {/* Resultados */}
          {modelo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="font-display text-lg font-semibold">Resultado — {modelo.nome}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="border-brand-gold/30">
                  <CardContent className="p-5 text-center space-y-1">
                    <Layers className="mx-auto text-brand-gold" size={28} />
                    <p className="font-display text-3xl font-bold">{calc.totalTelhas.toLocaleString("pt-BR")}</p>
                    <p className="text-muted-foreground text-xs">telhas</p>
                  </CardContent>
                </Card>
                <Card className="border-brand-gold/30">
                  <CardContent className="p-5 text-center space-y-1">
                    <Ruler className="mx-auto text-brand-gold" size={28} />
                    <p className="font-display text-3xl font-bold">{calc.areaTotal.toFixed(1)}</p>
                    <p className="text-muted-foreground text-xs">m² de cobertura</p>
                  </CardContent>
                </Card>
                <Card className="border-brand-gold/30">
                  <CardContent className="p-5 text-center space-y-1">
                    <Weight className="mx-auto text-brand-gold" size={28} />
                    <p className="font-display text-3xl font-bold">{(calc.pesoTotal / 1000).toFixed(1)}</p>
                    <p className="text-muted-foreground text-xs">toneladas</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground text-xs text-center">* Inclui 5% de margem de quebra</p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a href={`https://wa.me/5599311830000?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe57] text-white font-display font-semibold gap-2">
                    <MessageCircle size={20} />
                    Enviar Orçamento via WhatsApp
                  </Button>
                </a>
                <Link to={`/cotacao?modelo=${modelo.nome}&quantidade=${calc.totalTelhas}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-display font-semibold gap-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10">
                    Solicitar Cotação
                    <ChevronRight size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
