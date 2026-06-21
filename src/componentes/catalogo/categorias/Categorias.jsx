import "./categorias.css";
import imgLibrosLogo from "../../../assets/logoLibros.svg";
import imgTodosLogo from "../../../assets/logoTodos.svg";
import imgCafeLogo from "../../../assets/logoCafe.svg";
export default function Catalogo(){
    return(
        <div className="categoria">
            <div className="categoria_div activo">
                <img src={imgCafeLogo} alt="" />
                <p>Cafés</p>
            </div>
            <div className="categoria_div">
                <img src={imgTodosLogo} alt="" />
                <p>Todos</p>
            </div>
            <div className="categoria_div">
                <img src={imgLibrosLogo} alt="" />
                <p>Libros</p>
            </div>
        </div>
    )
}