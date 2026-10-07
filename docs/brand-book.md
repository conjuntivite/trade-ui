# Trade UI

Design system para plataformas de investimento e trading: dados claros, ações rápidas e um verde de marca que sinaliza crescimento.

Este sistema é uma síntese de três referências visuais:

- **QorTrade**: interface clara, cards bem arredondados, verde-limão `#C2F86C` como destaque e Plus Jakarta Sans.
- **Tradex AI**: neutros precisos (`#020202`, `#5B5D60`, `#F2F2F2`, `#F8F8F8`), azul de IA `#4789FE`, Geist e texturas hachuradas.
- **Strike**: tema escuro com verde neon `#32D15A`, verde profundo `#0A2D27`, roxo `#B547FF` e Space Mono nos rótulos.

O tema **Claro** é o principal (QorTrade + Tradex). O tema **Escuro** traz a linguagem do Strike.

## Princípios

1. **Dados primeiro.** O número é o herói. Use os estilos `data-*` com algarismos tabulares e deixe os centavos em `fg-muted`.
2. **Uma cor de marca por tela.** `bg-brand` (limão) aparece em um card de destaque, no período ativo ou no CTA, nunca em tudo.
3. **Cor tem significado.** Verde = alta, vermelho = queda, âmbar = alerta, azul = IA/informação, roxo = Short. Sempre acompanhe a cor com sinal (+/−) ou seta (↗/↘).
4. **Superfícies suaves, contraste firme.** Cards cinza-claro sobre fundo cinza, bordas quase invisíveis e texto preto forte.

## Tokens de cor

Os tokens têm duas camadas. As **primitivas** (`lime-300`, `gray-600`…) são a paleta bruta. Os **semânticos** (`bg-surface`, `positive`…) são o que os componentes usam e mudam por tema. Componentes usam só tokens semânticos.

### Primárias (marca)

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `bg-brand` | `#C2F86C` | `#C2F86C` | Card destaque, período ativo, avatar |
| `action-primary` | `#141414` | `#32D15A` | Botão primário |
| `action-accent` | `#C2F86C` | `#C2F86C` | CTA de marca (Follow, Sign In) |
| `bg-brand-deep` | `#0A2D27` | `#0A2D27` | Alerta de IA, rodapé |

### Secundárias e semânticas

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `positive` | `#17782F` | `#32D15A` | Texto de alta |
| `positive-fill` | `#60CF71` | `#32D15A` | Barras e badges positivos |
| `negative` | `#C13510` | `#FF6B47` | Texto de queda |
| `negative-fill` | `#F0532A` | `#F0532A` | Barras e badges negativos |
| `info` | `#2561D6` | `#6FA3FF` | Texto de IA e links |
| `info-fill` | `#4789FE` | `#4789FE` | Ícones de IA, barra de confiança |
| `warning` | `#8A5A00` | `#F5B83D` | Alerta, risco moderado |
| `accent-short` | `#8A2BD2` | `#C67BFF` | Tag Short |
| `risk-fill` | `#E8336E` | `#E8336E` | Medidor de risco |

### Neutras

| Token | Claro | Escuro | Uso |
|---|---|---|---|
| `bg-page` | `#F2F2F2` | `#000000` | Fundo do app |
| `bg-surface` | `#F8F8F8` | `#0F0F10` | Cards |
| `bg-elevated` | `#FFFFFF` | `#1A1A1C` | Card dentro de card, inputs |
| `bg-inverse` | `#141414` | `#FBF4F4` | Aba ativa, tooltip |
| `border-subtle` | `#E4E4E4` | `#26262A` | Divisórias |
| `border-strong` | `#6E7075` | `#6A6C71` | Contorno de controles |
| `fg-primary` | `#141414` | `#FBF4F4` | Texto principal |
| `fg-secondary` | `#5B5D60` | `#A1A3A8` | Texto de apoio |
| `fg-muted` | `#6E7075` | `#8A8C91` | Metadados, centavos |

**Acessibilidade:** todos os tokens de texto têm contraste mínimo de 4.5:1 sobre `bg-page`, `bg-surface` e `bg-elevated` no seu tema. As cores `*-fill` (limão, verde, azul, vermelho) são para preenchimento, nunca para texto pequeno sobre fundo claro. O limão `#C2F86C` sobre `#F2F2F2` tem só 1.1:1, então um card limão precisa de conteúdo forte dentro dele, não de borda.

