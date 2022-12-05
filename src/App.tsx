import { Button } from "./components/Button";
import { Dashboard } from "./components/Dashboard";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Main } from "./components/Main";

import './styles/global.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Dashboard />
      </Main>
    </div>
  )
}
