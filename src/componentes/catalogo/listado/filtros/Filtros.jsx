import "./filtros.css";
import imgDivisor from "../../../../assets/divisorFiltros.svg"
export default function Filtros(){
    return(
        <div className="select">
            <div className="select_div">
                <div className="select_div-header active">
                    <p className="select_div-header-lavel">Ordenar por</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Relevancia</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className="select-ul active" >
                    <li className="select_div-header-div-opc" data-value="relevancia">Relevancia</li>
                    <li className="select_div-header-div-opc" data-value="mas-vendidos">Más vendidos</li>
                    <li className="select_div-header-div-opc" data-value="menos-vendidos">Menos vendidos</li>
                    <li className="select_div-header-div-opc" data-value="mas-recientes">Más recientes</li>
                    <li className="select_div-header-div-opc" data-value="menos-recientes">Menos recientes</li>
                </ul>
            </div>
            <div className="select_div-fltrosEsp active cafe">
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
            <div className="select_div-fltrosEsp  libro">
                <div className="select_div-fltrosEsp-h2">
                    <h2>FILTROS ESPECIFICOS</h2>
                    <img src={imgDivisor} alt="" />
                </div>
                <h3>Género</h3>

                <div className="select_div select_div-mini">
                    <div className="select_div-header  mini">
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                    </div>

                    <ul className="select-ul  genero" >
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Fantasia</li>
                        <li className="select_div-header-div-opc">Ciencia Ficción</li>
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
                    <div className="select_div-header  mini">
                        <div className="select_div-header-div">
                            <span className="select_div-header-div-opc">Todos</span>
                            <span className="material-symbols-outlined">
                                keyboard_arrow_down
                            </span>
                        </div>
                    </div>

                    <ul className="select-ul  formato" >
                        <li className="select_div-header-div-opc">Todos</li>
                        <li className="select_div-header-div-opc">Tapa blanda</li>
                        <li className="select_div-header-div-opc">Tapa dura</li>
                        <li className="select_div-header-div-opc">Digital</li>
                    </ul>
                </div>
            </div>
            <div className="select_div-esp">
                <span className="material-symbols-outlined">tune</span>
            </div>
            <div className="select_div">
                <div className="select_div-header">
                    <p className="select_div-header-lavel">Ordenar por precio</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Todos</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className="select-ul">
                    <li className="select_div-header-div-opc" data-value="todos">Todos</li>
                    <li className="select_div-header-div-opc" data-value="mayor-menor">Mayor a menor</li>
                    <li className="select_div-header-div-opc" data-value="menor-mayor">Menor a mayor</li>
                    <li className="select_div-header-div-opc" data-value="ofertas">Ofertas</li>
                </ul>
            </div>
        </div>
    )
}