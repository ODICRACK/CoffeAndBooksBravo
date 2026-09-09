import './Home.css';

import { useEffect, useState } from 'react';
import { Link } from 'wouter';

import { obtenerCategorias, obtenerProductosDestacados } from "../../servicios/googleSheets";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import ProductoEsp from '../../componentes/modales/producto-esp/Producto-esp';
// import Carrito from "../modales/Carrito/Carrito"

import inicioSeparador from '../../assets/home_inicio-separador.svg';
import dataSeparador from '../../assets/home_data-separador.svg';
import dataLogo1 from '../../assets/home_data-logo1.svg';
import destSeparador from '../../assets/home_dest-separador.svg';
import destCarruselAtras from '../../assets/home_dest-carrusel-atras.svg';
import destCarruselSig from '../../assets/home_dest-carrusel-sig.svg';
import dataLogo2 from '../../assets/home_data-logo2.svg';
import destIcono1 from '../../assets/home_dest-iconoCafe.svg';
import destIcono2 from '../../assets/home_dest-iconoLibro.svg';
import destTarjetaSeparador from '../../assets/home_dest-tarjeta-separador.svg';
import catDeco from '../../assets/home_cat-deco.svg';
import catFondoLibroImg from '../../assets/home_cat-tarjeta-fondoLibro.svg';
import catFondoCafeImg from '../../assets/home_cat-tarjeta-fondoCafe.svg';
import catDecoracionImg from '../../assets/home_cat-tarjeta-img-decoracionLibro.svg';
import catDecoracionImg1 from '../../assets/home_cat-tarjeta-img-decoracionCafe.svg';

export default function Home() {

    const [destacados, setDestacados] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const abrirProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    const cerrarProducto = () => {
        setProductoSeleccionado(null);
    };

    useEffect(() => {

        obtenerProductosDestacados()
            .then((productos) => {
                setDestacados(productos);
            });

        obtenerCategorias()
            .then((datos) => {

                const categoriasOrdenadas = [];

                const libros = datos.filter(
                    (categoria) => categoria.tipo === "libro"
                );

                const cafes = datos.filter(
                    (categoria) => categoria.tipo === "cafe"
                );

                for (let i = 0; i < 3; i++) {

                    if (libros[i]) {
                        categoriasOrdenadas.push(libros[i]);
                    }

                    if (cafes[i]) {
                        categoriasOrdenadas.push(cafes[i]);
                    }
                }

                setCategorias(categoriasOrdenadas);
            });

    }, []);

    const carrusel = (num) => {
        const carru = document.getElementById("carru")

        carru.scrollBy({ left: num > 0 ? 300 : -300, behavior: "smooth" });
    }
    return (
        <div className={`Home ${productoSeleccionado ? "modal-abierto" : ""}`}>

            <section className='Inicio'>
                <Header />

                <Link
                    href={`/catalogo?tipo=cafe`}
                    className="Inicio__cafe-wrapper"
                ></Link>

                <Link
                    href={`/catalogo?tipo=libro`}
                    className="Inicio__libro-wrapper"
                ></Link>

                <div className="Inicio__contenido">
                    <h1 className="Inicio__titulo">Elige entre nuestros estilos</h1>

                    <span className="Inicio__separador"><img src={inicioSeparador} alt="" /></span>

                    <p className="Inicio__texto">
                        Desde la pagina para entretenerte hasta el cafe para disfrutarlo
                    </p>

                    <Link
                        className="Inicio__boton"
                        href='/catalogo'>
                        Productos
                    </Link>
                </div>
            </section>



            <section className='Data' id='info'>
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
                        <img src={destCarruselAtras} alt="" onClick={() => carrusel(-1)} />
                    </button>

                    <div className='Destacados__carrusel-contenedor' id='carru'>

                        {destacados.map((producto) => (
                            <div
                                className='Destacados__carrusel-tarjeta'
                                key={producto.id}
                                onClick={() => abrirProducto(producto)}
                            >
                                <div className='Destacados__carrusel-tarjeta--top'>
                                    <span className='Destacados__carrusel-tarjeta--img'>
                                        <img
                                            className={
                                                producto.productoTipo === "cafe"
                                                    ? "Destacados__img-cafe"
                                                    : "Destacados__img-libro"
                                            }
                                            src={producto.img}
                                            alt={producto.nombre}
                                        />
                                    </span>

                                    <span className='Destacados__carrusel-tarjeta--icono'>
                                        <img
                                            src={producto.productoTipo === "cafe" ? destIcono1 : destIcono2}
                                            alt=""
                                        />
                                    </span>
                                </div>

                                <div className='Destacados__carrusel-tarjeta--bottom'>
                                    <p className='Destacados__carrusel-tarjeta--titulo' title={producto.nombre}>
                                        {producto.nombre}
                                    </p>

                                    <span className='Destacados__carrusel-tarjeta--separador'>
                                        <img src={destTarjetaSeparador} alt="" />
                                    </span>

                                    <p className='Destacados__carrusel-tarjeta--precio'>
                                        {producto.precio}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button className='Destacados__carrusel-sig Destacados__carrusel-btn'>
                        <img src={destCarruselSig} alt="" onClick={() => carrusel(1)} />
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

                    {categorias.map((categoria) => (

                        <div
                            className="Categorias__tarjeta"
                            key={categoria.categoria}
                        >

                            <div className="Categorias__tarjeta--inner">

                                <img
                                    src={
                                        categoria.tipo === "libro"
                                            ? catFondoLibroImg
                                            : catFondoCafeImg
                                    }
                                    alt=""
                                    className="Categorias__tarjeta-fondo"
                                />

                                <img
                                    src={categoria.img}
                                    alt={categoria.categoria}
                                    className="Categorias__tarjeta-circulo"
                                />

                                <img
                                    src={
                                        categoria.tipo === "libro"
                                            ? catDecoracionImg
                                            : catDecoracionImg1
                                    }
                                    alt=""
                                    className="Categorias__tarjeta-marco"
                                />

                                <div
                                    className={
                                        categoria.tipo === "libro"
                                            ? "Categorias__tarjeta-contenido Categorias__libro"
                                            : "Categorias__tarjeta-contenido Categorias__cafe"
                                    }
                                >

                                    <p className="Categorias__tarjeta-titulo">
                                        {categoria.categoria}
                                    </p>

                                    <p className="Categorias__tarjeta-texto">
                                        {categoria.descripcion}
                                    </p>

                                    <Link
                                        href={`/catalogo?categoria=${encodeURIComponent(categoria.categoria)}&tipo=${encodeURIComponent(categoria.tipo)}`}
                                        className="Categorias__tarjeta-btn"
                                    >
                                        Explorar categoría
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </section>
            <div
                className="overlay"
                onClick={cerrarProducto}
            ></div>

            <div className="producto-especifico">
                {productoSeleccionado && (
                    <ProductoEsp
                        producto={productoSeleccionado}
                        onCerrar={cerrarProducto}
                    />
                )}
            </div>
            <Footer />
            {/* <Carrito/> */}
        </div>
    )
}