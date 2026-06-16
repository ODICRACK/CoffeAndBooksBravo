import { Route, Switch } from "wouter";
import Footer from "./componentes/Footer/Footer"
import './App.css'

function Inicio() {
  return (
    <div>
      <h1>Inicio</h1>
      <p>Esta es la página principal.</p>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Inicio} />
      <Route path="/cami" component={Inicio} />
      <Route path="/nahue" component={Footer} />
      <Route path="/liz" component={Inicio} />
    </Switch>
  );
}

export default App
