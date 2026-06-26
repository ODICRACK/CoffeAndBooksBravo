import "./producto-esp.css";
import imgcaffe from "../../../assets/imgProductos/CaffeColombia.svg";
export default function ProductoEsp(){
    return(
        <div className="producto-esp">
            <div >
                <div className="producto-esp_div capsula">
                    <img className="capsula" src={imgcaffe}/>
                </div>
                <h3 className="peso capsula">3/4</h3>
                <h2 className="nombre capsula">
                    Cafe docheano moderado frnases jaj
                </h2>
                <h2 className="gramos capsula">
                    250g
                </h2>
            </div>
            <div>

            </div>
            <div className="producto-esp_btn">
                <p>AÑADIR AL CARRITO</p>
            </div>
        </div>
    )
}