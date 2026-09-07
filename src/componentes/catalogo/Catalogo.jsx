import { useEffect, useState } from "react";

import "./Catalogo.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Listado from "./listado/Listado.jsx";
import Categorias from "./categorias/Categorias.jsx";
import ProductoEsp from "./producto-esp/Producto-esp.jsx";

export default function Catalogo() {

    const [busqueda, setBusqueda] = useState(
        new URLSearchParams(window.location.search).get("busqueda") || ""
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categoria =
        new URLSearchParams(window.location.search).get("categoria") || "";

    const tipo =
        new URLSearchParams(window.location.search).get("tipo") || "";

    return (
        <div className="catalogo">
            <Header onBuscar={setBusqueda} />

            <Categorias />

            <Listado
                busqueda={busqueda}
                categoria={categoria}
                tipo={tipo}
            />

            <div className="overlay"></div>

            <div className="producto-especifico">
                <ProductoEsp />
            </div>

            <Footer />
        </div>
    );
}