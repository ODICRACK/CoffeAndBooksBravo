import { Route, Router, Switch } from "wouter";

// import Footer from "./componentes/Footer/Footer"
//import Header from "./componentes/Header/Header.jsx"
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes"
import Home from './pages/home/Home';
import Catalogo from "./pages/catalogo/Catalogo"
import SearchMovile from "./componentes/modales/SearchMovile/SearchMovile";
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/preguntas" component={PreguntasFrecuentes} />
          <Route path="/catalogo" component={Catalogo} />
          <Route path="/search" component={SearchMovile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
