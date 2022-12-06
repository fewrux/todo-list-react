import { ChangeEvent, FormEvent, useState } from "react";
import { ClipboardText } from 'phosphor-react';

import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Task } from "../Task";

import { useCountDoneTasks } from "../../hooks/useCountDoneTasks";

import styles from './styles.module.css';

interface Task {
  description: string;
}

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([{ description: 'Task 1' }, { description: 'Task 2'}]);
  const [newTask, setNewTask] = useState('');
  const { doneTasks, setDoneTasks } = useCountDoneTasks();

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
      <div className={styles.container}>
        <Form
          onSubmit={handleCreateNewTask}
        >
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
        <section>
          <header className={styles.tasksHeader}>
            <div>
              <span className={styles.textBlue}>Tasks</span>
              <span>{tasks.length}</span>
            </div>
            <div>
              <span className={styles.textPurple}>Concluded</span>
              <span>{doneTasks} of {tasks.length}</span>
            </div>
          </header>
          {
            tasks.length > 0 ?

            <div className={styles.tasks}>
              {tasks.map(task => (
                <Task
                key={task.description}
                description={task.description}
                onCheckTask={setDoneTasks}
                onDeleteTask={deleteTask}
                />
                ))}
            </div> :

            <div className={styles.emptyDashboard}>
              <ClipboardText />
              <strong>You don't have any tasks registered yet</strong>
              <span>Create tasks and organize your to-do items</span>
            </div>
          }
        </section>
      </div>
    </>
  )
}
