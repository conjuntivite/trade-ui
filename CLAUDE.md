# Trade UI — instruções para o Claude Code

Este projeto usa o design system **Trade UI** (fonte global em `C:/Users/User/design-systems/trade-ui/`; em cada projeto, a cópia em `design-system/`). Toda interface nova segue estas regras.

## Antes de escrever UI

1. Leia `C:/Users/User/design-systems/trade-ui/docs/brand-book.md` (princípios, tokens, tipografia, espaçamento, raio).
2. Para cada componente usado, leia `C:/Users/User/design-systems/trade-ui/docs/components/<Componente>.md`.
3. Para a intenção visual por trás do sistema, consulte `C:/Users/User/design-systems/trade-ui/docs/references.md`.

## Regras obrigatórias

- **Nunca escreva cor, espaçamento, raio ou fonte "na mão".** Use as CSS vars de `C:/Users/User/design-systems/trade-ui/tokens/tokens.css` (`var(--bg-surface)`, `var(--space-6)`, `var(--radius-xl)`, `var(--font-sans)`) ou as classes do preset Tailwind (`C:/Users/User/design-systems/trade-ui/tokens/tailwind.preset.js`).
- **Use só tokens semânticos nos componentes** (`bg-*`, `fg-*`, `border-*`, `action-*`, `positive`, `negative`, `info`, `warning`, `risk`). Primitivas (`lime-300`, `gray-600`…) só para casos especiais documentados.
- **Reaproveite os componentes** de `C:/Users/User/design-systems/trade-ui/components/react` (Button, TextInput, Card, NavBar) antes de criar novos. Componente novo segue o mesmo padrão: prefixo de classe `tu-`, estilos em CSS com tokens, variantes por prop.
- **Os dois temas são obrigatórios.** Claro é o padrão; o escuro vem de `data-theme="dark"` no `<html>`. Teste os dois.
- **Contraste:** texto ≥ 4.5:1. Cores `*-fill` e o limão `#C2F86C` são só preenchimento, nunca texto sobre fundo claro.
- **Números:** valores financeiros usam os estilos `data-*` com `tabular-nums`. Variação sempre com sinal e seta (`+2,15% ↗`, `−0,24% ↘`) em `positive`/`negative`. Centavos em `fg-muted`.
- **Uma cor de marca por tela:** um único card `brand` (limão) ou CTA `accent` em destaque.
- **Espaçamento em grade de 4px:** padding de card `space-6`, gap entre cards `space-4`, entre seções `space-12`.
- **Raio:** cards `radius-xl` (24px), cards internos `radius-lg`/`radius-md`, controles e abas `radius-pill`. Aninhado: raio interno = raio externo − padding.
- **Ícones:** traço de 1.5px, 16/20/24px, botão só de ícone sempre com `aria-label`.
- **Evite:** gradientes roxo-azul genéricos, cards com borda lateral colorida, emojis como ícones, sombras pesadas no tema escuro (use `border-subtle`).

## Como integrar num projeto

```ts
// main.tsx / layout raiz
import './design-system/tokens/tokens.css';
import './design-system/components/trade-ui.css';
import { Button, Card, TextInput, NavBar } from './design-system/components/react';
```

Tailwind (opcional, v3): `presets: [require('./design-system/tokens/tailwind.preset.js')]`, e as classes viram `bg-bg-surface text-fg-primary rounded-xl p-6 text-data-lg`.

Gráficos/canvas: valores resolvidos por tema em `C:/Users/User/design-systems/trade-ui/tokens/tokens.ts`.

## Fonte da verdade

`C:/Users/User/design-systems/trade-ui/tokens/tokens.json` é a origem. Se mudar um token, atualize também `tokens.css`, `tokens.ts` e `tailwind.preset.js` (mesmos nomes) e a tabela em `C:/Users/User/design-systems/trade-ui/docs/brand-book.md`.

## Logos dos produtos

Os produtos usam o mesmo símbolo do gato-fantasma; **a cor do olho identifica o produto**.

| Produto | Cor do olho | Arquivos |
|---|---|---|
| WCOEN | vermelho `#F0532A` | `C:/Users/User/design-systems/trade-ui/brand/wcoen/` |
| Specium | limão `#C2F86C` | `C:/Users/User/design-systems/trade-ui/brand/specium/` |
| xSPECTRO | azul `#4789FE` | `C:/Users/User/design-systems/trade-ui/brand/xspectro/` |
| Conversor DEC ⇄ HEX | roxo `#B547FF` | `C:/Users/User/design-systems/trade-ui/brand/conversor/` (sem lockup) |

Cada pasta tem `*-mark.svg` / `*-mark-reverso.svg` (símbolo), `*-icon-light.svg` / `*-icon-dark.svg` (ícone/favicon por tema), `*-lockup-light.svg` / `*-lockup-dark.svg` (símbolo + nome) e um `README.md`. Use a versão do tema ativo e nunca recolora o olho de um produto com a cor de outro.

## Aplicação em projetos

- **Copie, não importe da pasta global.** Copie `C:/Users/User/design-systems/trade-ui/tokens/tokens.css`, `C:/Users/User/design-systems/trade-ui/components/trade-ui.css`, os componentes necessários e os logos do produto para dentro do projeto (ex.: `design-system/`), para o deploy não depender desta máquina.
- **Sistemas existentes migram em etapas:** (1) auditoria sem alterar nada; (2) tokens; (3) componentes; (4) logo e favicon. Confira os temas claro e escuro ao fim de cada etapa.
