import { ReactNode } from 'react';
import styles from './styles.module.css';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src="/src/assets/logo.png" alt="To-do List Logo" />
      <div className={styles.taskForm}>
        {children}
      </div>
    </header>
  )
}
