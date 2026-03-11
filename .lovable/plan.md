

# Calculadora de Telhado Interativa — Premium Redesign

## O que será feito

Reescrever completamente `src/pages/Calculadora.tsx` com uma experiência visual interativa e premium, substituindo o formulário atual por uma interface com:

### 1. SVG Animado do Telhado
- Gráfico SVG de telhado duas águas (triângulo + retângulo base) no topo
- A cumeeira (ponta do triângulo) anima em tempo real via `framer-motion` conforme o slider de inclinação muda
- Cores brand-navy e brand-gold

### 2. Seleção de Telhas por Cards
- Array de objetos: Romaninha (26/m², 2.4kg), Romana (16/m², 3.0kg), Portuguesa (16/m², 2.8kg), Suprema (10.7/m², 4.5kg)
- Cards clicáveis com borda dourada no selecionado, imagem, nome, rendimento e peso
- Usando as imagens já existentes em `src/assets`

### 3. Sliders Interativos (shadcn Slider)
- **Largura**: 2m–20m, step 0.5m
- **Comprimento**: 2m–50m, step 0.5m  
- **Inclinação**: 10%–60%, step 1%
- **Beiral**: Input numérico, padrão 0.5m
- Valores exibidos ao lado de cada slider, cálculo em tempo real (sem botão "Calcular")

### 4. Lógica Matemática
- Metade da Largura = Largura / 2
- Altura Cumeeira = Metade da Largura × (Inclinação / 100)
- Comprimento do Pano = √(Metade² + Altura²)
- Área Total = ((Pano + Beiral) × (Comprimento + Beiral)) × 2
- Total Telhas = ceil(Área × rendimento × 1.05)
- Peso Total = Total Telhas × peso unitário

### 5. Painel de Resultados Dashboard
- 3 cards com ícones Lucide: quantidade de telhas, área total (m²), peso total (kg)
- Nota "Inclui 5% de margem de quebra"
- Animação de entrada com framer-motion

### 6. CTA WhatsApp
- Botão grande "Enviar Orçamento para o Vendedor" 
- Gera link `wa.me/5599311830000` com texto pré-formatado contendo modelo, medidas, quantidade e área
- Mantém também o link para página de cotação

### Arquivo alterado
- `src/pages/Calculadora.tsx` — reescrita completa

