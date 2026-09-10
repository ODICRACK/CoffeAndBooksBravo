import { useState } from "react"
import { Link, useLocation } from "wouter";
import Style from "./SearchMovile.module.css"
import { obtenerProductosRelacionados } from "../../../servicios/googleSheets.js";

import lineaSearch from "../../../assets/lineaSearch.svg"
import cafe from "../../../assets/cafe.svg"
import libro from "../../../assets/libro.svg"
//import cafeLibro from "../../assets/libroCafe.svg"

export default function SearchMovile({ mostrar, onBuscar, volver }) {
    const [busqueda, setBusqueda] = useState("");
    const [productosRelacionados, setProductosRelacionados] = useState([]);
    const [, setLocation] = useLocation();

    const buscar = (e) => {
        if (e.key === "Enter") {
            const texto = busqueda.trim();

            if (texto === "") {
                return;
            }

            onBuscar?.(texto);

            const tipo =
                new URLSearchParams(window.location.search).get("tipo");
                setLocation(`/catalogo?tipo=${tipo || ""}&busqueda=${encodeURIComponent(texto)}`
            );
            volver()
        }
    };
    const buscarProductos = async (texto) => {

    setBusqueda(texto);

    if (texto.trim() === "") {
        setProductosRelacionados([]);
        return;
    }

    const productos = await obtenerProductosRelacionados(texto);

    setProductosRelacionados(productos);
};

    return (
        <div className={`${Style["hola"]} ${mostrar ? "" : `${Style["none"]}`}`}>
            <header className={Style.Header2}>

                <div className={Style["Header__div"]}>

                    <div
                        className={`${Style["Header__div-div-nav-iconos"]} ${Style["responsive"]}`}>
                        <Link className={Style["Icono"]} onClick={volver}>
                            <span className="material-symbols-outlined">
                                arrow_back_ios_new
                            </span>
                        </Link>

                        <div className={`${Style["Icono"]} ${Style["search"]}`}>

                            <span className="material-symbols-outlined">
                                search
                            </span>

                            <input
                                type="text"
                                className={Style.Input}
                                value={busqueda}
                                onChange={(e) =>
                                    buscarProductos(e.target.value)
                                }
                                onKeyDown={buscar}
                            />
                        </div>
                    </div>
                </div>

            </header>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                {productosRelacionados.map((producto) => (
                    <div key={`${producto.productoTipo}-${producto.id}`}>
                        <img 
                            src={producto.productoTipo === "libro" ? libro : cafe} 
                            alt={producto.nombre} 
                        />
                        <h2>{producto.nombre}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}