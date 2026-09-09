import "./filtros.css";
import imgDivisor from "../../assets/divisorFiltros.svg"
import { useState } from "react";
import { useLocation, useSearch } from "wouter"; // Importaciones de wouter

export default function Filtros({ categoriaActiva }) {
    // Para controlar los menús desplegables en la UI
    const [dropdownActivo, setDropdownActivo] = useState(null); 
    const [filtrosEspAbiertos, setFiltrosEspAbiertos] = useState(false);

    // Hooks de wouter para manejar la URL
    const [location, setLocation] = useLocation();
    const searchString = useSearch();

    // Extraemos los valores actuales de la URL para mostrar el estado activo
    const params = new URLSearchParams(searchString);
    const ordenActual = Number(params.get("orden")) || 0;
    const precioActual = Number(params.get("precio")) || 0;

    // Función para actualizar la URL
    const actualizarParametro = (clave, valor) => {
        const nuevosParams = new URLSearchParams(searchString);
        
        if (valor === 0) {
            nuevosParams.delete(clave); // Limpiar URL si vuelve a default
        } 
        else {
            nuevosParams.set(clave, valor);
        }

        setLocation(`${location}?${nuevosParams.toString()}`);
        setDropdownActivo(null); // Cerrar menú al seleccionar
    };

    // Textos dinámicos para los botones basados en la URL
    const getTextoOrden = () => {
        switch (ordenActual) {
            case 1: return "Más vendidos";
            case 2: return "Menos vendidos";
            case 3: return "Más recientes";
            case 4: return "Menos recientes";
            default: return "Relevancia";
        }
    };

    const getTextoPrecio = () => {
        switch (precioActual) {
            case 1: return "Mayor a menor";
            case 2: return "Menor a mayor";
            case 3: return "Ofertas";
            default: return "Todos";
        }
    };

    return (
        <div className="select">
            <div className="select_div">
                <div className={`select_div-header ${dropdownActivo === "ordenar" ? "active" : ""}`} onClick={() => setDropdownActivo(dropdownActivo === "ordenar" ? null : "ordenar")}>
                    <p className="select_div-header-lavel">Ordenar por</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">{getTextoOrden()}</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className={`select-ul ${dropdownActivo === "ordenar" ? "active" : ""}`}>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("orden", 0)}>Relevancia</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("orden", 1)}>Más vendidos</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("orden", 2)}>Menos vendidos</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("orden", 3)}>Más recientes</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("orden", 4)}>Menos recientes</li>
                </ul>
            </div>

            {/* SECCIÓN CAFÉ */}
            <div className={`select_div-fltrosEsp cafe ${filtrosEspAbiertos && categoriaActiva === "cafe" ? "active" : ""}`}>
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Tipo</h3>
                <div className="grupo-select_div-fltrosEsp-checks">
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Todos</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>En grano</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Molido</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>En cápsula</label>
                </div>
                <div className="select_div-fltrosEsp-linea-decorativa2"><img src={imgDivisor} alt="" /></div>
                <h3>Intensidad</h3>
                <div className="grupo-select_div-fltrosEsp-checks">
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Suave</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Intermedio</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Intenso</label>
                    <label className="check"><input type="checkbox" /><span className="check-mark"></span>Muy intenso</label>
                </div>
            </div>

            {/* SECCIÓN LIBROS */}
            <div className={`select_div-fltrosEsp libro ${filtrosEspAbiertos && categoriaActiva === "libro" ? "active" : ""}`}>
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Género</h3>
                <div className="select_div select_div-mini">
                    <div 
                        className={`select_div-header mini ${dropdownActivo === "genero" ? "active" : ""}`}
                        onClick={() => setDropdownActivo(dropdownActivo === "genero" ? null : "genero")}
                    >
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                    <ul className={`select-ul genero ${dropdownActivo === "genero" ? "active" : ""}`}>
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Fantasia</li>
                        <li className="select_div-header-div-opc">Romance</li>
                        <li className="select_div-header-div-opc">Terror</li>
                        <li className="select_div-header-div-opc">Drama</li>
                        <li className="select_div-header-div-opc">Policial</li>
                        <li className="select_div-header-div-opc">Novela</li>
                    </ul>
                </div>
                <div className="select_div-fltrosEsp-linea-decorativa2"><img src={imgDivisor} alt="" /></div>
                <h3>Formato</h3>
                <div className="select_div select_div-mini">
                    <div 
                        className={`select_div-header mini ${dropdownActivo === "formato" ? "active" : ""}`}
                        onClick={() => setDropdownActivo(dropdownActivo === "formato" ? null : "formato")}
                    >
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                    <ul className={`select-ul formato ${dropdownActivo === "formato" ? "active" : ""}`}>
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Tapa blanda</li>
                        <li className="select_div-header-div-opc">Tapa dura</li>
                        <li className="select_div-header-div-opc">Digital</li>
                    </ul>
                </div>
            </div>

            {/* BOTÓN FILTROS ESPECÍFICOS */}
            {categoriaActiva !== "todos" && (
                <div 
                    className={`select_div-esp ${filtrosEspAbiertos ? "active" : ""}`} 
                    onClick={() => setFiltrosEspAbiertos(!filtrosEspAbiertos)}
                >
                    <span className="material-symbols-outlined">tune</span>
                </div>
            )}

            {/* SECCIÓN PRECIO */}
            <div className="select_div">
                <div 
                    className={`select_div-header ${dropdownActivo === "precio" ? "active" : ""}`}
                    onClick={() => setDropdownActivo(dropdownActivo === "precio" ? null : "precio")}
                >
                    <p className="select_div-header-lavel">Ordenar por precio</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">{getTextoPrecio()}</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className={`select-ul porPrecio ${dropdownActivo === "precio" ? "active" : ""}`}>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("precio", 0)}>Todos</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("precio", 1)}>Mayor a menor</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("precio", 2)}>Menor a mayor</li>
                    <li className="select_div-header-div-opc" onClick={() => actualizarParametro("precio", 3)}>Ofertas</li>
                </ul>
            </div>
        </div>
    )
}