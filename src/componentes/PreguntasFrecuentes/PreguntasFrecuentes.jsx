import { useEffect, useState } from "react";
import Style from "./PreguntasFrecuentes.module.css"

import sepa from "../../assets/SeparacionPFsvg.svg";
import IconoPF from "../../assets/IconoPF.png";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import { obtenerPreguntasFrecuentes } from "../../servicios/googleSheets";

export default function PreguntasFrecuentes({ preTipo }) {
    const [preguntas, setPreguntas] = useState([])
    const [tipo, setTipo] = useState([])
    const [mostrando, setMostrando] = useState(preTipo || "")
    const [seleccionados, setSeleccionados] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);

    const iconos = [{ nombre: "Info", icono: "info" }, { nombre: "Envios", icono: "local_shipping" }, { nombre: "Billetera", icono: "account_balance_wallet" }, { nombre: "Caja", icono: "box" }, { nombre: "Cambio", icono: "published_with_changes" }, { nombre: "Cafe", icono: "local_cafe" }, { nombre: "Libro", icono: "menu_book" }]

    useEffect(() => {
        obtenerPreguntasFrecuentes()
            .then((datos) => {
                setPreguntas(datos.preguntasFrecuentes)
                setTipo(datos.categoriasFrecuentes)
            });
    }, [])

    const cambiarSeleccionTipos = (id) => {
        setSeleccionado((actual) => {
            if (actual === id) {
                // Era el seleccionado → deseleccionar
                return null;
            }

            // Seleccionar este y automáticamente quitar el anterior
            return id;
        });
    };
    const cambiarSeleccion = (id) => {
        setSeleccionados((actuales) => {
            if (actuales.includes(id)) {
                // Ya estaba seleccionado → lo quitamos
                return actuales.filter((item) => item !== id);
            }

            // No estaba seleccionado → lo agregamos
            return [...actuales, id];
        });
    };

    const cambiarTipo = (nombre) => {
        if (mostrando == nombre) {
            setMostrando("")
        }
        else {
            setMostrando(nombre)
        }
    
    }

    return (
        <div className={Style.Div}>
            <Header />
            <main className={Style["Div__main"]}>
                <section className={`${Style["Div__main-section"]} ${Style["Preguntas"]}`}>
                    <div className={Style["Preguntas-titul"]}>
                        <h2>Preguntas Frecuentes</h2>
                    </div>
                    <div className={Style["Preguntas-temas"]}>
                        {tipo.map((tipoE) => {
                            console.log(tipoE)
                            let iconoE = iconos.find(icono => icono.nombre == tipoE.icono)
                            if (iconoE == undefined) {
                                iconoE = iconos[0]
                            }
                            return (
                                <div className={`${Style["Preguntas-temas-item"]} ${seleccionado === tipoE.id ? Style["Preguntas-temas-item-active"] : ""}`} key={tipoE.id} onClick={() => { cambiarTipo(tipoE.nombre); cambiarSeleccionTipos(tipoE.id) }}>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            {iconoE.icono}
                                        </span>

                                    </div>
                                    <h3>{(tipoE.nombre).toUpperCase()}</h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className={Style.Button}>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </section>
                <section className={`${Style["Div__main-section"]} ${Style["Sepa"]}`}>
                    <img src={sepa} alt="" />
                </section>
                {mostrando == "" ?
                    <section className={`${Style["Div__main-section"]} ${Style["Nada"]}`}>
                        <img src={IconoPF} alt="" />
                        <h2>seleccione una categoria para ver sus preguantas y respuestas</h2>
                    </section>
                    :
                    <section className={`${Style["Div__main-section"]} ${Style["Algo"]}`}>
                        <article className={Style["Algo__article"]}>
                            {
                                preguntas.map((preguntaE) => {
                                    if (preguntaE.tipoId != mostrando) {
                                        console.log(`se muestra el tipo id de la pregunta ${preguntaE.tipoId}`)
                                        console.log(`se muestra mostrando ${mostrando}`)
                                        return (null)
                                    }
                                    else {
                                        return (
                                            <div className={`${Style["Cont"]} ${Style["Plegado"]} ${seleccionados.includes(preguntaE.id)
                                                ? Style["Desplegado"]
                                                : Style["Plegado"]
                                                }`} key={preguntaE.id} onClick={() => cambiarSeleccion(preguntaE.id)}>
                                                <article className={Style["Algo__article-div-Titul"]}>
                                                    <h2>{preguntaE.pregunta}</h2>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={Style["Dawn"]}>
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                            <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
                                                        </g>
                                                    </svg>
                                                </article>
                                                <article className={Style["Algo__article-div-article"]}>
                                                    <p>
                                                        {preguntaE.respuesta?.replace(/\\n/g, "\n")}
                                                    </p>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </article>
                    </section>}

            </main>
            <Footer />
        </div >
    )
}