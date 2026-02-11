import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const modelos: Record<string, number> = {
  Romaninha: 26,
  Romana: 16,
  Portuguesa: 16,
  Suprema: 10.7,
};

const Calculadora = () => {
  const [largura, setLargura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [inclinacao, setInclinacao] = useState("30");
  const [beiral, setBeiral] = useState("0.5");
  const [modelo, setModelo] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    if (!largura || !comprimento || !modelo) return;

    const l = parseFloat(largura) + parseFloat(beiral) * 2;
    const c = parseFloat(comprimento) + parseFloat(beiral) * 2;
    const inc = parseFloat(inclinacao);

    // Adjust area for roof pitch
    const fator = 1 / Math.cos((inc * Math.PI) / 180);
    const area = l * c * fator;

    const telhasPorM2 = modelos[modelo];
    const total = Math.ceil(area * telhasPorM2 * 1.1); // 10% margem
    setResultado(total);
  };

  return (
    <Layout>
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calculator className="mx-auto mb-4 text-brand-gold" size={48} />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Calculadora de <span className="text-gradient-gold">Telhas</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Descubra quantas telhas você precisa com precisão. Inclui inclinação e beiral.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Dados do Telhado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Largura (m)</Label>
                  <Input type="number" placeholder="Ex: 8" value={largura} onChange={(e) => setLargura(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Comprimento (m)</Label>
                  <Input type="number" placeholder="Ex: 12" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Inclinação (graus)</Label>
                  <Select value={inclinacao} onValueChange={setInclinacao}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[15, 20, 25, 30, 35, 40, 45].map((g) => (
                        <SelectItem key={g} value={String(g)}>{g}°</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Beiral (m)</Label>
                  <Select value={beiral} onValueChange={setBeiral}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[0, 0.3, 0.5, 0.7, 1.0].map((b) => (
                        <SelectItem key={b} value={String(b)}>{b}m</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Modelo da Telha</Label>
                <Select value={modelo} onValueChange={setModelo}>
                  <SelectTrigger><SelectValue placeholder="Selecione o modelo" /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(modelos).map(([name, qty]) => (
                      <SelectItem key={name} value={name}>{name} ({qty} telhas/m²)</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calcular} className="w-full bg-gradient-gold text-primary font-display font-semibold hover:opacity-90" size="lg">
                Calcular
              </Button>

              {resultado !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-muted rounded-xl text-center"
                >
                  <p className="text-muted-foreground text-sm mb-1">Quantidade estimada (com 10% de margem)</p>
                  <p className="font-display text-4xl font-bold text-foreground">{resultado.toLocaleString("pt-BR")}</p>
                  <p className="text-muted-foreground text-sm mb-4">telhas de {modelo}</p>
                  <Link to={`/cotacao?modelo=${modelo}&quantidade=${resultado}`}>
                    <Button className="bg-gradient-gold text-primary font-display font-semibold hover:opacity-90">
                      Solicitar Cotação
                      <ChevronRight size={18} />
                    </Button>
                  </Link>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;
