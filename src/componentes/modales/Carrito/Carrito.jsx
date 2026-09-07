import "./Carrito.css"
import { useEffect } from "react";

import carritoDeco from '../../../assets/carrito_deco.svg';
import tacho from "../../../assets/tachoIcon.svg"
import carritoTarjetaImgCafe from '../../../assets/carrito_tarjeta-imgCafe.svg';
import carritoTarjetaIconoCafe from '../../../assets/carrito_tarjeta-iconoCafe.svg';
import carritoDataSeparador from '../../../assets/carrito_data-separador.svg';

export default function Carrito(){
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    return(
        <div className="modal-overlay">
            <img src={carritoDeco} alt="" />
            <div className="modal-content">
                <div>
                    <h1>CARRITO</h1>
                </div>
                <div className="modal-content-cartList"> 
                    <div className="modal-content-cartList-card">
                        <div>
                            <div>
                                <img src={carritoTarjetaImgCafe} alt="" />
                            </div>
                            <img src={carritoTarjetaIconoCafe} alt="" />
                        </div>
                        <div className="modal-content-cartList-card-div" >
                            <div className="modal-content-cartList-card-div-Content">
                                <div>
                                    <h2>Cafe Verona</h2>
                                    <h3>Starbucks</h3>
                                </div>
                                <div>
                                    <h2>$20000</h2>
                                    <div>
                                        <button><img src={tacho} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-content-cartList-card-div-suma">
                                <div>
                                    <h3>+</h3>
                                    <button>1</button>
                                    <h3>-</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content-cartList-card">
                        <div>
                            <div>
                                <img src={carritoTarjetaImgCafe} alt="" />
                            </div>
                            <img src={carritoTarjetaIconoCafe} alt="" />
                        </div>
                        <div className="modal-content-cartList-card-div" >
                            <div className="modal-content-cartList-card-div-Content">
                                <div>
                                    <h2>Cafe Verona</h2>
                                    <h3>Starbucks</h3>
                                </div>
                                <div>
                                    <h2>$20000</h2>
                                    <div>
                                        <button><img src={tacho} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-content-cartList-card-div-suma">
                                <div>
                                    <h3>+</h3>
                                    <button>1</button>
                                    <h3>-</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content-cartList-card">
                        <div>
                            <div>
                                <img src={carritoTarjetaImgCafe} alt="" />
                            </div>
                            <img src={carritoTarjetaIconoCafe} alt="" />
                        </div>
                        <div className="modal-content-cartList-card-div" >
                            <div className="modal-content-cartList-card-div-Content">
                                <div>
                                    <h2>Cafe Verona</h2>
                                    <h3>Starbucks</h3>
                                </div>
                                <div>
                                    <h2>$20000</h2>
                                    <div>
                                        <button><img src={tacho} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-content-cartList-card-div-suma">
                                <div>
                                    <h3>+</h3>
                                    <button>1</button>
                                    <h3>-</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content-cartList-card">
                        <div>
                            <div>
                                <img src={carritoTarjetaImgCafe} alt="" />
                            </div>
                            <img src={carritoTarjetaIconoCafe} alt="" />
                        </div>
                        <div className="modal-content-cartList-card-div" >
                            <div className="modal-content-cartList-card-div-Content">
                                <div>
                                    <h2>Cafe Verona</h2>
                                    <h3>Starbucks</h3>
                                </div>
                                <div>
                                    <h2>$20000</h2>
                                    <div>
                                        <button><img src={tacho} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-content-cartList-card-div-suma">
                                <div>
                                    <h3>+</h3>
                                    <button>1</button>
                                    <h3>-</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content-cartList-card">
                        <div>
                            <div>
                                <img src={carritoTarjetaImgCafe} alt="" />
                            </div>
                            <img src={carritoTarjetaIconoCafe} alt="" />
                        </div>
                        <div className="modal-content-cartList-card-div" >
                            <div className="modal-content-cartList-card-div-Content">
                                <div>
                                    <h2>Cafe Verona</h2>
                                    <h3>Starbucks</h3>
                                </div>
                                <div>
                                    <h2>$20000</h2>
                                    <div>
                                        <button><img src={tacho} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-content-cartList-card-div-suma">
                                <div>
                                    <h3>+</h3>
                                    <button>1</button>
                                    <h3>-</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal-content-pago">
                    <h2>Catidad total de productos: 3</h2>
                    <img src={carritoDataSeparador} alt="" />
                    <h2>TOTAL A PAGAR $50.000</h2>
                    <div>
                        <button>FINALIZAR COMPRA</button>
                    </div>
                    <div>
                        <button>VACIAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}