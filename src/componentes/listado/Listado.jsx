import "./listado.css";

import Productos from "../productos/Productos.jsx";
import Filtros from "../filtros/Filtros.jsx";

import Deco1 from '../../assets/cat-deco-busqueda1.svg';
import Deco2 from '../../assets/cat-deco-busqueda2.svg';

import { useEffect, useState } from "react";

import { obtenerTodosLosProductos } from "../../servicios/googleSheets.js";


export default function Listado({ busqueda = "", categoria = "", tipo = "", onProductoClick, categoriaActiva }) {
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
    const obtenerNumeroId = (id) => {
        return Number(id.substring(1));
    };

    const obtenerPrecio = (precio) => {
        return Number(precio.replace("$", "").replaceAll(",", ""));
    };

    const actualizarFiltro = (num1, num2) => {

        console.log("hola iniciamos el filtrado");
        console.log(`num1:${num1} yyyy num2:${num2}`);
        console.log(productos);

        setProductos([...productos]
            .filter((producto) => {
                switch (num2) {

                    case 3:
                        return producto.oferta === "TRUE";

                    case 0:
                    default:
                        return true;
                }
            })
            .sort((a, b) => {

                // num2: precio
                if (num2 === 1) { // Mayor a menor
                    return obtenerPrecio(b.precio) - obtenerPrecio(a.precio);
                }

                if (num2 === 2) { // Menor a mayor
                    return obtenerPrecio(a.precio) - obtenerPrecio(b.precio);
                }

                // num1: orden
                switch (num1) {

                    case 1: // Más vendidos
                        return Number(b.vendidos) - Number(a.vendidos);

                    case 2: // Menos vendidos
                        return Number(a.vendidos) - Number(b.vendidos);

                    case 3: // Más recientes
                        return obtenerNumeroId(b.id) - obtenerNumeroId(a.id);

                    case 4: // Menos recientes
                        return obtenerNumeroId(a.id) - obtenerNumeroId(b.id);

                    case 0: // Relevancia
                    default:
                        return 0;
                }
            })
        );
    };

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

    const productosPorCategoriaFinal = categoria !== "" && productosPorCategoria.length === 0 ? productosPorTipo : productosPorCategoria;

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



    // TIPO DE PRODUCTO PARA LOS RELACIONADOS
    // LO QUE SE MUESTRA ARRIBA (búsqueda, o fallback por categoría)
    const productosMostrados =
        productosFiltrados.length > 0
            ? productosFiltrados
            : productosPorCategoriaFinal;

    // TIPO DE PRODUCTO PARA LOS RELACIONADOS
    const tipoRelacionado = productosMostrados[0]?.productoTipo || tipo;

    // PRODUCTOS RELACIONADOS
    const productosRelacionados =
        tipoRelacionado === ""
            ? []
            : productosDisponibles.filter(
                (producto) =>
                    producto.productoTipo === tipoRelacionado &&
                    !productosMostrados.includes(producto)
            );


    return (
        <div className="listado">
            <Filtros categoriaActiva={categoriaActiva} iniciarFiltrado={actualizarFiltro} />

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
                    : productosPorCategoriaFinal.map((producto) => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            onProductoClick={onProductoClick}
                        />
                    ))
                }

            </div>

            {/* RELACIONADOS */}
            {productosRelacionados.length > 0 && (
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