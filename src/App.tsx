import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

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
