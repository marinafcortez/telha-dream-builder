import Layout from "@/components/layout/Layout";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Layers, Ruler, Weight, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const TelhadoSVG = ({ inclinacao, largura, comprimento }: { inclinacao: number; largura: number; comprimento: number }) => {
  const svgW = 500;
  const svgH = 280;
  const baseY = 220;

  // Scale house width based on largura (2–20m → narrow to wide)
  const widthFrac = (largura - 2) / 18; // 0..1
  const houseHalfW = 100 + widthFrac * 80; // 100..180 px half-width
  const baseLeft = svgW / 2 - houseHalfW;
  const baseRight = svgW / 2 + houseHalfW;
  const baseMid = svgW / 2;

  // Scale depth based on comprimento (2–50m → shallow to deep)
  const depthFrac = (comprimento - 2) / 48;
  const depth = 15 + depthFrac * 35; // 15..50 px
  const depthX = 10 + depthFrac * 25; // 10..35 px

  // Inclinação: amplify visually so 30% looks like a proper roof
  // Real 30% slope = decent pitch. We scale so the range 10-60% maps to visible angles.
  const roofHeight = houseHalfW * (inclinacao / 100) * 1.8;
  const cumeeira = baseY - 45 - roofHeight;
  const wallH = 45;

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-w-sm mx-auto" style={{ filter: "drop-shadow(0 4px 12px hsl(var(--brand-navy) / 0.25))" }}>
      {/* Back wall (3D depth) */}
      <rect x={baseLeft + depthX} y={baseY - depth - 40} width={baseRight - baseLeft} height={40} className="fill-muted/60 stroke-border" strokeWidth={1} />
      
      {/* Side wall right (3D) */}
      <motion.polygon
        animate={{ points: `${baseRight},${baseY} ${baseRight + depthX},${baseY - depth} ${baseRight + depthX},${baseY - depth - 40} ${baseRight},${baseY - 40}` }}
        className="fill-muted/40 stroke-border" strokeWidth={1}
      />

      {/* Front wall */}
      <rect x={baseLeft} y={baseY - 40} width={baseRight - baseLeft} height={40} rx={1} className="fill-muted stroke-border" strokeWidth={1.5} />
      
      {/* Door */}
      <rect x={baseMid - 12} y={baseY - 30} width={24} height={30} rx={1} className="fill-brand-navy/20 stroke-border" strokeWidth={1} />
      
      {/* Window left */}
      <rect x={baseLeft + 30} y={baseY - 32} width={18} height={14} rx={1} className="fill-accent/20 stroke-border" strokeWidth={1} />
      {/* Window right */}
      <rect x={baseRight - 48} y={baseY - 32} width={18} height={14} rx={1} className="fill-accent/20 stroke-border" strokeWidth={1} />

      {/* Back roof pane (3D) */}
      <motion.polygon
        animate={{ points: `${baseLeft + depthX},${baseY - depth - 40} ${baseMid + depthX},${cumeeira - depth} ${baseRight + depthX},${baseY - depth - 40}` }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fill-brand-navy/50 stroke-brand-gold/50" strokeWidth={1.5}
      />

      {/* Roof left pane */}
      <motion.polygon
        animate={{ points: `${baseLeft},${baseY - 40} ${baseMid},${cumeeira} ${baseMid + depthX},${cumeeira - depth} ${baseLeft + depthX},${baseY - depth - 40}` }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fill-brand-navy/70 stroke-brand-gold" strokeWidth={2}
      />

      {/* Roof right pane */}
      <motion.polygon
        animate={{ points: `${baseRight},${baseY - 40} ${baseMid},${cumeeira} ${baseMid + depthX},${cumeeira - depth} ${baseRight + depthX},${baseY - depth - 40}` }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fill-brand-navy/85 stroke-brand-gold" strokeWidth={2}
      />

      {/* Front roof triangle */}
      <motion.polygon
        animate={{ points: `${baseLeft},${baseY - 40} ${baseMid},${cumeeira} ${baseRight},${baseY - 40}` }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fill-brand-navy/80 stroke-brand-gold" strokeWidth={2}
      />

      {/* Tile lines on front pane */}
      {[0.25, 0.5, 0.75].map((frac) => {
        const lx = baseLeft + (baseMid - baseLeft) * frac;
        const rx = baseMid + (baseRight - baseMid) * frac;
        return (
          <motion.g key={frac}>
            <motion.line
              animate={{ x1: lx, y1: baseY - 40 + (cumeeira - baseY + 40) * frac, x2: baseMid, y2: baseY - 40 + (cumeeira - baseY + 40) * frac }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="stroke-brand-gold/30" strokeWidth={0.8}
            />
            <motion.line
              animate={{ x1: baseMid, y1: baseY - 40 + (cumeeira - baseY + 40) * frac, x2: rx, y2: baseY - 40 + (cumeeira - baseY + 40) * frac }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="stroke-brand-gold/30" strokeWidth={0.8}
            />
          </motion.g>
        );
      })}

      {/* Cumeeira ridge dot */}
      <motion.circle
        animate={{ cy: cumeeira }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        cx={baseMid} r={3.5} className="fill-brand-gold"
      />

      {/* Dimension labels */}
      <text x={baseMid} y={baseY + 16} textAnchor="middle" className="fill-muted-foreground text-[10px]">
        {largura.toFixed(1)}m × {comprimento.toFixed(1)}m
      </text>
      <motion.text
        animate={{ y: cumeeira - 8 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        x={baseMid} textAnchor="middle" className="fill-brand-gold text-[10px] font-bold"
      >
        ▲ {inclinacao}%
      </motion.text>
    </svg>
  );
};

const Calculadora = () => {
  const [largura, setLargura] = useState(8);
  const [comprimento, setComprimento] = useState(12);
  const [inclinacao, setInclinacao] = useState(30);
  const [beiral, setBeiral] = useState("0.5");
  const [modeloId, setModeloId] = useState<number>(1);

  const modelo = modelos.find((m) => m.id === modeloId)!;
  const beiralNum = parseFloat(beiral) || 0;

  const calc = useMemo(() => {
    const metade = largura / 2;
    const alturaCumeeira = metade * (inclinacao / 100);
    const pano = Math.sqrt(metade ** 2 + alturaCumeeira ** 2);
    const areaTotal = (pano + beiralNum) * (comprimento + beiralNum) * 2;
    const totalTelhas = Math.ceil(areaTotal * modelo.rendimentoM2 * 1.05);
    const pesoTotal = totalTelhas * modelo.pesoKg;
    return { areaTotal, totalTelhas, pesoTotal };
  }, [largura, comprimento, inclinacao, beiralNum, modelo]);

  const whatsappMsg = `Olá! Gostaria de um orçamento:%0A%0A📐 *Calculadora de Telhado*%0A• Modelo: ${modelo.nome}%0A• Largura: ${largura}m%0A• Comprimento: ${comprimento}m%0A• Inclinação: ${inclinacao}%%0A• Beiral: ${beiralNum}m%0A• Área: ${calc.areaTotal.toFixed(1)} m²%0A• Qtd: ${calc.totalTelhas.toLocaleString("pt-BR")} telhas%0A• Peso: ${(calc.pesoTotal / 1000).toFixed(1)} ton`;

  return (
    <Layout>
      {/* Compact Hero */}
      <section className="bg-gradient-navy py-8 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="mx-auto mb-2 text-brand-gold" size={36} />
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
            Calculadora de <span className="text-gradient-gold">Telhado</span>
          </h1>
          <p className="text-primary-foreground/60 text-sm mt-1">Ajuste os controles e veja o resultado em tempo real</p>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main 2-column layout on desktop */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-6">
            {/* Left: Controls */}
            <div className="space-y-5">
              {/* SVG + Model selection row */}
              <div className="grid md:grid-cols-[auto_1fr] gap-4 items-start">
                {/* SVG */}
                <div className="w-full md:w-56 shrink-0">
                  <TelhadoSVG inclinacao={inclinacao} largura={largura} comprimento={comprimento} />
                </div>

                {/* Model chips */}
                <div>
                  <p className="font-display text-sm font-semibold mb-2">Modelo da Telha</p>
                  <div className="grid grid-cols-2 gap-2">
                    {modelos.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setModeloId(m.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                          modeloId === m.id
                            ? "ring-2 ring-brand-gold border-brand-gold bg-brand-gold/5"
                            : "border-border hover:border-brand-gold/40"
                        }`}
                      >
                        <img src={m.imagem} alt={m.nome} className="w-10 h-10 rounded object-cover shrink-0" />
                        <div className="min-w-0">
                          <p className="font-display text-xs font-semibold truncate">{m.nome}</p>
                          <p className="text-muted-foreground text-[10px]">{m.rendimentoM2} un/m² · {m.pesoKg}kg</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <Label className="text-xs">Largura (vão livre)</Label>
                    <span className="font-semibold text-brand-gold text-xs">{largura.toFixed(1)}m</span>
                  </div>
                  <Slider min={2} max={20} step={0.5} value={[largura]} onValueChange={([v]) => setLargura(v)} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <Label className="text-xs">Comprimento</Label>
                    <span className="font-semibold text-brand-gold text-xs">{comprimento.toFixed(1)}m</span>
                  </div>
                  <Slider min={2} max={50} step={0.5} value={[comprimento]} onValueChange={([v]) => setComprimento(v)} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <Label className="text-xs">Inclinação</Label>
                    <span className="font-semibold text-brand-gold text-xs">{inclinacao}%</span>
                  </div>
                  <Slider min={10} max={60} step={1} value={[inclinacao]} onValueChange={([v]) => setInclinacao(v)} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Beiral (m)</Label>
                  <Input type="number" min={0} max={2} step={0.1} value={beiral} onChange={(e) => setBeiral(e.target.value)} className="h-8 text-sm" />
                </div>
              </div>
            </div>

            {/* Right: Results panel (sticky on desktop) */}
            <motion.div
              key={modeloId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-24 space-y-3 bg-card border border-border rounded-xl p-5 h-fit"
            >
              <h2 className="font-display text-sm font-semibold border-b border-border pb-2">
                Resultado — <span className="text-brand-gold">{modelo.nome}</span>
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Layers className="text-brand-gold shrink-0" size={22} />
                  <div>
                    <p className="font-display text-2xl font-bold leading-none">{calc.totalTelhas.toLocaleString("pt-BR")}</p>
                    <p className="text-muted-foreground text-[10px]">telhas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Ruler className="text-brand-gold shrink-0" size={22} />
                  <div>
                    <p className="font-display text-2xl font-bold leading-none">{calc.areaTotal.toFixed(1)}</p>
                    <p className="text-muted-foreground text-[10px]">m² de cobertura</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Weight className="text-brand-gold shrink-0" size={22} />
                  <div>
                    <p className="font-display text-2xl font-bold leading-none">{(calc.pesoTotal / 1000).toFixed(1)} t</p>
                    <p className="text-muted-foreground text-[10px]">peso estimado</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-[10px] text-center">* Inclui 5% de margem de quebra</p>

              <div className="space-y-2 pt-1">
                <a href={`https://wa.me/5599311830000?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="sm" className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-display font-semibold gap-2 text-xs">
                    <MessageCircle size={16} />
                    Orçamento via WhatsApp
                  </Button>
                </a>
                <Link to={`/cotacao?modelo=${modelo.nome}&quantidade=${calc.totalTelhas}`} className="block">
                  <Button size="sm" variant="outline" className="w-full font-display font-semibold gap-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 text-xs">
                    Solicitar Cotação <ChevronRight size={14} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
