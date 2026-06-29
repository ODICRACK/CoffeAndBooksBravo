<<<<<<< HEAD
import { Route, Link, Switch } from "wouter";


import Footer from "./componentes/Footer/Footer"
//import Header from "./componentes/Header/Header.jsx"
import PreguntasFrecuentes from "./componentes/PreguntasFrecuentes/PreguntasFrecuentes"
import Home from './componentes/home/Home';
import Carrito from './componentes/carrito/Carrito'
import Catalogo from "./componentes/catalogo/Catalogo"
=======
import { Route, Switch } from "wouter";
import Catalogo from "./componentes/catalogo/Catalogo.jsx";
>>>>>>> Liz
import './App.css'

function Inicio() {
  return (
    <div>
      <h1>Inicio</h1><br />
      <p>Esta es la página principal.</p><br />
      <Link href="/home">Home</Link><br />
      <Link href="/Productos">productos</Link><br />
      <Link href="/carrito">carrito</Link><br />
      <Link href="/catalogo">carrito</Link><br />
      <Link href="/preguntas">preguntas frecuentes</Link><br />
    </div>
  );
}

function App() {
  return (
<<<<<<< HEAD
    <div>

      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/home" component={Home} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/preguntas" component={PreguntasFrecuentes} />
        <Route path="/catalogo" component={Catalogo} />
      </Switch>
    </div>
=======
    <Switch>
      <Route path="/" component={Inicio} />
      <Route path="/cami" component={Inicio} />
      <Route path="/nahue" component={Inicio} />
      <Route path="/Catalogo" component={Catalogo} />
    </Switch>
>>>>>>> Liz
  );
}

export default App
