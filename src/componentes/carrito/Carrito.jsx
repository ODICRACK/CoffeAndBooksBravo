import './Carrito.css';

import carritoDeco from '../../assets/carrito_deco.svg';
import carritoTarjetaImgLibro from '../../assets/carrito_tarjeta-imgLibro.svg';
import carritoTarjetaImgCafe from '../../assets/carrito_tarjeta-imgCafe.svg';
import carritoTarjetaIconoLibro from '../../assets/carrito_tarjeta-iconoLibro.svg';
import carritoTarjetaIconoCafe from '../../assets/carrito_tarjeta-iconoCafe.svg';
import carritoBtnEliminar from '../../assets/carrito_tarjeta-btnEliminar.svg';
import carritoDataSeparador from '../../assets/carrito_data-separador.svg';
import carritoDataBtnFinalizar from '../../assets/carrito_data-btnFinalizar.svg';
import carritoDataBtnVaciar from '../../assets/carrito_data-btnVaciar.svg';

export default function Home() {
    return (
        <div className="Carrito">
            <section className='Carrito__modal'>
                <span className='Carrito__modal-deco'><img src={carritoDeco} alt="" /></span>

                <h1 className='Carrito__modal-titulo'>CARRITO</h1>

                <div className="Carrito__modal-listado">
                    <div className="Carrito__modal-listado--tarjeta">
                        <div className="Carrito__tarjeta-top">
                            <img src={carritoTarjetaImgCafe} alt="" className="Carrito__tarjeta-top--img" />

                            <img src={carritoTarjetaIconoCafe} alt="" className="Carrito__tarjeta-top--icono" />
                        </div>

                        <div className="Carrito__tarjeta-data">
                            <p className="Carrito__tarjeta-data--titulo">
                                Café Verona
                            </p>

                            <p className="Carrito__tarjeta-data--texto">
                                Starbucks
                            </p>

                            <p className="Carrito__tarjeta-data--precio">
                                $20.000
                            </p>
                        </div>

                        <div className='Carrito__tarjeta-cantidad'>
                            <button className='Carrito__tarjeta-cantidad--aumentar'>+</button>

                            <p className="Carrito__tarjeta-cantidad--numero">
                                2
                            </p>

                            <button className='Carrito__tarjeta-cantidad--disminuir'>-</button>
                        </div>

                        <button className='Carrito__tarjeta-btn'><img src={carritoBtnEliminar} alt="" /></button>
                    </div>

                    <div className="Carrito__modal-listado--tarjeta">
                        <div className="Carrito__tarjeta-top">
                            <img src={carritoTarjetaImgLibro} alt="" className="Carrito__tarjeta-top--img" />

                            <img src={carritoTarjetaIconoLibro} alt="" className="Carrito__tarjeta-top--icono" />
                        </div>

                        <div className="Carrito__tarjeta-data">
                            <p className="Carrito__tarjeta-data--titulo">
                                Harry Potter y el misterio del príncipe
                            </p>

                            <p className="Carrito__tarjeta-data--texto">
                                J.K. Rowling
                            </p>

                            <p className="Carrito__tarjeta-data--precio">
                                $30.000
                            </p>
                        </div>

                        <div className='Carrito__tarjeta-cantidad'>
                            <button className='Carrito__tarjeta-cantidad--aumentar'>+</button>

                            <p className="Carrito__tarjeta-cantidad--numero">
                                1
                            </p>

                            <button className='Carrito__tarjeta-cantidad--disminuir'>-</button>
                        </div>

                        <button className='Carrito__tarjeta-btn'><img src={carritoBtnEliminar} alt="" /></button>
                    </div>
                </div>

                <div className="Carrito__modal-data">
                    <p className="Carrito__data-cantidad">
                        Cantidad de productos: 3
                    </p>

                    <span className='Carrito__data-separador'><img src={carritoDataSeparador} alt="" /></span>

                    <p className='Carrito__data-total'>
                        TOTAL A PAGAR: $50.000
                    </p>

                    <button className='Carrito__data-btnFinalizar'><img src={carritoDataBtnFinalizar} alt="" /></button>

                    <button className='Carrito__data-btnVaciar'><img src={carritoDataBtnVaciar} alt="" /></button>
                </div>
            </section>
        </div>
    )
}