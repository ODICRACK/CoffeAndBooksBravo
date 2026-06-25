import "./filtros.css";
export default function Filtros(){
    return(
        <div className="select">
            <div className="select_div">
                <div className="select_div-header">
                    <p className="select_div-header-lavel">Ordenar por</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Relevancia</span>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className="select-ul" style={{ display: "none" }}>
                    <li className="select_div-header-div-opc" data-value="relevancia">Relevancia</li>
                    <li className="select_div-header-div-opc" data-value="mas-vendidos">Más vendidos</li>
                    <li className="select_div-header-div-opc" data-value="menos-vendidos">Menos vendidos</li>
                    <li className="select_div-header-div-opc" data-value="mas-recientes">Más recientes</li>
                    <li className="select_div-header-div-opc" data-value="menos-recientes">Menos recientes</li>
                </ul>
            </div>
            <div className="select_div">
                <div className="select_div-header">
                    <p className="select_div-header-lavel">Ordenar por precio</p>
                    <div className="select_div-header-div">
                        <span className="select_div-header-div-opc">Todos</span>
                        <span class="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
                <ul className="select-ul" style={{ display: "none" }}>
                    <li data-value="todos">Todos</li>
                    <li data-value="mayor-menor">Mayor a menor</li>
                    <li data-value="menor-mayor">Menor a mayor</li>
                    <li data-value="ofertas">Ofertas</li>
                </ul>
            </div>
        </div>
    )
}