import * as React from 'react';
import { cx } from './cx';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** surface (padrão) · elevated (branco + sombra) · brand (limão, 1 por tela) · deep (verde profundo, alertas de IA) */
  variant?: 'surface' | 'elevated' | 'brand' | 'deep';
  /** sm 16px/radius-lg · md 24px/radius-xl · lg 32px/radius-2xl */
  padding?: 'sm' | 'md' | 'lg';
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  as?: React.ElementType;
}

export function Card({ variant = 'surface', padding = 'md', eyebrow, title, action, footer, as: Tag = 'section', className, children, ...rest }: CardProps) {
  return (
    <Tag className={cx('tu-card', `tu-card--${variant}`, `tu-card--pad-${padding}`, className)} {...rest}>
      {(title || eyebrow || action) && (
        <header className="tu-card__header">
          <div className="tu-card__heading">
            {eyebrow && <p className="tu-card__eyebrow">{eyebrow}</p>}
            {title && <h3 className="tu-card__title">{title}</h3>}
          </div>
          {action && <div className="tu-card__action">{action}</div>}
        </header>
      )}
      {children != null && <div className="tu-card__body">{children}</div>}
      {footer && <footer className="tu-card__footer">{footer}</footer>}
    </Tag>
  );
}
