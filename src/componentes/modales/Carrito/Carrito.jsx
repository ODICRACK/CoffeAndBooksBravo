import "./Carrito.css"
import { useEffect, useState } from "react";
import {
    obtenerCarrito,
    vaciarCarrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    calcularTotal
} from "../../../servicios/Carrito";

import carritoDeco from '../../../assets/carrito_deco.svg';
import tacho from "../../../assets/tachoIcon.svg"
import carritoTarjetaIconoCafe from '../../../assets/carrito_tarjeta-iconoCafe.svg';
import carritoTarjetaIconoLibro from '../../../assets/carrito_tarjeta-iconoLibro.svg';
import carritoDataSeparador from '../../../assets/carrito_data-separador.svg';

export default function Carrito({ onCerrar, cerrando }) {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const productosGuardados = obtenerCarrito();
        setCarrito(productosGuardados);

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    function precioComoNumero(precio) {
        return parseFloat(
            precio
                .replace("$", "")
                .replace(/,/g, "")
        );
    }
    function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const productos = carrito.map((producto) => {
        const precio = precioComoNumero(producto.precio);
        const subtotal = precio * producto.cantidad;
        return `${producto.cantidad}x ${producto.nombre} - $${subtotal.toLocaleString("es-AR")}`;
    });

    const total = calcularTotal(carrito);
    const mensaje = `Hola! Quiero realizar el siguiente pedido:

*Pedido:*
${productos.join("\n")}
----------------------------------------------------
*Total:* $${total.toLocaleString("es-AR")}

Quedo a la espera de confirmación.
Gracias♡`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const numeroWhatsApp = "5492901534508";
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
        window.open(url, "_blank");
    }

    return (
        <div
            className="modal-overlay"
            onClick={onCerrar}>
            <img
                src={carritoDeco}
                alt=""
                className={cerrando ? "cerrando-deco" : ""}
            />
            <div
                className={`modal-content ${cerrando ? "cerrando" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className="modal-content-top">
                    <span
                        className="modal-content-volver"
                        onClick={onCerrar}>
                        &#8249;
                    </span>
                    <div className="modal-content-title">
                        <h1>CARRITO</h1>
                    </div>
                </div>
                <div className="modal-content-cartList">

                    {carrito.length === 0 ? (
                        <p>Tu carrito esta vacío</p>
                    ) : (
                        carrito.map((producto) => (
                            <div
                                className="modal-content-cartList-card"
                                key={producto.id}
                            >
                                <div>
                                    <div>
                                        <img
                                            src={producto.img}
                                            alt={producto.nombre}
                                        />
                                    </div>

                                    <img
                                        src={
                                            producto.productoTipo === "cafe"
                                                ? carritoTarjetaIconoCafe
                                                : carritoTarjetaIconoLibro
                                        }
                                        alt=""
                                    />
                                </div>

                                <div className="modal-content-cartList-card-div">

                                    <div className="modal-content-cartList-card-div-Content">

                                        <div>
                                            <h2>{producto.nombre}</h2>

                                            {producto.productoTipo === "cafe" && (
                                                <h3>{producto.marca}</h3>
                                            )}

                                            {producto.productoTipo === "libro" && (
                                                <h3>{producto.autor}</h3>
                                            )}
                                        </div>

                                        <div>
                                            <h2>$
                                                {(precioComoNumero(producto.precio) * producto.cantidad).toLocaleString(
                                                    "en-US",
                                                    {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    }
                                                )}</h2>

                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setCarrito(
                                                            eliminarDelCarrito(producto.id)
                                                        );
                                                    }}
                                                >
                                                    <img
                                                        src={tacho}
                                                        alt="Eliminar producto"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="modal-content-cartList-card-div-suma">
                                        <div>
                                            <button
                                                onClick={() => {
                                                    const nuevoCarrito = aumentarCantidad(producto.id);
                                                    setCarrito(nuevoCarrito);
                                                }}
                                            >
                                                +
                                            </button>

                                            <h3>{producto.cantidad}</h3>

                                            <button
                                                onClick={() => {
                                                    setCarrito(
                                                        disminuirCantidad(producto.id)
                                                    );
                                                }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}

                </div>
                <div className="modal-content-pago">
                    <h2>Catidad total de productos: {carrito.reduce((total, producto) => total + producto.cantidad, 0)}</h2>
                    <img src={carritoDataSeparador} alt="" />
                    <h2>
                        TOTAL A PAGAR $
                        {calcularTotal(carrito).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </h2>
                    <div>
                        <button onClick={finalizarCompra}>FINALIZAR COMPRA</button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setCarrito(vaciarCarrito);
                            }}>VACIAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}