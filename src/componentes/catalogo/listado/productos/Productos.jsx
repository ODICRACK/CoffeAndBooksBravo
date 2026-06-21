import "./productos.css";
import imgcaffe from "../../../../assets/imgProductos/CaffeColombia.svg";
import divisorCardCafe from "../../../../assets/divisorCardCafe.svg"
import btnCarrito from "../../../../assets/btnCarrito.svg"
export default function Produtos() {
    return(
        <div>
            <div className="listado__div">
                <img className="listado__div-img" src={imgcaffe} alt="Café Colombia" />
                <h3 className="listado__div-h3">Café Colombia</h3>
                <img className="listado__div-imgDivs" src={divisorCardCafe} alt="divisorCardCafe" />
                <p className="listado__div-p">$53.000</p>
                <button className="listado__div-btn">
                    <img src={btnCarrito} alt="btn" />
                </button>
            </div>
        </div>
        
    )
}