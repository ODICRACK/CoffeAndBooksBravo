import { useState, useEffect } from "react";
import { useSearch } from "wouter"; // IMPORTANTE: Agregamos useSearch

import "./Catalogo.css";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import Listado from "../../componentes/listado/Listado.jsx";
import Categorias from "../../componentes/categorias/Categorias.jsx";
import ProductoEsp from "../../componentes/modales/producto-esp/Producto-esp.jsx";

export default function Catalogo() {
    // Escuchamos la URL de forma reactiva con wouter
    const searchString = useSearch();
    const params = new URLSearchParams(searchString);

    // Inicializamos los estados desde los parámetros reactivos
    const [busqueda, setBusqueda] = useState(params.get("busqueda") || "");
    const [categoriaActiva, setCategoriaActiva] = useState(params.get("tipo") || "");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    // Sincronizamos los estados locales si la URL cambia desde otro componente (ej: Filtros o Categorias)
    useEffect(() => {
        setBusqueda(params.get("busqueda") || "");
        setCategoriaActiva(params.get("tipo") || "");
    }, [searchString]);

    const abrirProducto = (producto) => setProductoSeleccionado(producto);
    const cerrarProducto = () => setProductoSeleccionado(null);

    const cambioURL = (cate) => {
        setCategoriaActiva(cate);
    }

    // Leemos los valores actualizados directamente de los params de wouter
    const categoria = params.get("categoria") || "";
    const tipoParam = params.get("tipo");
    const tipo = tipoParam === "todos" ? "" : (tipoParam || "");

    return (
        <div className={`catalogo ${productoSeleccionado ? "modal-abierto" : ""}`}>
            <Header onBuscar={setBusqueda} />
            <Categorias nueva={cambioURL} />
            <Listado
                busqueda={busqueda}
                categoria={categoria}
                tipo={tipo}
                onProductoClick={abrirProducto}
                categoriaActiva={categoriaActiva}
            />
            <div className="overlay" onClick={cerrarProducto}></div>
            <div className="producto-especifico">
                {productoSeleccionado && (
                    <ProductoEsp
                        producto={productoSeleccionado}
                        onCerrar={cerrarProducto}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
}