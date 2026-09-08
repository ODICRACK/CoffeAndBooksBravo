import { useState } from "react";
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

    return (
        <div className={`catalogo ${productoSeleccionado ? "modal-abierto" : ""}`}>
            <Header onBuscar={setBusqueda} />
            <Categorias />
            <Listado
                busqueda={busqueda}
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