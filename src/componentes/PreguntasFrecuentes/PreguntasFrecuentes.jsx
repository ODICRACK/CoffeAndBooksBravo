import Style from "./PreguntasFrecuentes.module.css"

import sepa from "../../assets/SeparacionPFsvg.svg";
// import IconoPF from "../../assets/IconoPF.png";
import Header from "../Header/Header"

export default function PreguntasFrecuentes() {
    return (
        <div className={Style.Div}>
            <Header />
            <main className={Style["Div__main"]}>
                <section className={`${Style["Div__main-section"]} ${Style["Preguntas"]}`}>
                    <div className={Style["Preguntas-titul"]}>
                        <h2>Preguntas Frecuentes</h2>
                    </div>
                    <div className={Style["Preguntas-temas"]}>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    box
                                </span>

                            </div>
                            <h3>PEDIDOS Y COMPRAS</h3>
                        </div>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    local_shipping
                                </span>

                            </div>
                            <h3>ENVIOS</h3>
                        </div>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    published_with_changes
                                </span>

                            </div>
                            <h3>CAMBIOS Y DEVOLUCIONES</h3>
                        </div>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    account_balance_wallet
                                </span>

                            </div>
                            <h3>PAGOS</h3>
                        </div>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    local_cafe
                                </span>

                            </div>
                            <h3>SOBRE EL CAFÉ</h3>
                        </div>
                        <div className={Style["Preguntas-temas-item"]}>
                            <div>
                                <span class="material-symbols-outlined">
                                    menu_book
                                </span>

                            </div>
                            <h3>SOBRE LOS LIBROS</h3>
                        </div>
                    </div>
                </section>
                <section className={`${Style["Div__main-section"]} ${Style["Sepa"]}`}>
                    <img src={sepa} alt="" />
                </section>
                {/* <section className={`${Style["Div__main-section"]} ${Style["Nada"]}`}>
                    <img src={IconoPF} alt="" />
                    <h2>seleccione una categoria para ver sus preguantas y respuestas</h2>
                </section> */}
                <section className={`${Style["Div__main-section"]} ${Style["Algo"]}`}>
                    <article className={Style["Algo__article"]}>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2>¿Cómo hago un pedido?</h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2> ¿Necesito crear una cuenta para comprar?
                                </h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2> ¿Puedo combinar libros y café en un mismo pedido?</h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2> ¿Cómo agrego productos al carrito?
</h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2> ¿El pedido se hace directamente por WhatsApp?</h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>
                        <div className={`${Style["Cont"]} ${Style["Plegado"]}`}>
                            <article className={Style["Algo__article-div-Titul"]}>
                                <h2> ¿Puedo modificar mi pedido antes de enviarlo?</h2>
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
                                    ¡Es muy fácil!<br />
                                    Solo tenés que explorar el catálogo, agregar al carrito los libros y cafés que quieras, y luego presionar el botón “Finalizar compra”. Automáticamente se abrirá un mensaje en whatsapp con tu selección lista para enviar. Desde ahí coordinamos el pago y el envío.
                                </p>
                            </article>
                        </div>


                    </article>
                </section>
            </main>
        </div >
    )
}