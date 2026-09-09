import "./categorias.css";

import imgLibrosLogo from "../../../assets/logoLibros.svg";
import imgTodosLogo from "../../../assets/logoTodos.svg";
import imgCafeLogo from "../../../assets/logoCafe.svg";

export default function Categorias({ categoriaActiva, setCategoriaActiva}) {
    return (
        <div className="categoria">

            {/* CAFÉS */}
            <div
                className={`categoria_div cafe ${
                    categoriaActiva === "cafe" ? "active" : ""
                }`}
                onClick={() => setCategoriaActiva("cafe")}
            >
                <img src={imgCafeLogo} alt="" />
                <p>Cafés</p>
            </div>

            {/* TODOS */}
            <div
                className={`categoria_div todos ${
                    categoriaActiva === "todos" ? "active" : ""
                }`}
                onClick={() => setCategoriaActiva("todos")}
            >
                <img src={imgTodosLogo} alt="" />
                <p>Todos</p>
            </div>

            {/* LIBROS */}
            <div
                className={`categoria_div libros ${
                    categoriaActiva === "libros" ? "active" : ""
                }`}
                onClick={() => setCategoriaActiva("libros")}
            >
                <img src={imgLibrosLogo} alt="" />
                <p>Libros</p>
            </div>

        </div>
    );
}