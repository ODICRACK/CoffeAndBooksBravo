import "./Catalogo.css";
import Listado from "./listado/Listado.jsx";
import Categorias from "./categorias/Categorias.jsx";
export default function Catalogo(){
    return(

        <div className="catalogo">
            <Categorias />
            <Listado />
        </div>
    )
}