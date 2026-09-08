import { useEffect, useState } from "react";

import "./Catalogo.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Listado from "./listado/Listado.jsx";
import Categorias from "./categorias/Categorias.jsx";
import ProductoEsp from "./producto-esp/Producto-esp.jsx";

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState("");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const abrirProducto = (producto) => {
        setProductoSeleccionado(producto);
    };
    const cerrarProducto = () => {
        setProductoSeleccionado(null);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categoria = new URLSearchParams(window.location.search).get("categoria") || "";

    const tipo = new URLSearchParams(window.location.search).get("tipo") || "";


    return (
        <div className={`catalogo ${productoSeleccionado ? "modal-abierto" : ""}`}>
            <Header onBuscar={setBusqueda} />
            <Categorias />
            <Listado
                busqueda={busqueda}
                categoria={categoria}
                tipo={tipo}
                onProductoClick={abrirProducto}
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