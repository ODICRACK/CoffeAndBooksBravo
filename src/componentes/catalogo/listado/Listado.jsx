import "./listado.css";

import Productos from "./productos/Productos.jsx";
import Filtros from "./filtros/Filtros.jsx";

import { useEffect, useState } from "react";

import {
    obtenerTodosLosProductos,
} from "../../../servicios/googleSheets.js";


export default function Listado({
    busqueda = "",
    categoria = ""
}) {

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


    // =========================
    // PRODUCTOS DISPONIBLES
    // =========================

    const productosDisponibles = productos.filter(
        (producto) => producto.disponible === "TRUE"
    );


    // =========================
    // FILTRO POR CATEGORÍA
    // =========================

    const productosPorCategoria =
        productosDisponibles.filter(
            (producto) => {

                // Si no hay categoría,
                // dejamos pasar todos
                if (categoria === "") {
                    return true;
                }


                // Si es café,
                // comparamos con "tipo"
                if (producto.productoTipo === "cafe") {
                    return producto.tipo === categoria;
                }


                // Si es libro,
                // comparamos con "genero"
                if (producto.productoTipo === "libro") {
                    return producto.genero === categoria;
                }


                return false;
            }
        );


    // =========================
    // BÚSQUEDA
    // =========================

    const textoBusqueda =
        busqueda.trim().toLowerCase();


    const productosFiltrados =
        textoBusqueda === ""
            ? productosPorCategoria
            : productosPorCategoria.filter(
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


    // =========================
    // MOSTRAR PRODUCTOS
    // =========================

    const productosAMostrar =
        productosFiltrados;


    return (
        <div className="listado">

            <Filtros />

            <div className="listado_textoError">

                {textoBusqueda !== "" &&
                    productosFiltrados.length === 0 && (

                        <p>
                            No encontramos productos relacionados con "{textoBusqueda}".
                        </p>

                    )}

            </div>


            <div className="listado_div">

                {productosAMostrar.map(
                    (producto) => (

                        <Productos
                            key={producto.id}
                            producto={producto}
                        />

                    )
                )}

            </div>

        </div>
    );
}