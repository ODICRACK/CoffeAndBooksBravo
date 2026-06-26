import './Home.css';

// import Header from "../Header/Header"
// import Footer from "../Footer/Footer"

import inicioSeparador from '../../assets/home_inicio-separador.svg';
import dataSeparador from '../../assets/home_data-separador.svg';
import dataLogo1 from '../../assets/home_data-logo1.svg';
import destSeparador from '../../assets/home_dest-separador.svg';
import destCarruselAtras from '../../assets/home_dest-carrusel-atras.svg';
import destCarruselSig from '../../assets/home_dest-carrusel-sig.svg';
import destTarjetaImg from '../../assets/home_dest-tarjeta-img.svg';
import destTarjetaImg1 from '../../assets/home_dest-tarjeta-img1.svg';
import destTarjetaImg2 from '../../assets/home_dest-tarjeta-img2.svg';
import destTarjetaImg3 from '../../assets/home_dest-tarjeta-img3.svg';
import destTarjetaImg4 from '../../assets/home_dest-tarjeta-img4.svg';
import dataLogo2 from '../../assets/home_data-logo2.svg';
import destIcono1 from '../../assets/home_dest-iconoCafe.svg';
import destTarjetaSeparador from '../../assets/home_dest-tarjeta-separador.svg';
import catDeco from '../../assets/home_cat-deco.svg';
import catFondoLibroImg from '../../assets/home_cat-tarjeta-fondoLibro.svg';
import catFondoCafeImg from '../../assets/home_cat-tarjeta-fondoCafe.svg';
import catDecoracionImg from '../../assets/home_cat-tarjeta-img-decoracionLibro.svg';
import catDecoracionImg1 from '../../assets/home_cat-tarjeta-img-decoracionCafe.svg';
import catTarjetaImgLibro1 from '../../assets/home_cat-tarjeta-imgLibro1.svg';
import catTarjetaImgLibro2 from '../../assets/home_cat-tarjeta-imgLibro2.svg';
import catTarjetaImgLibro3 from '../../assets/home_cat-tarjeta-imgLibro3.svg';
import catTarjetaImgCafe1 from '../../assets/home_cat-tarjeta-imgCafe1.svg';
import catTarjetaImgCafe2 from '../../assets/home_cat-tarjeta-imgCafe2.svg';
import catTarjetaImgCafe3 from '../../assets/home_cat-tarjeta-imgCafe3.svg';

