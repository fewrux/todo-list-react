import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
}

export function Input({name, type, placeholder, ...rest}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      {...rest}
    />
  )
}
