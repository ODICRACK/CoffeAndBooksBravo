import "./listado.css";

import Productos from "./productos/Productos.jsx";
import Filtros from "./filtros/Filtros.jsx";

import Deco1 from '../../../assets/cat-deco-busqueda1.svg';
import Deco2 from '../../../assets/cat-deco-busqueda2.svg';

import { useEffect, useState } from "react";

import {
    obtenerTodosLosProductos,
} from "../../../servicios/googleSheets.js";


export default function Listado({
    busqueda = "",
    categoria = "",
    tipo = "",
    onProductoClick,
    categoriaActiva
}) {
    

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerTodosLosProductos()
            .then((productos) => {
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


    const productosPorTipo = tipo === "" ? productosDisponibles : productosDisponibles.filter((producto) => producto.productoTipo === tipo);


    //PARA LAS TILDES
    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const productosPorCategoria =
        categoria === ""
            ? productosPorTipo
            : productosPorTipo.filter((producto) => {
                const valorCategoria =
                    producto.productoTipo === "cafe"
                        ? producto.tipo
                        : producto.genero;

                return normalizar(valorCategoria || "") === normalizar(categoria);
            });

    const textoBusqueda = normalizar(busqueda.trim());

    const productosFiltrados =
        textoBusqueda === ""
            ? []
            : productosPorTipo.filter(
                (producto) => {
                    const nombre =
                        normalizar(producto.nombre || "");

                    const autor =
                        normalizar(producto.autor || "");

                    const genero =
                        normalizar(producto.genero || "");

                    const marca =
                        normalizar(producto.marca || "");

                    const tipo =
                        normalizar(producto.tipo || "");

                    return (
                        nombre.includes(textoBusqueda) ||
                        autor.includes(textoBusqueda) ||
                        genero.includes(textoBusqueda) ||
                        marca.includes(textoBusqueda) ||
                        tipo.includes(textoBusqueda)
                    );
                }
            );


    const tipoBuscado =
        normalizar(productosFiltrados[0]?.tipo || "");

    const productosRelacionados =
        productosPorTipo.filter(
            (producto) =>
                normalizar(producto.tipo || "") === tipoBuscado &&
                !productosFiltrados.includes(producto)
        );



    return (
        <div className="listado">
            <Filtros categoriaActiva={categoriaActiva} />

            {/* SIN COINCIDENCIAS */}
            <div className="listado_texto">
                {textoBusqueda !== "" &&
                    productosFiltrados.length === 0 && (
                        <p>
                            No encontramos productos relacionados con "{textoBusqueda}".
                        </p>
                    )}

                {categoria !== "" &&
                    productosPorCategoria.length === 0 && (
                        <p>
                            No encontramos productos relacionados con "{categoria}".
                        </p>
                    )}
            </div>

            {/* CON COINCIDENCIAS */}
            <div className="listado_texto">
                {textoBusqueda !== "" &&
                    productosFiltrados.length > 0 && (
                        <p>
                            Resultados de la búsqueda "{textoBusqueda}"
                        </p>
                    )}

                {categoria !== "" &&
                    productosPorCategoria.length > 0 && (
                        <p>
                            Resultados de la búsqueda "{categoria}"
                        </p>
                    )}
            </div>

            {/* PRODUCTOS */}
            <div className="listado_div">

                {/* Si hay coincidencias, muestra las coincidencias */}
                {productosFiltrados.length > 0
                    ? productosFiltrados.map((producto) => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            onProductoClick={onProductoClick}
                        />
                    ))

                    /* Si NO hay coincidencias, muestra TODOS */
                    : productosPorCategoria.map((producto) => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            onProductoClick={onProductoClick}
                        />
                    ))
                }

            </div>

            {/* RELACIONADOS */}
            {productosFiltrados.length > 0 && productosRelacionados.length > 0 && (
                <div className="listado_div-relacionados">

                    <div className="listado_div-relacionados--deco">
                        <img src={Deco1} alt="linea decorativa" />
                        <p>RELACIONADOS</p>
                        <img src={Deco2} alt="linea decorativa" />
                    </div>

                    <div className="listado_div-relacionados--list">
                        {productosRelacionados.map((producto) => (
                            <Productos
                                key={producto.id}
                                producto={producto}
                                onProductoClick={onProductoClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}