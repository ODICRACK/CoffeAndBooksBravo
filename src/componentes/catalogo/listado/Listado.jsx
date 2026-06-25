import "./listado.css";
import Productos from "./productos/Productos.jsx";
import Filtros from "./filtros/Filtros.jsx";
export default function Listado(){
    return(
        <div className="listado">
            <Filtros />
            <div className="listado_div">
                {Array(10).fill().map((_, i) => (
                    <Productos key={i} />
                ))}
            </div>
        </div>
        
    )
}