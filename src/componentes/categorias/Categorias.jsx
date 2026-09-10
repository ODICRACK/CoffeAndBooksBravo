import "./categorias.css";
import imgLibrosLogo from "../../assets/logoLibros.svg";
import imgTodosLogo from "../../assets/logoTodos.svg";
import imgCafeLogo from "../../assets/logoCafe.svg";
import { useState } from "react";

export default function Categorias({nueva}) {
    const [tipoActivo, setTipoActivo] = useState(new URLSearchParams(window.location.search).get("tipo") || "");

    const cambiarCategoria = (categoria) => {
        setTipoActivo(categoria);
        nueva(categoria)
        window.history.pushState({}, "", `/catalogo?tipo=${categoria}`);
    };



    return (
        <div className="categoria">

            {/* CAFÉS */}
            <div className={`categoria_div cafe ${tipoActivo === "cafe" ? "active" : ""}`} onClick={() => cambiarCategoria("cafe")}>
                <img src={imgCafeLogo} alt="" />
                <p>Cafés</p>
            </div>

            {/* TODOS */}
            <div className={`categoria_div todos ${tipoActivo === "todos" ? "active" : ""}`} onClick={() => cambiarCategoria("todos")}>
                <img src={imgTodosLogo} alt="" />
                <p>Todos</p>
            </div>

            {/* LIBROS */}
            <div className={`categoria_div libros ${tipoActivo === "libro" ? "active" : ""}`} onClick={() => cambiarCategoria("libro")}>
                <img src={imgLibrosLogo} alt="" />
                <p>Libros</p>
            </div>

        </div>
    );
}