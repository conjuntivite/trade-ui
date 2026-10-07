Barra de navegação superior com marca, abas em pílula e área do usuário.

## Anatomia

Marca (círculo `bg-brand` com a inicial, ou o `logo` fornecido, mais o nome) → grupo de abas centralizado num trilho `bg-surface` em pílula, com a aba ativa em `bg-inverse`/`fg-inverse` → ações (botões ghost só de ícone) → chip do usuário (avatar, nome e e-mail).

## Regras

- De 3 a 6 abas de primeiro nível, rótulos de uma ou duas palavras. Só uma ativa, marcada com `aria-current="page"`.
- Ações à direita são botões `ghost` só de ícone (notificações, busca, calendário) com `aria-label`.
- Sem foto, o avatar mostra as iniciais sobre `bg-brand`.
- Fundo `bg-page`: a barra se apoia na página, sem sombra. Em telas estreitas, o trilho de abas rola na horizontal.

## O que o consumidor fornece

`items` com rotas, `onSelect` (ou links reais), o logo, os botões de `actions` e os dados do `user`.