## Tipografia

- **Sans:** Plus Jakarta Sans (Google Fonts), pesos 400, 500 e 600. Geist é o fallback e a alternativa equivalente.
- **Mono:** Space Mono (Google Fonts) para sobretítulos, tickers e timestamps.

| Estilo | Tamanho / Altura | Peso | Uso |
|---|---|---|---|
| `display-xl` | 64 / 68 | 600 | Hero |
| `display-lg` | 48 / 52 | 600 | Seção de marketing |
| `heading-1` | 32 / 40 | 600 | Título de página |
| `heading-2` | 24 / 32 | 600 | Painel grande |
| `heading-3` | 20 / 28 | 600 | Título de card |
| `heading-4` | 16 / 24 | 600 | Subtítulo, nome de ativo |
| `data-xl` | 44 / 48 | 500 | Valor de portfólio |
| `data-lg` | 28 / 34 | 600 | KPI |
| `data-md` | 18 / 24 | 600 | Valores em lista |
| `data-sm` | 13 / 16 | 500 | Variação em pílula |
| `body-lg` | 16 / 24 | 400 | Parágrafo destacado |
| `body-md` | 14 / 20 | 400 | Texto padrão |
| `body-sm` | 12 / 16 | 400 | Legenda, eixo |
| `label` | 13 / 16 | 500 | Botões, abas, chips |
| `eyebrow` (mono) | 12 / 16, +0.08em | 400 | Sobretítulo em caixa alta |
| `ticker` (mono) | 12 / 16, +0.02em | 400 | Tickers, IDs, horários |

Números sempre com `font-variant-numeric: tabular-nums`. Títulos grandes usam tracking negativo; o `eyebrow` usa caixa alta.

## Espaçamento

Grade de 4px. Os passos são `space-1` (4), `space-2` (8), `space-3` (12), `space-4` (16), `space-5` (20), `space-6` (24), `space-8` (32), `space-10` (40), `space-12` (48), `space-16` (64) e `space-24` (96).

- Padding de card do dashboard: `space-6`. Gap entre cards: `space-4`.
- Padding de botão: `space-2` na vertical e `space-4` na horizontal.
- Separação entre seções de página: `space-12`. Em landing: `space-16` ou `space-24`.

## Raio de borda

| Token | Valor | Uso |
|---|---|---|
| `radius-none` | 0 | CTA reto estilo Strike (variação técnica) |
| `radius-xs` | 4px | Badges de status |
| `radius-sm` | 8px | Inputs, botões retangulares |
| `radius-md` | 12px | Cards internos |
| `radius-lg` | 16px | Card padrão |
| `radius-xl` | 24px | Card principal, modal |
| `radius-2xl` | 32px | Hero, container editorial |
| `radius-pill` | 9999px | Abas, chips, pílulas, botões de ícone, avatares |

Regra de aninhamento: o raio interno é o raio externo menos o padding. Por exemplo, um card `radius-xl` com padding `space-2` leva filhos com `radius-lg`.

## Sombras e efeitos

- `shadow-card`: elevação suave no tema claro. No escuro, use `border-subtle`.
- `shadow-glow`: brilho azul no claro e verde no escuro, para logo, alerta de IA e foco de destaque.
- `hatch-opacity` (0.35): texturas hachuradas diagonais em barras de progresso, sliders e fundos decorativos.

## Iconografia

Ícones de traço fino (1.5px), cantos arredondados, em 16, 20 ou 24px, dentro de um círculo `bg-elevated` quando ficam soltos (cards de funcionalidade, botões de ícone). Setas de tendência ↗ e ↘ sempre acompanham a variação.

## Componentes

Biblioteca React (namespace `TradeUI`), estilizada só com os tokens acima:

- **Button**: variantes `primary`, `secondary`, `ghost` e `accent`, estado `disabled`, tamanhos `sm`/`md`/`lg`, formatos pílula, arredondado ou reto, e versão só de ícone.
- **TextInput**: rótulo, ícone, sufixo de unidade, dica, erro e desabilitado.
- **Card**: variantes `surface`, `elevated`, `brand` e `deep`, com sobretítulo, título, ação e rodapé.
- **NavBar**: marca, abas em pílula com a ativa invertida, ações e chip do usuário.

Cada componente tem suas regras de uso na própria página.

## Ainda não definido

Logo, fontes como arquivos e biblioteca de ícones ainda não fazem parte deste sistema.
