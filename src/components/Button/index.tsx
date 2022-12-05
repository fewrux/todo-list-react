import { ButtonHTMLAttributes } from 'react';
import { PlusCircle, Trash } from 'phosphor-react'

import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'create' | 'delete';
  type: 'button' | 'submit' | 'reset' | undefined;
  children?: string;
}

export function Button({ variant, type, children, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={variant === 'create' ? styles.buttonCreate : styles.buttonDelete}
      {...rest}
    >
      <span>{children}</span>
      {variant === 'create' ? <PlusCircle size={16} /> : <Trash size={16} />}
    </button>
  )
}
