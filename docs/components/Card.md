Card de conteúdo para KPIs, listas e blocos de texto, com cabeçalho, corpo e rodapé opcionais.

## Variantes

| Variante | Quando usar | Tokens |
|---|---|---|
| `surface` | Padrão do dashboard: gráficos, listas, KPIs. | `bg-surface`, `border-subtle` |
| `elevated` | Card dentro de card ou conteúdo que precisa saltar do fundo. | `bg-elevated`, `shadow-card` |
| `brand` | O destaque da tela (Top Gainer, saldo principal). Um por tela. | `bg-brand`, texto `ink-900` |
| `deep` | Alertas e recomendações de IA, blocos de marca escuros. | `bg-brand-deep`, texto `offwhite` |

## Regras

- `padding`: `sm` (16px, `radius-lg`) em grids densos, `md` (24px, `radius-xl`) padrão, `lg` (32px, `radius-2xl`) em heros.
- Título curto (`heading-3`); use `eyebrow` em mono para categoria ou ticker.
- `action` no canto superior direito para filtro, abrir (↗) ou menu, normalmente um `Button` ghost só de ícone.
- O valor principal dentro do card usa os estilos `data-*`; a variação vem com sinal e seta em `positive`/`negative`.
- Cards aninhados: o filho usa `elevated` e um raio menor que o do pai.

## O que o consumidor fornece

O conteúdo do corpo (números, gráficos, listas) e as ações do cabeçalho e do rodapé.
