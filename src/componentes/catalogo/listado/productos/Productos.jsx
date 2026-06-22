import "./productos.css";
import imgcaffe from "../../../../assets/imgProductos/CaffeColombia.svg";
import divisorCardCafe from "../../../../assets/divisorCardCafe.svg"
import btnCarrito from "../../../../assets/btnCarrito.svg"
export default function Produtos() {
    return(
        <div>
            <div className="producto__div">
                <img className="producto__div-img" src={imgcaffe} alt="Café Colombia" />
                <h3 className="producto__div-h3">Café Colombia</h3>
                <img className="producto__div-imgDivs" src={divisorCardCafe} alt="divisorCardCafe" />
                <p className="producto__div-p">$53.000</p>
                <button className="producto__div-btn">
                    <img src={btnCarrito} alt="btn" />
                </button>
            </div>
        </div>
        
    )
}