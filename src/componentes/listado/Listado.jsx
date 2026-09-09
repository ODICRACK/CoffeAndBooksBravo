import "./listado.css";

import Productos from "../productos/Productos.jsx";
import Filtros from "../filtros/Filtros.jsx";

import Deco1 from '../../assets/cat-deco-busqueda1.svg';
import Deco2 from '../../assets/cat-deco-busqueda2.svg';

import { useEffect, useState, useMemo } from "react";
import { useSearch } from "wouter";

import { obtenerTodosLosProductos } from "../../servicios/googleSheets.js";

export default function Listado({ busqueda = "", categoria = "", tipo = "", onProductoClick, categoriaActiva }) {
    const [productos, setProductos] = useState([]);
    const searchString = useSearch();

    useEffect(() => {
        obtenerTodosLosProductos()
            .then((productos) => setProductos(productos))
            .catch((error) => console.error("ERROR PRODUCTOS:", error));
    }, []);

    const obtenerNumeroId = (id) => Number(id.substring(1));
    const obtenerPrecio = (precio) => Number(precio.replace("$", "").replaceAll(",", ""));
    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // 1. Filtros Base
    const productosDisponibles = productos.filter((producto) => producto.disponible === "TRUE");

    const productosPorTipo = tipo === "" 
        ? productosDisponibles 
        : productosDisponibles.filter((producto) => normalizar(producto.productoTipo || "") === normalizar(tipo));

    const productosPorCategoria = categoria === ""
        ? productosPorTipo
        : productosPorTipo.filter((producto) => {
            const valorCategoria = normalizar(producto.productoTipo || "") === "cafe" ? producto.tipo : producto.genero;
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

    const productosMostradosBase = productosFiltrados.length > 0
        ? productosFiltrados
        : productosPorCategoriaFinal;

    // 2. Filtros Específicos de wouter
    const productosOrdenados = useMemo(() => {
        const params = new URLSearchParams(searchString);
        const ordenParam = Number(params.get("orden")) || 0;
        const precioParam = Number(params.get("precio")) || 0;
        
        const tiposCafeParam = params.get("tipoCafe") ? params.get("tipoCafe").split(",") : [];
        const intensidadParam = params.get("intensidad") ? params.get("intensidad").split(",") : ["suave", "intermedio", "intenso", "muy-intenso"];
        
        const generoParam = params.get("genero") || "";
        const formatoParam = params.get("formato") || "";

        let lista = productosMostradosBase.filter(producto => {
            if (precioParam === 3 && producto.oferta !== "TRUE") return false;

            const tipoProductoSheet = normalizar(producto.productoTipo || "");

            if (tipoProductoSheet === "cafe") {
                // TIPO: Convertimos "Café molido" -> "cafe molido" -> "molido"
                let tipoProd = normalizar(producto.tipo || "");
                tipoProd = tipoProd.replace("cafe", "").trim().replace(/\s+/g, "-");
                
                // INTENSIDAD: Convertimos números a las palabras clave de la URL
                const intRaw = String(producto.intensidad || "").trim();
                let intProd = "";
                if (intRaw === "1") intProd = "suave";
                else if (intRaw === "2") intProd = "intermedio";
                else if (intRaw === "3") intProd = "intenso";
                else if (intRaw === "4") intProd = "muy-intenso";
                else intProd = normalizar(intRaw).replace(/\s+/g, "-"); // Por si acaso algún día escribes "suave" en la planilla
                
                if (tiposCafeParam.length > 0 && !tiposCafeParam.includes(tipoProd)) return false;
                
                const todasIntensidades = ["suave", "intermedio", "intenso", "muy-intenso"];
                const filtroIntensidadActivo = intensidadParam.length < todasIntensidades.length;
                
                // Aplicamos el filtro usando la intensidad "traducida"
                if (filtroIntensidadActivo && !intensidadParam.includes(intProd)) return false;
            }

            if (tipoProductoSheet === "libro" || tipoProductoSheet === "libros") {
                const genProd = normalizar(producto.genero || "").replace(/\s+/g, "-");
                const formProd = normalizar(producto.formato || "").replace(/\s+/g, "-");

                if (generoParam && genProd !== generoParam) return false;
                if (formatoParam && formProd !== formatoParam) return false;
            }

            return true;
        });

        // Ordenar global
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

    // 3. Productos Relacionados
    const tipoRelacionado = productosMostradosBase[0]?.productoTipo || tipo;
    const productosRelacionados = tipoRelacionado === ""
        ? []
        : productosDisponibles.filter(
            (producto) => producto.productoTipo === tipoRelacionado && !productosMostradosBase.includes(producto)
        );

    return (
        <div className="listado">
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