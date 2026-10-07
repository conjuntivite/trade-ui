import * as React from 'react';
import { cx } from './cx';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Substitui a dica e pinta a borda de `negative`. */
  error?: React.ReactNode;
  icon?: React.ReactNode;
  /** Unidade/atalho à direita em mono (USD, BTC, ⌘K). */
  suffix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, hint, error, icon, suffix, size = 'md', className, id, type = 'text', disabled, ...rest },
  ref,
) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const hintId = `${inputId}-hint`;
  const message = error || hint;
  return (
    <div className={cx('tu-field', !!error && 'tu-field--error', disabled && 'tu-field--disabled', className)}>
      {label && <label className="tu-field__label" htmlFor={inputId}>{label}</label>}
      <div className={cx('tu-input', `tu-input--${size}`)}>
        {icon && <span className="tu-input__icon" aria-hidden="true">{icon}</span>}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          className="tu-input__control"
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? hintId : undefined}
          {...rest}
        />
        {suffix && <span className="tu-input__suffix">{suffix}</span>}
      </div>
      {message && <p id={hintId} className="tu-field__hint">{message}</p>}
    </div>
  );
});
