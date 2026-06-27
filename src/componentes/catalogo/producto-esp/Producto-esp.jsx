import "./producto-esp.css";
import imgcaffe from "../../../assets/imgProductos/CaffeColombia.svg";
import imglibro from "../../../assets/imgProductos/libroHarryPotter.svg";
import imgMoneda from "../../../assets/bola.svg"
import imgMarcoCap from "../../../assets/marcoImg-capsula.svg"
export default function ProductoEsp(){
    return(
        <div className="producto-esp cafe" >
            <div style={{display:"none"}}>
                <div className="producto-esp_div enGrano">
                    <img className="modeda enGrano" src={imgMoneda}/>
                    <img className="marcoImg enGrano"src={imgMarcoCap} />
                    <img className="enGrano" src={imgcaffe}/>
                </div>
                <h3 className="peso enGrano">3/4</h3>
                <h2 className="nombre enGrano">
                    Cafe docheano moderado frnases jaj
                </h2>
                <h2 className="gramos enGrano">
                    250g
                </h2>
            </div>
            <div className="producto-esp_div libroesp" >
                <div className="libroesp " >
                    <div className="libro__cara libro__frente">
                        <h2 className="libro__frente-h2">Harry Potter y el misterio del príncipe</h2>
                        <img src={imglibro} className="libro__frente-img" />
                        <h3 className="libro__frente-h3">J.K. Rowling</h3>
                    </div>
                    <div className="libro__cara libro__atras">
                        <div className="libro__atras-contenido">
                            <div className="libro__sinopsis">
                                <p>
                                    En efecto, suspendido en el cielo encima del castillo, había un reluciente cráneo verde con lengua de serpiente, la marca que dejaban los mortífagos cuando salían de un edificio donde habían matado...Una nochc de verano, Dumbledore llega a Privet Drive para recoger a Harry Potter. Tiene la mano de la varita ennegrecida y arrugada, pero no explica el motivo. Entre los magos circulan secretos y sospechas, y ni siquiera Hogwarts se encuentra a salvo. Harry está convencido de que Malfoy lleva grabada la Marca Tenebrosa: hay un mortífago entre ellos. Así, Harry necesitará practicar su magia más potente y contar con la ayuda de amigos de verdad para explorar los secretos más oscuros de Voldemort, mientras Dumbledore se prepara para afrontar su destino...
                                </p>
                            </div>
                            <div className="libro__info">
                                <p><strong>Género:</strong> novela de fantasía y aventura</p>
                                <p><strong>Formato:</strong> tapa blanda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="producto-esp_btn">
                <p>AÑADIR AL CARRITO</p>
            </div>
        </div>
    )
}