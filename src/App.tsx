import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Main } from "./components/Main";

import './styles/global.css';

export function App() {
  return (
    <div className="App">
      <Header>
        <Form>
          <Input name='task' type='text' placeholder='Add a new task' />
          <Button type='submit'>
            Create
          </Button>
        </Form>
      </Header>
      <Main>

      </Main>
    </div>
  )
}
