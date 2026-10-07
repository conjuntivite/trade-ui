Botão de ação em pílula, com quatro variantes e estado desabilitado.

## Variantes

| Variante | Quando usar | Tokens |
|---|---|---|
| `primary` | A ação principal da tela (Deposit, Executar, Comprar). Uma por área. | `action-primary`, `action-primary-fg` |
| `secondary` | Ações de apoio ao lado da primária (Withdraw, Transfer, Analisar). | `bg-elevated`, `border-strong`, `fg-primary` |
| `ghost` | Ações discretas, botões de ícone, links de cabeçalho. | transparente, `fg-primary` |
| `accent` | CTA de marca em pontos de conversão (Follow, Sign In, Começar). Use pouco. | `action-accent`, `fg-on-brand` |
| `disabled` | Ação indisponível. É a prop `disabled` em qualquer variante. | `border-subtle`, `fg-muted` |

## Regras

- Rótulo curto com verbo (Depositar, Executar estratégia). Ícone opcional; seta `↗` em `iconRight` indica navegação.
- `size`: `sm` em tabelas e cards, `md` padrão, `lg` em heros e formulários.
- `shape="square"` só na variação técnica/escura inspirada no Strike; o padrão do sistema é pílula.
- Botão só de ícone (`icon` sem texto) precisa de `aria-label`.
- No tema escuro o primário vira verde neon com texto preto.

## O que o consumidor fornece

Os ícones (SVG de traço 1.5px, 16px) e o handler `onClick`.
