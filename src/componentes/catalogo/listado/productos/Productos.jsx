import "./productos.css";
import imgcaffe from "../../../../assets/imgProductos/CaffeColombia.svg";
import divisorCardCafe from "../../../../assets/divisorCardCafe.svg"
import divisorCardLibro from "../../../../assets/divisorCardlibro.svg"
import btnCarrito from "../../../../assets/btnCarrito.svg"
import btnCarritoLibro from "../../../../assets/btnCarritoLibro.svg"
export default function Produtos() {
    return(
        <div>
            <div className="producto__div cafe">
                <img className="producto__div-img" src={imgcaffe} alt="Café Colombia" />
                <h3 className="producto__div-h3 cafe">Café Colombia</h3>
                <img className="producto__div-imgDivs" src={divisorCardCafe} alt="divisorCardCafe" />
                <p className="producto__div-p cafe">$53.000</p>
                <button className="producto__div-btn">
                    <img src={btnCarrito} alt="btn" />
                </button>
            </div>
            <div className="producto__div libro">
                <h3 className="producto__div-h3 libro">Café Colombia</h3>
                <img className="producto__div-img" src={imgcaffe} alt="Café Colombia" />
                <img className="producto__div-imgDivs" src={divisorCardLibro} alt="divisorCardCafe" />
                <p className="producto__div-p libro">$53.000</p>
                <button className="producto__div-btn">
                    <img src={btnCarritoLibro} alt="btn" />
                </button>
            </div>
        </div>
        
    )
}