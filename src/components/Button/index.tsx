import { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
}

export function Button({type, children, ...rest}: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      {...rest}
    >
      {children}
      <PlusCircle size={16} />
    </button>
  )
}
