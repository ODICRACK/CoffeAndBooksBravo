import Style from "./Header.module.css";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

import logoHeader from "../../assets/logoHeader.svg";
import bandera from "../../assets/banner.svg";

export default function Header({ modo, onBuscar }) {

    const [busqueda, setBusqueda] = useState("");
    const [activo, setActivo] = useState(false);
    const [pantallaChica, setPantallaChica] = useState(window.innerWidth < 768);

    const [, setLocation] = useLocation();

    useEffect(() => {

        const verificarPantalla = () => {
            const esChica = window.innerWidth < 768;

            setPantallaChica(esChica);

            if (esChica) {
                setActivo(false);
            }
        };

        verificarPantalla();

        window.addEventListener("resize", verificarPantalla);

        return () => {
            window.removeEventListener("resize", verificarPantalla);
        };

    }, []);

    const search = () => {
        console.log("hola")
        if (pantallaChica == false) {
            setActivo(true)
        }
        else {
            setActivo(false)
        }
    }
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

    if (modo == "busqueda") {
        return (
            <header className={Style.Header2}>

                <div className={Style["Header__div"]}>

                    <div
                        className={`${Style["Header__div-div-nav-iconos"]} ${Style["responsive"]}`}
                    >
                        <Link className={Style["Icono"]} href="/carrito">
                            <span className="material-symbols-outlined">
                                arrow_back_ios_new
                            </span>
                        </Link>

                        <div className={`${Style["Icono"]} ${Style["search"]}`}>

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
                    </div>
                </div>
            </header>
        );
    }

    return (
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
                                    href="/catalogo"
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

                            <div className={Style["BanderaContainer"]}>

                                <img
                                    src={bandera}
                                    alt=""
                                    className={Style["Bandera"]}
                                />

                            </div>

                        </div>

                        <div className={Style["Header__div-div-nav-iconos"]}>
                            <div className={`${Style["Icono"]} ${activo ? `${Style["activo"]}` : ""}`} onClick={search}>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                                <input
                                    type="text"
                                    className={Style.Input}
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                    onKeyDown={buscar}
                                />
                            </div>


                            <Link
                                className={Style["Icono"]}
                                href="/carrito"
                            >
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </Link>


                            <div className={Style["Icono"]}>
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
    );
}