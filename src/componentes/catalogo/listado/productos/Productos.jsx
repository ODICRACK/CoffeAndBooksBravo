import "./productos.css";

import divisorCardCafe from "../../../../assets/divisorCardCafe.svg";
import divisorCardLibro from "../../../../assets/divisorCardLibro.svg";

import imgNoDisponibleCafe from "../../../../assets/img no disponible-cafe.svg";
import imgNoDisponibleLibro from "../../../../assets/img no disponible-libro.svg";

import btnCarrito from "../../../../assets/btnCarrito.svg";
import btnCarritoLibro from "../../../../assets/btnCarritoLibro.svg";

export default function Productos({ producto, onProductoClick }) {
    return (
        <div>
            {producto.productoTipo === "cafe" && (
                <div
                    className="producto__div cafe"
                    onClick={() => onProductoClick(producto)}
                >
                    <div className="producto__div-img-container">
                        <img
                            className="producto__div-img"
                            src={producto.img}
                            alt={producto.nombre}
                            onError={(e) => {
                                e.currentTarget.src = imgNoDisponibleCafe;
                            }}
                        />
                        {producto.descuento > 0 && (
                            <div className="producto__div-descuento cafe">
                                <p>{producto.descuento}%</p>
                                <p>OFF</p>
                            </div>
                        )}
                    </div>
                    <h3 className="producto__div-h3 cafe" title={producto.nombre}>
                        {producto.nombre}
                    </h3>
                    <img
                        className="producto__div-imgDivs"
                        src={divisorCardCafe}
                        alt=""
                    />
                    <p className="producto__div-p cafe">
                        {producto.precio}
                    </p>
                    <button className="producto__div-btn">
                        <img
                            src={btnCarrito}
                            alt="Agregar al carrito"
                        />
                    </button>
                </div>
            )}

            {producto.productoTipo === "libro" && (
                <div
                    className="producto__div libro"
                    onClick={() => onProductoClick(producto)}
                >
                    <h3 className="producto__div-h3 libro" title={producto.nombre}>
                        {producto.nombre}
                    </h3>
                    <div className="producto__div-img-container">
                        <img
                            className="producto__div-img"
                            src={producto.img}
                            alt={producto.nombre}
                            onError={(e) => {
                                e.currentTarget.src = imgNoDisponibleLibro;
                            }}
                        />
                        {producto.descuento > 0 && (
                            <div className="producto__div-descuento libro">
                                <p>{producto.descuento}%</p>
                                <p>OFF</p>
                            </div>
                        )}
                    </div>
                    <img
                        className="producto__div-imgDivs"
                        src={divisorCardLibro}
                        alt=""
                    />
                    <p className="producto__div-p libro">
                        {producto.precio}
                    </p>
                    <button className="producto__div-btn">
                        <img
                            src={btnCarritoLibro}
                            alt="Agregar al carrito"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}