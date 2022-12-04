import { FormHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...rest }: FormProps) {
  return (
    <form
      className={styles.form}
      {...rest}
    >
      {children}
    </form>
  )
}
