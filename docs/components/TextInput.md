Campo de texto com rótulo, ícone, sufixo, dica e estado de erro.

## Anatomia

Rótulo (`label`, 13px medium) → caixa (`bg-elevated`, borda `border-strong`, `radius-md`) com ícone opcional à esquerda e sufixo em mono à direita → dica ou erro (12px).

## Estados

| Estado | Visual |
|---|---|
| Padrão | Borda `border-strong` (≥3:1 com o fundo) |
| Hover | Borda `fg-secondary` |
| Foco | Borda `fg-primary` + anel suave de 3px |
| Erro | Borda e mensagem em `negative`; `aria-invalid` ligado |
| Desabilitado | Fundo `border-subtle`, texto `fg-muted` |

## Regras

- Sempre com `label` visível; o placeholder é exemplo, não rótulo.
- Valores monetários e quantidades usam `suffix` com a unidade (USD, BTC) e já saem em algarismos tabulares.
- Busca: `icon` de lupa, `size="sm"` dentro de tabelas e `md` no topo da página.
- A mensagem de erro diz o que fazer ("Informe um valor acima de $10"), não só o que deu errado.

## O que o consumidor fornece

O ícone SVG, `value`/`onChange` (ou uso não controlado) e a validação.
