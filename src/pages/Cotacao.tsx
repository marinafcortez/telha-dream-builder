import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const Cotacao = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    estado: "",
    modelo: searchParams.get("modelo") || "",
    tipo: "",
    quantidade: searchParams.get("quantidade") || "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com Cloud para salvar cotação
    toast({ title: "Cotação enviada!", description: "Entraremos em contato em breve." });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8"
          >
            <CheckCircle className="mx-auto mb-4 text-brand-gold" size={64} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Cotação Enviada!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Recebemos seus dados e nossa equipe entrará em contato pelo WhatsApp em breve.
            </p>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gradient-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <FileText className="mx-auto mb-4 text-brand-gold" size={48} />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Solicitar <span className="text-gradient-gold">Cotação</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Preencha os dados abaixo e receba uma proposta personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Seus Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={enviar} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome completo</Label>
                    <Input required value={form.nome} onChange={(e) => update("nome", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>WhatsApp</Label>
                    <Input required placeholder="(99) 99999-9999" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Cidade</Label>
                    <Input required value={form.cidade} onChange={(e) => update("cidade", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Estado</Label>
                    <Select value={form.estado} onValueChange={(v) => update("estado", v)}>
                      <SelectTrigger><SelectValue placeholder="UF" /></SelectTrigger>
                      <SelectContent>
                        {estados.map((uf) => (
                          <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Modelo</Label>
                    <Select value={form.modelo} onValueChange={(v) => update("modelo", v)}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        {["Romaninha", "Romana", "Portuguesa", "Suprema"].map((m) => (
                          <SelectItem key={m} value={m}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo</Label>
                    <Select value={form.tipo} onValueChange={(v) => update("tipo", v)}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural">Natural</SelectItem>
                        <SelectItem value="resinada">Resinada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Quantidade estimada</Label>
                    <Input type="number" value={form.quantidade} onChange={(e) => update("quantidade", e.target.value)} />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-gold text-primary font-display font-semibold hover:opacity-90" size="lg">
                  Enviar Cotação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Cotacao;
