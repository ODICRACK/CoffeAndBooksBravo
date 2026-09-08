import "./listado.css";

import Productos from "./productos/Productos.jsx";
import Filtros from "./filtros/Filtros.jsx";

import { useEffect, useState } from "react";

import {
    obtenerTodosLosProductos,
} from "../../../servicios/googleSheets.js";


export default function Listado({ busqueda = "", onProductoClick }) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerTodosLosProductos()
            .then((productos) => {
                console.log(
                    "PRODUCTOS RECIBIDOS:",
                    productos
                );
                setProductos(productos);
            })

            .catch((error) => {
                console.error(
                    "ERROR PRODUCTOS:",
                    error
                );
            });
    }, []);

    const productosDisponibles = productos.filter(
        (producto) => producto.disponible === "TRUE"
    );

    const textoBusqueda = busqueda.trim().toLowerCase();

    const productosFiltrados =
        textoBusqueda === ""
            ? []
            : productosDisponibles.filter(
                (producto) => {
                    const nombre =
                        producto.nombre
                            ?.toLowerCase() || "";
                    const autor =
                        producto.autor
                            ?.toLowerCase() || "";
                    return (
                        nombre.includes(textoBusqueda) ||
                        autor.includes(textoBusqueda)
                    );
                }
            );

    const productosAMostrar = [
        ...productosFiltrados,
        ...productosDisponibles.filter(
            (producto) =>
                !productosFiltrados.includes(producto)
        )
    ];


    return (
        <div className="listado">
            <Filtros />

            <div className="listado_textoError">
                {textoBusqueda !== "" &&
                    productosFiltrados.length === 0 && (
                        <p>No encontramos productos relacionados con "{textoBusqueda}".</p>
                    )}
            </div>

            <div className="listado_div">
                {productosAMostrar.map(
                    (producto) => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            onProductoClick={onProductoClick}
                        />
                    )
                )}
            </div>
        </div>
    );
}