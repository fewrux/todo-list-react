import { ButtonHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      {...rest}
    >
      {children}
      <PlusCircle size={16} />
    </button>
  )
}
