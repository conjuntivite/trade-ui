import type * as React from 'react';

/** Botão de ação. Pílula por padrão; `shape="square"` dá o CTA reto do estilo Strike. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = ação principal (preto no claro, verde no escuro); secondary = contorno; ghost = sem fundo; accent = limão de marca. Padrão: primary. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  /** sm 32px · md 40px · lg 48px. Padrão: md. */
  size?: 'sm' | 'md' | 'lg';
  /** pill (radius-pill) · rounded (radius-sm) · square (radius-none). Padrão: pill. */
  shape?: 'pill' | 'rounded' | 'square';
  /** Ícone antes do texto. Sem `children`, vira botão só de ícone (exige aria-label). */
  icon?: React.ReactNode;
  /** Ícone depois do texto (ex.: seta ↗). */
  iconRight?: React.ReactNode;
  /** Ocupa 100% da largura. */
  fullWidth?: boolean;
  /** Estado desabilitado: fundo border-subtle, texto fg-muted. */
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** Campo de texto com rótulo, dica e erro. */
export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Rótulo visível acima do campo. */
  label?: React.ReactNode;
  /** Texto de ajuda abaixo do campo. */
  hint?: React.ReactNode;
  /** Mensagem de erro; substitui a dica e pinta a borda de `negative`. */
  error?: React.ReactNode;
  /** Ícone à esquerda (ex.: busca). */
  icon?: React.ReactNode;
  /** Sufixo à direita em mono (ex.: "USD", "⌘K"). */
  suffix?: React.ReactNode;
  /** sm 36px · md 44px · lg 52px. Padrão: md. */
  size?: 'sm' | 'md' | 'lg';
}
export declare function TextInput(props: TextInputProps): React.ReactElement;

/** Card de conteúdo com cabeçalho, corpo e rodapé opcionais. */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** surface = padrão do dashboard; elevated = branco com sombra; brand = limão de destaque; deep = verde profundo (alerta de IA). Padrão: surface. */
  variant?: 'surface' | 'elevated' | 'brand' | 'deep';
  /** sm (16px, radius-lg) · md (24px, radius-xl) · lg (32px, radius-2xl). Padrão: md. */
  padding?: 'sm' | 'md' | 'lg';
  /** Sobretítulo em mono, caixa alta. */
  eyebrow?: React.ReactNode;
  /** Título do card. */
  title?: React.ReactNode;
  /** Ação no canto superior direito (botão de ícone, filtro). */
  action?: React.ReactNode;
  /** Rodapé separado por divisória. */
  footer?: React.ReactNode;
  /** Elemento raiz. Padrão: section. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  key?: string;
}
export interface NavUser {
  name: string;
  email?: string;
  /** URL da foto; sem ela, mostra as iniciais sobre bg-brand. */
  avatar?: string;
}
/** Barra de navegação superior: marca, abas em pílula e área do usuário. */
export interface NavBarProps {
  /** Nome exibido ao lado da marca. Padrão: "Trade UI". */
  brandName?: string;
  brandHref?: string;
  /** Logo próprio; sem ele, um círculo limão com a inicial. */
  logo?: React.ReactNode;
  /** Abas de navegação; a ativa fica em bg-inverse. */
  items?: NavItem[];
  /** Chamado ao clicar numa aba (evita a navegação padrão). */
  onSelect?: (item: NavItem, index: number) => void;
  /** Botões à direita, antes do usuário (notificação, busca). */
  actions?: React.ReactNode;
  user?: NavUser;
  className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;
