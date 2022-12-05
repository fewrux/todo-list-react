import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Task } from "../Task";

import styles from './styles.module.css';

interface Task {
  description: string;
}

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskToCreate: Task = { description: newTask };

    setTasks([...tasks, taskToCreate]);
    setNewTask('');
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => (
        task.description !== taskToDelete
    ));

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <Form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <Input
          value={newTask}
          onChange={handleNewTaskChange}
          type='text'
          placeholder='Add a new task'
        />
        <Button variant='create' type='submit'>
          Create
        </Button>
      </Form>
      <section className={styles.container}>
        {tasks.map(task => (
          <Task
            key={task.description}
            description={task.description}
            onDeleteTask={deleteTask}
          />
        ))}
      </section>
    </>
  )
}
