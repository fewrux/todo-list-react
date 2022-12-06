import styles from './styles.module.css';

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src="/src/assets/logo.png" alt="To-do List Logo" />
    </header>
  )
}
