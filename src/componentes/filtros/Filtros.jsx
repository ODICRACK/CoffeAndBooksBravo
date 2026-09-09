import "./filtros.css";
import imgDivisor from "../../assets/divisorFiltros.svg"
import { useState } from "react";
import { useLocation, useSearch } from "wouter";

const TODAS_INTENSIDADES = ["suave", "intermedio", "intenso", "muy-intenso"];

export default function Filtros({ categoriaActiva }) {
    const [dropdownActivo, setDropdownActivo] = useState(null);
    const [filtrosEspAbiertos, setFiltrosEspAbiertos] = useState(false);

    const [location, setLocation] = useLocation();
    const searchString = useSearch();
    const params = new URLSearchParams(searchString);

    // Estados actuales desde URL
    const ordenActual = Number(params.get("orden")) || 0;
    const precioActual = Number(params.get("precio")) || 0;

    // Café: Si no hay parámetro, es array vacío ("Todos"). Si hay, lo separamos por comas
    const tiposCafeActuales = params.get("tipoCafe") ? params.get("tipoCafe").split(",") : [];
    // Café: Si no hay parámetro, todas están activas por defecto.
    const intensidadesActuales = params.get("intensidad") ? params.get("intensidad").split(",") : TODAS_INTENSIDADES;

    // Libros
    const generoActual = params.get("genero") || "";
    const formatoActual = params.get("formato") || "";

    // Actualiza URL para parámetros numéricos/únicos
    const actualizarParametro = (clave, valor) => {
        // CORRECCIÓN: Leemos la URL real del navegador para no perder 'busqueda'
        const nuevosParams = new URLSearchParams(window.location.search);

        if (valor === 0 || valor === "todos" || valor === "") nuevosParams.delete(clave);
        else nuevosParams.set(clave, valor);

        setLocation(`${location}?${nuevosParams.toString()}`);
        setDropdownActivo(null); // Cerrar menú
    };

    // Actualiza URL para checkboxes de Tipo de Café
   const toggleTipoCafe = (valor) => {
        const nuevosParams = new URLSearchParams(window.location.search);
        
        if (valor === "todos") {
            nuevosParams.delete("tipoCafe");
        } else {
            let tipos = [...tiposCafeActuales];
            if (tipos.includes(valor)) {
                tipos = tipos.filter(t => t !== valor);
            } else {
                tipos.push(valor);
            }
            
            if (tipos.length === 0) nuevosParams.delete("tipoCafe");
            else nuevosParams.set("tipoCafe", tipos.join(","));
        }
        setLocation(`${location}?${nuevosParams.toString()}`);
    };

    // Actualiza URL para checkboxes de Intensidad
    const toggleIntensidad = (valor) => {
        const nuevosParams = new URLSearchParams(window.location.search);
        let intensidades = [...intensidadesActuales];
        
        if (intensidades.includes(valor)) {
            intensidades = intensidades.filter(i => i !== valor);
        } else {
            intensidades.push(valor);
        }

        if (intensidades.length === TODAS_INTENSIDADES.length || intensidades.length === 0) {
            nuevosParams.delete("intensidad");
        } else {
            nuevosParams.set("intensidad", intensidades.join(","));
        }
        setLocation(`${location}?${nuevosParams.toString()}`);
    };

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

    // Capitalizar texto para mostrar en el botón
    const formatoLabel = formatoActual ? formatoActual.replace("-", " ") : "Todos";
    const generoLabel = generoActual ? generoActual : "Todos";

    return (
        <div className="select">
            {/* ORDENAR POR (Global) */}
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
                    <label className="check">
                        <input type="checkbox" checked={tiposCafeActuales.length === 0} onChange={() => toggleTipoCafe("todos")} />
                        <span className="check-mark"></span>Todos
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={tiposCafeActuales.includes("en-grano")} onChange={() => toggleTipoCafe("en-grano")} />
                        <span className="check-mark"></span>En grano
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={tiposCafeActuales.includes("molido")} onChange={() => toggleTipoCafe("molido")} />
                        <span className="check-mark"></span>Molido
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={tiposCafeActuales.includes("en-capsula")} onChange={() => toggleTipoCafe("en-capsula")} />
                        <span className="check-mark"></span>En cápsula
                    </label>
                </div>
                <div className="select_div-fltrosEsp-linea-decorativa2"><img src={imgDivisor} alt="" /></div>

                <h3>Intensidad</h3>
                <div className="grupo-select_div-fltrosEsp-checks">
                    <label className="check">
                        <input type="checkbox" checked={intensidadesActuales.includes("suave")} onChange={() => toggleIntensidad("suave")} />
                        <span className="check-mark"></span>Suave
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={intensidadesActuales.includes("intermedio")} onChange={() => toggleIntensidad("intermedio")} />
                        <span className="check-mark"></span>Intermedio
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={intensidadesActuales.includes("intenso")} onChange={() => toggleIntensidad("intenso")} />
                        <span className="check-mark"></span>Intenso
                    </label>
                    <label className="check">
                        <input type="checkbox" checked={intensidadesActuales.includes("muy-intenso")} onChange={() => toggleIntensidad("muy-intenso")} />
                        <span className="check-mark"></span>Muy intenso
                    </label>
                </div>
            </div>

            {/* SECCIÓN LIBROS */}
            <div className={`select_div-fltrosEsp libro ${filtrosEspAbiertos && (categoriaActiva === "libro" || categoriaActiva === "libros") ? "active" : ""}`}>
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Género</h3>
                <div className="select_div select_div-mini">
                    <div className={`select_div-header mini ${dropdownActivo === "genero" ? "active" : ""}`} onClick={() => setDropdownActivo(dropdownActivo === "genero" ? null : "genero")}>
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc" style={{ textTransform: 'capitalize' }}>{generoLabel}</span>
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                    <ul className={`select-ul genero ${dropdownActivo === "genero" ? "active" : ""}`}>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "todos")}>Todos</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "fantasia")}>Fantasía</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "romance")}>Romance</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "terror")}>Terror</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "drama")}>Drama</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "policial")}>Policial</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("genero", "novela")}>Novela</li>
                    </ul>
                </div>
                <div className="select_div-fltrosEsp-linea-decorativa2"><img src={imgDivisor} alt="" /></div>

                <h3>Formato</h3>
                <div className="select_div select_div-mini">
                    <div className={`select_div-header mini ${dropdownActivo === "formato" ? "active" : ""}`} onClick={() => setDropdownActivo(dropdownActivo === "formato" ? null : "formato")}>
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc" style={{ textTransform: 'capitalize' }}>{formatoLabel}</span>
                            <span className="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                    <ul className={`select-ul formato ${dropdownActivo === "formato" ? "active" : ""}`}>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("formato", "todos")}>Todos</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("formato", "tapa-blanda")}>Tapa blanda</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("formato", "tapa-dura")}>Tapa dura</li>
                        <li className="select_div-header-div-opc" onClick={() => actualizarParametro("formato", "digital")}>Digital</li>
                    </ul>
                </div>
            </div>

            {/* BOTÓN FILTROS ESPECÍFICOS */}
            {categoriaActiva !== "todos" && (
                <div className={`select_div-esp ${filtrosEspAbiertos ? "active" : ""}`} onClick={() => setFiltrosEspAbiertos(!filtrosEspAbiertos)}>
                    <span className="material-symbols-outlined">tune</span>
                </div>
            )}

            {/* ORDENAR POR PRECIO */}
            <div className="select_div">
                <div className={`select_div-header ${dropdownActivo === "precio" ? "active" : ""}`} onClick={() => setDropdownActivo(dropdownActivo === "precio" ? null : "precio")}>
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