import { useState } from "react"
import { Link, useLocation } from "wouter";
import Style from "./SearchMovile.module.css"

import lineaSearch from "../../../assets/lineaSearch.svg"
import cafe from "../../../assets/cafe.svg"
//import libro from "../../assets/libro.svg"
//import cafeLibro from "../../assets/libroCafe.svg"

export default function SearchMovile({ mostrar, onBuscar, volver }) {
    const [busqueda, setBusqueda] = useState("");

    const [, setLocation] = useLocation();

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
    return (
        <div className={`${Style["hola"]} ${mostrar ? "" : `${Style["none"]}`}`}>
            <header className={Style.Header2}>

                <div className={Style["Header__div"]}>

                    <div
                        className={`${Style["Header__div-div-nav-iconos"]} ${Style["responsive"]}`}>
                        <Link className={Style["Icono"]} onClick={volver}>
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
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>

        </div>
    )
}