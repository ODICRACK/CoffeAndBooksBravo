import Style from "./SearchMovile.module.css"
import lineaSearch from "../../assets/lineaSearch.svg"
import cafe from "../../assets/cafe.svg"
//import libro from "../../assets/libro.svg"
//import cafeLibro from "../../assets/libroCafe.svg"

import Header from "../Header/Header"
export default function SearchMovile() {
    return (
        <div className={Style["hola"]}>
            <Header modo="busqueda" />

            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>
            <div className={Style["div--div"]}>
                <img src={lineaSearch} alt="Separacion linea" />
                <div>
                    <img src={cafe} alt="" />
                    <h2>Cafe americano de america</h2>
                </div>
            </div>

        </div>
    )
}