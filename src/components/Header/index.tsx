import styles from './styles.module.css';

export function Header() {
  return (
    <nav className={styles.header}>
      <img src="/src/assets/logo.png" alt="To-do List Logo" />
    </nav>
  )
}
