import * as React from 'react';
import { cx } from './cx';

export interface NavItem { label: string; href?: string; active?: boolean; key?: string }
export interface NavUser { name: string; email?: string; avatar?: string }

export interface NavBarProps {
  brandName?: string;
  brandHref?: string;
  /** Logo próprio; sem ele, círculo limão com a inicial. */
  logo?: React.ReactNode;
  items?: NavItem[];
  onSelect?: (item: NavItem, index: number) => void;
  /** Botões ghost só de ícone (busca, notificações). */
  actions?: React.ReactNode;
  user?: NavUser;
  className?: string;
}

const initials = (name = '') => name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export function NavBar({ brandName = 'Trade UI', brandHref = '#', logo, items = [], onSelect, actions, user, className }: NavBarProps) {
  return (
    <header className={cx('tu-nav', className)}>
      <a className="tu-nav__brand" href={brandHref} aria-label={brandName}>
        {logo ?? <span className="tu-nav__mark" aria-hidden="true">{brandName.charAt(0)}</span>}
        <span className="tu-nav__name">{brandName}</span>
      </a>
      <nav className="tu-nav__tabs" aria-label="Principal">
        {items.map((it, i) => (
          <a
            key={it.key ?? it.label}
            href={it.href ?? '#'}
            className={cx('tu-nav__tab', it.active && 'is-active')}
            aria-current={it.active ? 'page' : undefined}
            onClick={onSelect ? (e) => { e.preventDefault(); onSelect(it, i); } : undefined}
          >
            {it.label}
          </a>
        ))}
      </nav>
      <div className="tu-nav__end">
        {actions}
        {user && (
          <div className="tu-nav__user">
            {user.avatar
              ? <img className="tu-nav__avatar" src={user.avatar} alt="" />
              : <span className="tu-nav__avatar" aria-hidden="true">{initials(user.name)}</span>}
            <span className="tu-nav__who">
              <span className="tu-nav__username">{user.name}</span>
              {user.email && <span className="tu-nav__email">{user.email}</span>}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
