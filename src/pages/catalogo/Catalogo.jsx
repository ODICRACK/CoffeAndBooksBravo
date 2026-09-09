import { useState } from "react";

import "./Catalogo.css";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import Listado from "../../componentes/listado/Listado.jsx";
import Categorias from "../../componentes/categorias/Categorias.jsx";
import ProductoEsp from "../../componentes/modales/producto-esp/Producto-esp.jsx";

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState(() => new URLSearchParams(window.location.search).get("busqueda") || "");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [categoriaActiva, setCategoriaActiva] = useState(new URLSearchParams(window.location.search).get("tipo") || "");


    const abrirProducto = (producto) => {
        setProductoSeleccionado(producto);
    };
    const cerrarProducto = () => {
        setProductoSeleccionado(null);
    };

    const cambioURL=(cate)=>{
        setCategoriaActiva(cate)
    }

    const categoria = new URLSearchParams(window.location.search).get("categoria") || "";
    const tipoParam = new URLSearchParams(window.location.search).get("tipo");
    const tipo = tipoParam === "todos" ? "" : tipoParam || "";


    return (
        <div className={`catalogo ${productoSeleccionado ? "modal-abierto" : ""}`}>
            <Header onBuscar={setBusqueda} />
            <Categorias
                nueva= {cambioURL}
            />
            <Listado
                busqueda={busqueda}
                categoria={categoria}
                tipo={tipo}
                onProductoClick={abrirProducto}
                categoriaActiva={categoriaActiva}
            />
            <div
                className="overlay"
                onClick={cerrarProducto}
            ></div>
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