import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Main } from "./components/Main";
import { Task } from "./components/Task";

import './styles/global.css';

export function App() {
  return (
    <div className="App">
      <Header>
        <Form>
          <Input name='task' type='text' placeholder='Add a new task' />
          <Button variant='create' type='submit'>
            Create
          </Button>
        </Form>
      </Header>
      <Main>
        <Task description="hello hey how are you doing my old friend?" />
      </Main>
    </div>
  )
}
