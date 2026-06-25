import { Route, Switch } from "wouter";
import Home from './componentes/home/Home';
import Carrito from './componentes/carrito/Carrito'
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
      <Route path="/cami1" component={Home} />
      <Route path="/cami2" component={Carrito} />
      <Route path="/nahue" component={Inicio} />
      <Route path="/liz" component={Inicio} />
    </Switch>
  );
}

export default App
