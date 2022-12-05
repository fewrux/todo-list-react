import { useState } from 'react';
import { Checkbox } from '../Checkbox'
import { Button } from "../Button";
import styles from './styles.module.css';

interface TaskProps {
  description: string;
  onDeleteTask: (taskToDelete: string) => void;
}

export function Task({ description, onDeleteTask }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handleCheckTask() {
    setIsDone(!isDone)
  }

  function handleDeleteTask() {
    onDeleteTask(description);
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
        <Checkbox onClick={handleCheckTask} />
        <span>{description}</span>
      </div>
      <Button
        onClick={handleDeleteTask}
        variant='delete'
        type='button'
      />
    </article>
  )
}
