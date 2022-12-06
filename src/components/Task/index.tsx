import { useState } from 'react';
import { Checkbox } from '../Checkbox'
import { Button } from "../Button";
import styles from './styles.module.css';

interface TaskProps {
  description: string;
  onCheckTask: React.Dispatch<React.SetStateAction<number>>;
  onDeleteTask: (taskToDelete: string) => void;
}

export function Task({ description, onDeleteTask, onCheckTask }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handleCheckTask() {
    onCheckTask(state => isDone ? state - 1 : state + 1)
    setIsDone(!isDone)
  }


  function handleDeleteTask() {
    onCheckTask(state => isDone ? state - 1 : state)
    onDeleteTask(description);
  }

  return (
    <article
      className={
        isDone ?
        `${styles.task}` :
        `${styles.task} ${styles.todo}`
      }
    >
      <div>
        <Checkbox onClick={handleCheckTask} />
        {
          isDone ?
          (<del>{description}</del>) :
          (<span>{description}</span>)
        }
      </div>
      <Button
        onClick={handleDeleteTask}
        variant='delete'
        type='button'
      />
    </article>
  )
}
