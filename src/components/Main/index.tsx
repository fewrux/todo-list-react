import { Button } from '../Button';
import styles from './styles.module.css';

export function Main() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Content</h1>
        <Button>
          Create
        </Button>
      </div>
    </main>
  )
}
