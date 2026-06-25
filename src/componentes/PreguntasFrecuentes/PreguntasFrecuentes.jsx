import Style from "./PreguntasFrecuentes.module.css"

import sepa from "../../assets/SeparacionPFsvg.svg";
import IconoPF from "../../assets/IconoPF.svg";
import Header from "../Header/Header"

export default function PreguntasFrecuentes(){
    return(
        <div className={Style.Div}>
            <Header/>
            <main className={Style["Div__main"]}>
                <section className={`${Style["Div__main-section"]} ${Style["Preguntas"]}`}>
                    <div className="Preguntas-titul">
                        <h2>Preguntas Frecuentes</h2>
                    </div>
                    <div>
                        <div>
                            <div>
                                <span>

                                </span>
                                
                            </div>
                            <h3></h3>
                        </div>
                    </div>
                </section>
                <section className={`${Style["Div__main-section"]} ${Style["Sepa"]}`}>
                    <img src={sepa} alt="" />
                </section>
                <section className={`${Style["Div__main-section"]} ${Style["Nada"]}`}>
                    <img src={IconoPF} alt="" />
                    <h2>seleccione una categoria para ver sus preguantas y respuestas</h2>
                </section>
            </main>
        </div>
    )
}