export default function Home() {
    return (
        <div className='Home'>
            <section className='Inicio'>
                <div className="Inicio__cafe-wrapper"></div>
                <div className="Inicio__libro-wrapper"></div>

                <div className="Inicio__contenido">
                    <h1 className="Inicio__titulo">Elige entre nuestros estilos</h1>

                    <span className="Inicio__separador"><img src={inicioSeparador} alt="" /></span>

                    <p className="Inicio__texto">
                        Desde la pagina para entretenerte hasta el cafe para disfrutarlo
                    </p>

                    <button className="Inicio__boton">Productos</button>
                </div>
            </section>



            <section className='Data'>
                <div className="Data__tarjeta-sobreMi">
                    <span className='Data__tarjeta-logo'><img src={dataLogo1} alt="" /></span>

                    <h2 className='Data__tarjeta-titulo'>Mi historia</h2>

                    <span className='Data__tarjeta-separador'><img src={dataSeparador} alt="" /></span>

                    <p className='Data__tarjeta-texto'>It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="Data__tarjeta-sobreMiNegocio">
                    <span className='Data__tarjeta-logo'><img src={dataLogo2} alt="" /></span>

                    <h2 className='Data__tarjeta-titulo'>Mi negocio</h2>

                    <span className='Data__tarjeta-separador'><img src={dataSeparador} alt="" /></span>

                    <p className='Data__tarjeta-texto'>It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>

            <section className='Destacados'>
                <p className='Destacados__titulo'>Destacados</p>

                <span className='Destacados__separador'>
                    <img src={destSeparador} alt="" />
                </span>

                <div className='Destacados__carrusel'>
                    <button className='Destacados__carrusel-atras Destacados__carrusel-btn'>
                        <img src={destCarruselAtras} alt="" />
                    </button>

                    <div className='Destacados__carrusel-contenedor'>

                        <div className='Destacados__carrusel-tarjeta'>
                            <div className='Destacados__carrusel-tarjeta--top'>
                                <span className='Destacados__carrusel-tarjeta--img'>
                                    <img src={destTarjetaImg} alt="" />
                                </span>

                                <span className='Destacados__carrusel-tarjeta--icono'>
                                    <img src={destIcono1} alt="" />
                                </span>
                            </div>

                            <div className='Destacados__carrusel-tarjeta--bottom'>
                                <p className='Destacados__carrusel-tarjeta--titulo'>
                                    Velvet Coffee
                                </p>

                                <span className='Destacados__carrusel-tarjeta--separador'>
                                    <img src={destTarjetaSeparador} alt="" />
                                </span>

                                <p className='Destacados__carrusel-tarjeta--precio'>
                                    $1.000
                                </p>
                            </div>
                        </div>

                        <div className='Destacados__carrusel-tarjeta'>
                            <div className='Destacados__carrusel-tarjeta--top'>
                                <span className='Destacados__carrusel-tarjeta--img'>
                                    <img src={destTarjetaImg1} alt="" />
                                </span>

                                <span className='Destacados__carrusel-tarjeta--icono'>
                                    <img src={destIcono1} alt="" />
                                </span>
                            </div>

                            <div className='Destacados__carrusel-tarjeta--bottom'>
                                <p className='Destacados__carrusel-tarjeta--titulo'>
                                    Velvet Coffee
                                </p>

                                <span className='Destacados__carrusel-tarjeta--separador'>
                                    <img src={destTarjetaSeparador} alt="" />
                                </span>

                                <p className='Destacados__carrusel-tarjeta--precio'>
                                    $1.000
                                </p>
                            </div>
                        </div>

                        <div className='Destacados__carrusel-tarjeta'>
                            <div className='Destacados__carrusel-tarjeta--top'>
                                <span className='Destacados__carrusel-tarjeta--img'>
                                    <img src={destTarjetaImg2} alt="" />
                                </span>

                                <span className='Destacados__carrusel-tarjeta--icono'>
                                    <img src={destIcono1} alt="" />
                                </span>
                            </div>

                            <div className='Destacados__carrusel-tarjeta--bottom'>
                                <p className='Destacados__carrusel-tarjeta--titulo'>
                                    Velvet Coffee
                                </p>

                                <span className='Destacados__carrusel-tarjeta--separador'>
                                    <img src={destTarjetaSeparador} alt="" />
                                </span>

                                <p className='Destacados__carrusel-tarjeta--precio'>
                                    $1.000
                                </p>
                            </div>
                        </div>

                        <div className='Destacados__carrusel-tarjeta'>
                            <div className='Destacados__carrusel-tarjeta--top'>
                                <span className='Destacados__carrusel-tarjeta--img'>
                                    <img src={destTarjetaImg3} alt="" />
                                </span>

                                <span className='Destacados__carrusel-tarjeta--icono'>
                                    <img src={destIcono1} alt="" />
                                </span>
                            </div>

                            <div className='Destacados__carrusel-tarjeta--bottom'>
                                <p className='Destacados__carrusel-tarjeta--titulo'>
                                    Velvet Coffee
                                </p>

                                <span className='Destacados__carrusel-tarjeta--separador'>
                                    <img src={destTarjetaSeparador} alt="" />
                                </span>

                                <p className='Destacados__carrusel-tarjeta--precio'>
                                    $1.000
                                </p>
                            </div>
                        </div>

                        <div className='Destacados__carrusel-tarjeta'>
                            <div className='Destacados__carrusel-tarjeta--top'>
                                <span className='Destacados__carrusel-tarjeta--img'>
                                    <img src={destTarjetaImg4} alt="" />
                                </span>

                                <span className='Destacados__carrusel-tarjeta--icono'>
                                    <img src={destIcono1} alt="" />
                                </span>
                            </div>

                            <div className='Destacados__carrusel-tarjeta--bottom'>
                                <p className='Destacados__carrusel-tarjeta--titulo'>
                                    Velvet Coffee
                                </p>

                                <span className='Destacados__carrusel-tarjeta--separador'>
                                    <img src={destTarjetaSeparador} alt="" />
                                </span>

                                <p className='Destacados__carrusel-tarjeta--precio'>
                                    $1.000
                                </p>
                            </div>
                        </div>

                    </div>

                    <button className='Destacados__carrusel-sig Destacados__carrusel-btn'>
                        <img src={destCarruselSig} alt="" />
                    </button>
                </div>
            </section>

            <section className="Categorias">
                <div className='Categorias__header'>
                    <img src={catDeco} alt="" className="Categorias__header-deco Categorias__header-deco--izq" />

                    <p className="Categorias__header-titulo">
                        CATEGORIAS
                    </p>

                    <img src={catDeco} alt="" className="Categorias__header-deco Categorias__header-deco--der" />
                </div>

                <div className="Categorias__contenedor">
                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoLibroImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgLibro1} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__libro">
                                <p className="Categorias__tarjeta-titulo">
                                    Fantasía
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Historias y mundos creados para entretener, emocionar e inspirar la imaginación.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoCafeImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgCafe1} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg1} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__cafe">
                                <p className="Categorias__tarjeta-titulo">
                                    Café en grano
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Granos de café tostados sin moler, ideales para quienes prefieren moler el café
                                    justo antes de prepararlo.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoLibroImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgLibro2} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__libro">
                                <p className="Categorias__tarjeta-titulo">
                                    Desarrollo Personal
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Libros que ayudan a adquirir conocimientos, mejorar habilidades y crecer personalmente.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoCafeImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgCafe2} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg1} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__cafe">
                                <p className="Categorias__tarjeta-titulo">
                                    Café molido
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Granos de café tostados sin moler, ideales para quienes prefieren moler el café
                                    justo antes de prepararlo.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoLibroImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgLibro3} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__libro">
                                <p className="Categorias__tarjeta-titulo">
                                    Clásicos y Cultura
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Obras literarias y culturales que han dejado una huella importante a lo
                                    largo del tiempo.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                    <div className="Categorias__tarjeta">
                        <div className="Categorias__tarjeta--inner">
                            <img src={catFondoCafeImg} alt="" className="Categorias__tarjeta-fondo" />

                            <img src={catTarjetaImgCafe3} alt="" className="Categorias__tarjeta-circulo" />

                            <img src={catDecoracionImg1} alt="" className="Categorias__tarjeta-marco" />

                            <div className="Categorias__tarjeta-contenido Categorias__cafe">
                                <p className="Categorias__tarjeta-titulo">
                                    Café en cápsula
                                </p>

                                <p className="Categorias__tarjeta-texto">
                                    Granos de café tostados sin moler, ideales para quienes prefieren moler el café
                                    justo antes de prepararlo.
                                </p>

                                <button className="Categorias__tarjeta-btn">Explorar categoría</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}