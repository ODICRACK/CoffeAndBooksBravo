import "./listado.css";

import Productos from "../productos/Productos.jsx";
import Filtros from "../filtros/Filtros.jsx";

import Deco1 from '../../assets/cat-deco-busqueda1.svg';
import Deco2 from '../../assets/cat-deco-busqueda2.svg';

import { useEffect, useState, useMemo } from "react";
import { useSearch } from "wouter"; // Importación de Wouter

import { obtenerTodosLosProductos } from "../../servicios/googleSheets.js";

export default function Listado({ busqueda = "", categoria = "", tipo = "", onProductoClick, categoriaActiva }) {
    const [productos, setProductos] = useState([]);
    
    // 1. Obtenemos los query params de la URL
    const searchString = useSearch();

    useEffect(() => {
        obtenerTodosLosProductos()
            .then((productos) => setProductos(productos))
            .catch((error) => console.error("ERROR PRODUCTOS:", error));
    }, []);

    const obtenerNumeroId = (id) => Number(id.substring(1));
    const obtenerPrecio = (precio) => Number(precio.replace("$", "").replaceAll(",", ""));
    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // 2. Filtros Base (Disponibilidad, Tipo, Categoría, Búsqueda)
    const productosDisponibles = productos.filter((producto) => producto.disponible === "TRUE");

    const productosPorTipo = tipo === "" 
        ? productosDisponibles 
        : productosDisponibles.filter((producto) => producto.productoTipo === tipo);

    const productosPorCategoria = categoria === ""
        ? productosPorTipo
        : productosPorTipo.filter((producto) => {
            const valorCategoria = producto.productoTipo === "cafe" ? producto.tipo : producto.genero;
            return normalizar(valorCategoria || "") === normalizar(categoria);
        });

    const productosPorCategoriaFinal = categoria !== "" && productosPorCategoria.length === 0 
        ? productosPorTipo 
        : productosPorCategoria;

    const textoBusqueda = normalizar(busqueda.trim());

    const productosFiltrados = textoBusqueda === ""
        ? []
        : productosPorTipo.filter((producto) => {
            const nombre = normalizar(producto.nombre || "");
            const autor = normalizar(producto.autor || "");
            const genero = normalizar(producto.genero || "");
            const marca = normalizar(producto.marca || "");
            const tipoProd = normalizar(producto.tipo || "");

            return (
                nombre.includes(textoBusqueda) ||
                autor.includes(textoBusqueda) ||
                genero.includes(textoBusqueda) ||
                marca.includes(textoBusqueda) ||
                tipoProd.includes(textoBusqueda)
            );
        });

    // 3. Unificar la base de productos que se van a mostrar antes de ordenar
    const productosMostradosBase = productosFiltrados.length > 0
        ? productosFiltrados
        : productosPorCategoriaFinal;

    // 4. Aplicar Filtros y Orden de la URL usando useMemo para optimizar
    const productosOrdenados = useMemo(() => {
        const params = new URLSearchParams(searchString);
        const ordenParam = Number(params.get("orden")) || 0; // num1
        const precioParam = Number(params.get("precio")) || 0; // num2

        let lista = [...productosMostradosBase];

        // Filtrar Ofertas
        if (precioParam === 3) {
            lista = lista.filter(producto => producto.oferta === "TRUE");
        }

        // Ordenar
        lista.sort((a, b) => {
            if (precioParam === 1) return obtenerPrecio(b.precio) - obtenerPrecio(a.precio);
            if (precioParam === 2) return obtenerPrecio(a.precio) - obtenerPrecio(b.precio);

            switch (ordenParam) {
                case 1: return Number(b.vendidos) - Number(a.vendidos);
                case 2: return Number(a.vendidos) - Number(b.vendidos);
                case 3: return obtenerNumeroId(b.id) - obtenerNumeroId(a.id);
                case 4: return obtenerNumeroId(a.id) - obtenerNumeroId(b.id);
                default: return 0;
            }
        });

        return lista;
    }, [productosMostradosBase, searchString]);

    // 5. Productos Relacionados
    const tipoRelacionado = productosMostradosBase[0]?.productoTipo || tipo;
    const productosRelacionados = tipoRelacionado === ""
        ? []
        : productosDisponibles.filter(
            (producto) => producto.productoTipo === tipoRelacionado && !productosMostradosBase.includes(producto)
        );

    return (
        <div className="listado">
            {/* Ya no pasamos iniciarFiltrado, Filtros debe modificar la URL directamente */}
            <Filtros categoriaActiva={categoriaActiva} />

            <div className="listado_texto">
                {textoBusqueda !== "" && productosFiltrados.length === 0 && (
                    <p>No encontramos productos relacionados con "{textoBusqueda}".</p>
                )}
                {categoria !== "" && productosPorCategoria.length === 0 && (
                    <p>No encontramos productos relacionados con "{categoria}".</p>
                )}
                {textoBusqueda !== "" && productosFiltrados.length > 0 && (
                    <p>Resultados de la búsqueda "{textoBusqueda}"</p>
                )}
                {categoria !== "" && productosPorCategoria.length > 0 && (
                    <p>Resultados de la búsqueda "{categoria}"</p>
                )}
            </div>

            <div className="listado_div">
                {/* Ahora mapeamos SIEMPRE la lista unificada y ordenada */}
                {productosOrdenados.map((producto) => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                        onProductoClick={onProductoClick}
                    />
                ))}
            </div>

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