import Style from "./Header.module.css";
import { Link } from "wouter";
import logoHeader from "../../assets/logoHeader.svg"

export default function Header() {
    return (
        <header className={Style.Header}>
            <div className={Style["Header__div"]}>
                <div className={Style["Header__div-div"]}>
                    <div className={Style["Header__div-div-logo"]}>
                        <img src={logoHeader} alt="" />
                        <h1>Coffee & Books</h1>
                    </div>
                    <div className={Style["Header__div-div-nav"]}>
                        <div className={Style["Header__div-div-nav-nav"]}>
                            <h2><Link className={Style.Link}>Catalogo</Link></h2>
                            <h2><Link className={Style.Link}>Sobre mi</Link></h2>
                            <h2><Link className={Style.Link}>Inicio</Link></h2>
                        </div>
                        <div className={Style["Header__div-div-nav-iconos"]}>
                            <div className={`${Style["Icono"]} `}>
                                <span class="material-symbols-outlined">
                                    search
                                </span>
                                <input type="text" className={Style.Input}/>
                            </div>

                            <div className={`${Style["Icono"]}`}>
                                <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </div>
                            <div className={`${Style["Icono"]}`}>
                                <span className={Style["ic--baseline-whatsapp"]}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}