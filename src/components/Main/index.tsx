import { ReactNode } from 'react';
import styles from './styles.module.css';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  )
}
