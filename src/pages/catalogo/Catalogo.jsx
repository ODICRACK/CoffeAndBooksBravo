import { useState } from "react";
import { useSearch, useLocation } from "wouter"; // Agregamos useLocation

import "./Catalogo.css";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import Listado from "../../componentes/listado/Listado.jsx";
import Categorias from "../../componentes/categorias/Categorias.jsx";
import ProductoEsp from "../../componentes/modales/producto-esp/Producto-esp.jsx";

export default function Catalogo() {
    const [location, setLocation] = useLocation();
    const searchString = useSearch();
    
    // 1. Leemos los parámetros directamente de wouter sin guardarlos en useState
    const params = new URLSearchParams(searchString);
    const busqueda = params.get("busqueda") || "";
    const categoriaActiva = params.get("tipo") || "";
    
    const categoria = params.get("categoria") || "";
    const tipoParam = params.get("tipo");
    const tipo = tipoParam === "todos" ? "" : (tipoParam || "");

    // El único estado local es el del modal, porque no depende de la URL
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const abrirProducto = (producto) => setProductoSeleccionado(producto);
    const cerrarProducto = () => setProductoSeleccionado(null);

    // 2. En lugar de actualizar un estado local, actualizamos la URL directamente
    const handleBuscar = (texto) => {
        const nuevosParams = new URLSearchParams(window.location.search);
        if (texto) {
            nuevosParams.set("busqueda", texto);
        } else {
            nuevosParams.delete("busqueda");
        }
        setLocation(`${location}?${nuevosParams.toString()}`);
    };

    const cambioURL = (cate) => {
        const nuevosParams = new URLSearchParams(window.location.search);
        if (cate && cate !== "todos") {
            nuevosParams.set("tipo", cate);
        } else {
            nuevosParams.delete("tipo");
        }
        setLocation(`${location}?${nuevosParams.toString()}`);
    };

    return (
        <div className={`catalogo ${productoSeleccionado ? "modal-abierto" : ""}`}>
            <Header onBuscar={handleBuscar} />
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