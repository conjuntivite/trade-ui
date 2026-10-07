import * as React from 'react';
import { cx } from './cx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = ação principal · secondary = contorno · ghost = sem fundo · accent = limão de marca */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  /** pill (padrão) · rounded · square (CTA reto estilo Strike) */
  shape?: 'pill' | 'rounded' | 'square';
  /** Ícone antes do texto. Sem children vira botão só de ícone (exige aria-label). */
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', shape = 'pill', icon, iconRight, fullWidth, className, children, type = 'button', ...rest },
  ref,
) {
  const iconOnly = !children && !!icon;
  return (
    <button
      ref={ref}
      type={type}
      className={cx('tu-btn', `tu-btn--${variant}`, `tu-btn--${size}`, `tu-btn--${shape}`, iconOnly && 'tu-btn--icon', fullWidth && 'tu-btn--full', className)}
      {...rest}
    >
      {icon && <span className="tu-btn__icon" aria-hidden="true">{icon}</span>}
      {children && <span className="tu-btn__label">{children}</span>}
      {iconRight && <span className="tu-btn__icon" aria-hidden="true">{iconRight}</span>}
    </button>
  );
});
