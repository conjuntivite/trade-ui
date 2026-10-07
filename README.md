# Trade UI — design system

Pacote do design system **Trade UI** para usar como base em projetos no Claude Code: tokens, componentes React, documentação e uma vitrine.

## Conteúdo

```
trade-ui-design-system/
├── CLAUDE.md                     ← regras que o Claude Code segue ao criar UI
├── .claude/skills/trade-ui/      ← skill que ativa essas regras automaticamente
├── tokens/
│   ├── tokens.json               ← fonte da verdade (cores claro/escuro, tipografia, espaço, raio, sombra)
│   ├── tokens.css                ← CSS custom properties + classes de tipografia
│   ├── tokens.ts                 ← valores resolvidos por tema (gráficos, canvas)
│   └── tailwind.preset.js        ← preset Tailwind v3
├── components/
│   ├── trade-ui.css              ← estilos dos componentes (só tokens)
│   ├── react/                    ← Button, TextInput, Card, NavBar em TSX
│   └── vanilla/trade-ui.js       ← mesma biblioteca como script (window.TradeUI)
├── docs/
│   ├── brand-book.md             ← princípios e tabelas de tokens
│   ├── references.md             ← as três referências visuais (Strike, QorTrade, Tradex AI)
│   └── components/*.md           ← regras de uso de cada componente
└── preview/index.html            ← vitrine com troca de tema (abra no navegador)
```

## Como usar no Claude Code

1. Descompacte dentro do seu projeto, por exemplo em `design-system/`.
2. Copie (ou mescle) o `CLAUDE.md` e a pasta `.claude/` para a raiz do projeto, e ajuste os caminhos se escolheu outra pasta. Assim o Claude Code segue o sistema em toda tela nova.
3. No app, importe os estilos uma vez:

   ```ts
   import './design-system/tokens/tokens.css';
   import './design-system/components/trade-ui.css';
   import { Button, Card } from './design-system/components/react';
   ```

4. Peça, por exemplo: "Crie a tela de Portfolio seguindo o Trade UI".

Requisitos dos componentes React: React 18+. As fontes (Plus Jakarta Sans e Space Mono) carregam do Google Fonts pelo `tokens.css`.
