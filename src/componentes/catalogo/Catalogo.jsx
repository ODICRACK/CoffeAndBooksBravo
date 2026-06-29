import "./Catalogo.css";
import Listado from "./listado/Listado.jsx";
import Categorias from "./categorias/Categorias.jsx";
import ProductoEsp from "./producto-esp/Producto-esp.jsx";
export default function Catalogo(){
    return(

        <div className="catalogo">

            <Categorias />
            <Listado />

            <div className="overlay"></div>

            <div className="producto-especifico">
                <ProductoEsp />
            </div>

        </div>
    )

}