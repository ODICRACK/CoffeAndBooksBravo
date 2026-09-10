import Style from "./Header.module.css";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

import logoHeader from "../../assets/logoHeader.svg";
import bandera from "../../assets/banner.svg";
import Carrito from "../modales/Carrito/Carrito";
import SearchMovile from "../modales/SearchMovile/SearchMovile";
export default function Header({ onBuscar }) {

    const [busqueda, setBusqueda] = useState("");
    const [location, setLocation] = useLocation();
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    const [cerrandoCarrito, setCerrandoCarrito] = useState(false);
    const [activo, setActivo] = useState(false);
    const [activoR, setActivoR] = useState(false);
    const [pantallaChica, setPantallaChica] = useState(window.innerWidth < 768);

    useEffect(() => {

        const verificarPantalla = () => {
            const esChica = window.innerWidth < 768;

            setPantallaChica(esChica);

            if (esChica) {
                setActivo(false);
                setActivoR(false)
            }
        };

        verificarPantalla();

        window.addEventListener("resize", verificarPantalla);

        return () => {
            window.removeEventListener("resize", verificarPantalla);
        };

    }, []);

    const volver = () => {
        console.log("aca estytoy")
        setActivoR(false)
    }
    const search = () => {

        if (pantallaChica == false) {
            setActivo(true)
        }
        else {
            setActivo(false)
            setActivoR(true)
        }
    }
    const cambiarBandera = () => {
        if (location == "/catalogo") {
            console.log("aca")
            return (0)
        }
        if (location == "/") {
            console.log("acano")
            return (16)
        }
    }
    const cerrarCarrito = () => {
        setCerrandoCarrito(true);

        setTimeout(() => {
            setCarritoAbierto(false);
            setCerrandoCarrito(false);
        }, 400);
    };

    const mover = (donde) => {
        window.scrollTo(0, 0)
        setLocation(`/${donde}`);
    }
    const buscar = (e) => {
        if (e.key === "Enter") {
            const texto = busqueda.trim();

            if (texto === "") {
                return;
            }

            onBuscar?.(texto);

            const tipo =
                new URLSearchParams(window.location.search).get("tipo");

            setLocation(
                `/catalogo?tipo=${tipo || ""}&busqueda=${encodeURIComponent(texto)}`
            );
        }
    };
    const abrirWhatsApp = () => {
        const numeroWhatsApp = "5492901534508";

        const mensaje = "Hola! Quería hacer una consulta sobre los productos de  *𝐂𝐨𝐟𝐟𝐞𝐞 & 𝐁𝐨𝐨𝐤𝐬*";

        const mensajeCodificado = encodeURIComponent(mensaje);

        const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        window.open(url, "_blank");
    };
    if (activoR) {
        return (
            <SearchMovile
                mostrar={setActivoR}
                onBuscar={onBuscar}
                volver={volver}
            />
        );
    }
    else{
        return (
        <>
            <header className={Style.Header}>

                <div className={Style["Header__div"]}>

                    <div className={Style["Header__div-div"]}>

                        <div className={Style["Header__div-div-logo"]} onClick={() => mover("")}>
                            <img
                                src={logoHeader}
                                alt=""
                            />
                            <h1>
                                Coffee & Books
                            </h1>
                        </div>


                        <div className={Style["Header__div-div-nav"]}>

                            <div className={Style["Header__div-div-nav-nav"]}>

                                <h2 className={Style.hache}>
                                    <Link
                                        className={Style.Link}
                                        onClick={() => mover("catalogo?tipo=todos")}
                                    >
                                        Catalogo
                                    </Link>
                                </h2>

                                <h2 className={Style.hache}>
                                    <a
                                        className={Style.Link}
                                        href="/#info"
                                    >
                                        Sobre mi
                                    </a>
                                </h2>

                                <h2 className={Style.hache}>
                                    <Link
                                        className={Style.Link}
                                        href="/"
                                    >
                                        Inicio
                                    </Link>
                                </h2>

                                <div className={Style["BanderaContainer"]} style={{ "transform": `translateX(${cambiarBandera()}vw)` }}>

                                    <img
                                        src={bandera}
                                        alt=""
                                        className={Style["Bandera"]}
                                    />

                                </div>

                            </div>


                            <div className={Style["Header__div-div-nav-iconos"]}>
                                <div
                                    className={`${Style["Icono"]} ${activo ? `${Style["activo"]}` : ""}`} onClick={search}
                                >
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                    <input
                                        type="text"
                                        className={Style.Input}
                                        value={busqueda}
                                        onChange={(e) =>
                                            setBusqueda(e.target.value)
                                        }
                                        onKeyDown={buscar}
                                    />
                                </div>


                                <div
                                    className={Style["Icono"]}
                                    onClick={() => setCarritoAbierto(true)}
                                >
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </div>


                                <div className={Style["Icono"]} onClick={abrirWhatsApp}>
                                    <span
                                        className={
                                            Style["ic--baseline-whatsapp"]
                                        }
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {carritoAbierto && (
                <Carrito
                    onCerrar={cerrarCarrito}
                    cerrando={cerrandoCarrito}
                />
            )}
        </>
    );
    }
    
}