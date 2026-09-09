import "./listado.css";

import Productos from "./productos/Productos.jsx";
import Filtros from "./filtros/Filtros.jsx";

import Deco1 from '../../../assets/cat-deco-busqueda1.svg';
import Deco2 from '../../../assets/cat-deco-busqueda2.svg';

import { useEffect, useState, useRef } from "react";

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

    // PAGINACIÓN
    const [cantidadMostrada, setCantidadMostrada] = useState(15);
    const [mostrandoCarga, setMostrandoCarga] = useState(false);

    const cargandoMas = useRef(false);


    // OBTENER PRODUCTOS
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


    // REINICIAR PAGINACIÓN CUANDO CAMBIA LA BÚSQUEDA, CATEGORÍA O TIPO
    useEffect(() => {
        setCantidadMostrada(15);
        setMostrandoCarga(false);
        cargandoMas.current = false;
    }, [busqueda, categoria, tipo]);


    const productosDisponibles = productos.filter(
        (producto) => producto.disponible === "TRUE"
    );


    const productosPorTipo =
        tipo === ""
            ? productosDisponibles
            : productosDisponibles.filter(
                (producto) => producto.productoTipo === tipo
            );


    // PARA LAS TILDES
    const normalizar = (texto) =>
        texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();


    const productosPorCategoria =
        categoria === ""
            ? productosPorTipo
            : productosPorTipo.filter((producto) => {

                const valorCategoria =
                    producto.productoTipo === "cafe"
                        ? producto.tipo
                        : producto.genero;

                return (
                    normalizar(valorCategoria || "") ===
                    normalizar(categoria)
                );
            });


    const productosPorCategoriaFinal =
        categoria !== "" &&
            productosPorCategoria.length === 0
            ? productosPorTipo
            : productosPorCategoria;


    const textoBusqueda =
        normalizar(busqueda.trim());


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


    // LO QUE SE MUESTRA ARRIBA
    const productosMostrados =
        productosFiltrados.length > 0
            ? productosFiltrados
            : productosPorCategoriaFinal;


    // TIPO DE PRODUCTO PARA LOS RELACIONADOS
    const tipoRelacionado =
        productosMostrados[0]?.productoTipo || tipo;


    // PRODUCTOS RELACIONADOS
    const productosRelacionados =
        tipoRelacionado === ""
            ? []
            : productosDisponibles.filter(
                (producto) =>
                    producto.productoTipo === tipoRelacionado &&
                    !productosMostrados.includes(producto)
            );


    // PRODUCTOS PRINCIPALES
    const productosPrincipales =
        productosFiltrados.length > 0
            ? productosFiltrados
            : productosPorCategoriaFinal;


    // PRODUCTOS VISIBLES SEGÚN LA PAGINACIÓN
    const productosVisibles =
        productosPrincipales.slice(
            0,
            cantidadMostrada
        );


    // DETECTAR CUANDO EL USUARIO LLEGA AL FINAL
    useEffect(() => {

        const cargarMas = () => {

            const llegoAlFinal =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 200;


            if (
                llegoAlFinal &&
                !cargandoMas.current &&
                cantidadMostrada < productosPrincipales.length
            ) {

                cargandoMas.current = true;

                setMostrandoCarga(true);


                setTimeout(() => {

                    setCantidadMostrada(
                        (cantidad) => cantidad + 20
                    );

                    setMostrandoCarga(false);

                    cargandoMas.current = false;

                }, 700);
            }
        };


        window.addEventListener(
            "scroll",
            cargarMas
        );


        return () => {
            window.removeEventListener(
                "scroll",
                cargarMas
            );
        };

    }, [
        cantidadMostrada,
        productosPrincipales.length
    ]);


    return (
        <div className="listado">

            <Filtros
                categoriaActiva={categoriaActiva}
            />

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

                {productosVisibles.map((producto) => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                        onProductoClick={onProductoClick}
                    />
                ))}

            </div>


            {/* CARGANDO MÁS PRODUCTOS */}
            {mostrandoCarga && (
                <div className="listado_cargando">
                    <p>
                        Cargando más productos...
                    </p>
                </div>
            )}


            {/* RELACIONADOS */}
            {productosRelacionados.length > 0 && (
                <div className="listado_div-relacionados">

                    <div className="listado_div-relacionados--deco">

                        <img
                            src={Deco1}
                            alt="linea decorativa"
                        />

                        <p>
                            RELACIONADOS
                        </p>

                        <img
                            src={Deco2}
                            alt="linea decorativa"
                        />

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