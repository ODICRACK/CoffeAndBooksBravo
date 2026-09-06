import "./listado.css";

import Productos from "./productos/Productos.jsx";

import Filtros from "./filtros/Filtros.jsx";

import { useEffect, useState } from "react";

import {
    obtenerCafes,
    obtenerLibros,
    obtenerTodosLosProductos,
} from "../../../servicios/googleSheets.js";

export default function Listado() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {

    obtenerTodosLosProductos()
        .then((productos) => {
            setProductos(productos);
        })
        .catch((error) => {
            console.error("ERROR PRODUCTOS:", error);
        });
}, []);
    return(
        <div className="listado">
            <Filtros />
            <div className="listado_div">
                {productos.map((producto) => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </div>
    )
}