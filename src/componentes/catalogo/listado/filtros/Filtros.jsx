import "./filtros.css";
import imgDivisor from "../../../../assets/divisorFiltros.svg"
import { useState } from "react";

export default function Filtros({ categoriaActiva }) {

    const [selectActivo, setSelectActivo] = useState(null);
    const [filtrosEspAbiertos, setFiltrosEspAbiertos] = useState(false);
    return(
        <div className="select">
            <div className="select_div">
                <div
                    className={`select_div-header ${selectActivo === "ordenar" ? "active" : ""}`}
                    onClick={() =>
                        setSelectActivo(selectActivo === "ordenar" ? null : "ordenar")
                    }
                >
                    <p className="select_div-header-lavel">Ordenar por</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Relevancia</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className={`select-ul ${selectActivo === "ordenar" ? "active" : ""}`}>
                    <li className="select_div-header-div-opc" data-value="relevancia" onClick={() => setSelectActivo(null)}>Relevancia</li>
                    <li className="select_div-header-div-opc" data-value="mas-vendidos" onClick={() => setSelectActivo(null)}>Más vendidos</li>
                    <li className="select_div-header-div-opc" data-value="menos-vendidos" onClick={() => setSelectActivo(null)}>Menos vendidos</li>
                    <li className="select_div-header-div-opc" data-value="mas-recientes" onClick={() => setSelectActivo(null)}>Más recientes</li>
                    <li className="select_div-header-div-opc" data-value="menos-recientes" onClick={() => setSelectActivo(null)}>Menos recientes</li>
                </ul>
            </div>
            <div className={`select_div-fltrosEsp cafe ${ filtrosEspAbiertos && categoriaActiva === "cafe"? "active" : "" }`}>
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Tipo</h3>
                <div className="grupo-select_div-fltrosEsp-checks">
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Todos
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        En grano
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Molido
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        En cápsula
                    </label>
                </div>
                <div className="select_div-fltrosEsp-linea-decorativa2">
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Intensidad</h3>
                <div className="grupo-select_div-fltrosEsp-checks">
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Suave
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Intermedio
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Intenso
                    </label>
                    <label className="check">
                        <input type="checkbox" />
                        <span className="check-mark"></span>
                        Muy intenso
                    </label>
                </div>
            </div>

            <div className={`select_div-fltrosEsp libro ${ filtrosEspAbiertos && categoriaActiva === "libros" ? "active" : "" }`}>
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Género</h3>
                <div className="select_div select_div-mini">
                    <div
                        className={`select_div-header mini ${
                            selectActivo === "genero" ? "active" : ""
                        }`}
                        onClick={() =>
                            setSelectActivo(
                                selectActivo === "genero" ? null : "genero"
                            )
                        }
                    >
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                    </div>

                    <ul
                        className={`select-ul genero ${
                            selectActivo === "genero" ? "active" : ""
                        }`}
                    >
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Fantasia</li>
                        <li className="select_div-header-div-opc">Romance</li>
                        <li className="select_div-header-div-opc">Terror</li>
                        <li className="select_div-header-div-opc">Drama</li>
                        <li className="select_div-header-div-opc">Policial</li>
                        <li className="select_div-header-div-opc">Novela</li>
                    </ul>
                </div>

                <div className="select_div-fltrosEsp-linea-decorativa2">
                    <img src={imgDivisor} alt="" />
                </div>

                <h3>Formato</h3>

                <div className="select_div select_div-mini">
                    <div
                        className={`select_div-header mini ${
                            selectActivo === "formato" ? "active" : ""
                        }`}
                        onClick={() =>
                            setSelectActivo(
                                selectActivo === "formato" ? null : "formato"
                            )
                        }
                    >
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                    </div>

                    <ul
                        className={`select-ul formato ${
                            selectActivo === "formato" ? "active" : ""
                        }`}
                    >
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Tapa blanda</li>
                        <li className="select_div-header-div-opc">Tapa dura</li>
                        <li className="select_div-header-div-opc">Digital</li>
                    </ul>
                </div>
            </div>
            {categoriaActiva !== "todos" && (
                <div
                    className={`select_div-esp ${
                        filtrosEspAbiertos ? "active" : ""
                    }`}
                    onClick={() =>
                        setFiltrosEspAbiertos(!filtrosEspAbiertos)
                    }
                >
                    <span className="material-symbols-outlined">
                        tune
                    </span>
                </div>
            )}
            <div className="select_div">
                <div className={`select_div-header ${selectActivo === "precio" ? "active" : ""}`}
                    onClick={() =>
                        setSelectActivo(selectActivo === "precio" ? null : "precio")
                    }
                >
                    <p className="select_div-header-lavel">Ordenar por precio</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Todos</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className={`select-ul porPrecio ${selectActivo === "precio" ? "active" : ""}`}>
                    <li className="select_div-header-div-opc" data-value="todos" onClick={() => setSelectActivo(null)} >Todos</li>
                    <li className="select_div-header-div-opc" data-value="mayor-menor" onClick={() => setSelectActivo(null)} >Mayor a menor</li>
                    <li className="select_div-header-div-opc" data-value="menor-mayor" onClick={() => setSelectActivo(null)} >Menor a mayor</li>
                    <li className="select_div-header-div-opc" data-value="ofertas" onClick={() => setSelectActivo(null)} >Ofertas</li>
                </ul>
            </div>
        </div>
    )
}