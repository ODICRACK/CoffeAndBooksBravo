import { Route, Switch } from "wouter";
import Catalogo from "./componentes/catalogo/Catalogo.jsx";
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
      <Route path="/nahue" component={Inicio} />
      <Route path="/Catalogo" component={Catalogo} />
    </Switch>
  );
}

export default App
