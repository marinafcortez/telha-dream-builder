import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, CheckCircle, TrendingUp, Truck, HeadphonesIcon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { anosDeMercado } from "@/lib/constants";

const beneficios = [
  { icon: TrendingUp, title: "Margens Competitivas", desc: "Condições comerciais que garantem boa rentabilidade." },
  { icon: Truck, title: "Entrega Paletizada", desc: "Produto íntegro e organizado no seu estoque." },
  { icon: HeadphonesIcon, title: "Suporte Dedicado", desc: "Equipe comercial à disposição para ajudar." },
  { icon: Award, title: "Marca Reconhecida", desc: `${anosDeMercado()}+ anos de tradição e qualidade comprovada.` },
];

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const Parceiro = () => {
  const { toast } = useToast();
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    empresa: "",
    responsavel: "",
    whatsapp: "",
    cidade: "",
    estado: "",
    mensagem: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação enviada!", description: "Entraremos em contato em breve." });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-background">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8">
            <CheckCircle className="mx-auto mb-4 text-brand-gold" size={64} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Solicitação Enviada!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Nossa equipe comercial analisará sua solicitação e entrará em contato em breve.
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
            <Handshake className="mx-auto mb-4 text-brand-gold" size={48} />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Seja <span className="text-gradient-gold">Parceiro</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Junte-se a mais de 500 revendedores que confiam na Cerâmica Livramento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <b.icon className="mx-auto mb-3 text-brand-gold" size={28} />
                <h3 className="font-display font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Cadastro de Parceiro</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={enviar} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome da Empresa</Label>
                    <Input required value={form.empresa} onChange={(e) => update("empresa", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Responsável</Label>
                    <Input required value={form.responsavel} onChange={(e) => update("responsavel", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>WhatsApp</Label>
                    <Input required placeholder="(99) 99999-9999" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
                  </div>
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
                <div className="space-y-2">
                  <Label>Mensagem (opcional)</Label>
                  <Textarea value={form.mensagem} onChange={(e) => update("mensagem", e.target.value)} rows={3} />
                </div>
                <Button type="submit" className="w-full bg-gradient-gold text-primary font-display font-semibold hover:opacity-90" size="lg">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Parceiro;
