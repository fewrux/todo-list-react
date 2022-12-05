import { useState } from 'react';
import { Checkbox } from '../Checkbox'
import { Button } from "../Button";
import styles from './styles.module.css';

interface TaskProps {
  description: string;
}

export function Task({ description }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handleChange() {
    setIsDone(!isDone)
  }

  return (
    <article
      className={
        isDone ?
        `${styles.task} ${styles.done}` :
        `${styles.task} ${styles.todo}`
      }
    >
      <div>
        <Checkbox onClick={handleChange} />
        <span>{description}</span>
      </div>
      <Button variant='delete' type='button' />
    </article>
  )
}
