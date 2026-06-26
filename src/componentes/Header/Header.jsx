import Style from "./Header.module.css";
import { Link } from "wouter";

import logoHeader from "../../assets/logoHeader.svg"
import bandera from "../../assets/banner.svg"

export default function Header() {
    // return (
    //     <header className={Style.Header}>
    //         <div className={Style["Header__div"]}>
    //             <div className={Style["Header__div-div"]}>
    //                 <div className={Style["Header__div-div-logo"]}>
    //                     <img src={logoHeader} alt="" />
    //                     <h1>Coffee & Books</h1>
    //                 </div>
    //                 <div className={Style["Header__div-div-nav"]}>
    //                     <div className={Style["Header__div-div-nav-nav"]}>
    //                         <h2 className={Style.hache}><Link className={Style.Link}>Catalogo</Link></h2>
    //                         <h2 className={Style.hache}><Link className={Style.Link}>Sobre mi</Link></h2>
    //                         <h2 className={Style.hache}><Link className={Style.Link}>Inicio</Link></h2>

    //                         <div className={Style["BanderaContainer"]}>
    //                             <img src={bandera} alt="" className={Style["Bandera"]}
    //                             />
    //                         </div>

    //                     </div>
    //                     <div className={Style["Header__div-div-nav-iconos"]}>
    //                         <div className={`${Style["Icono"]} ${Style["activo"]}`}>
    //                             <span className="material-symbols-outlined">
    //                                 search
    //                             </span>
    //                             <input type="text" className={Style.Input} />
    //                         </div>

    //                         <div className={`${Style["Icono"]}`}>
    //                             <span className="material-symbols-outlined">
    //                                 shopping_cart
    //                             </span>
    //                         </div>
    //                         <div className={`${Style["Icono"]}`}>
    //                             <span className={Style["ic--baseline-whatsapp"]}></span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </header>
    // )
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
                            <h2 className={Style.hache}><Link className={Style.Link} href="/productos">Catalogo</Link></h2>
                            <h2 className={Style.hache}><Link className={Style.Link} href="/home">Sobre mi</Link></h2>
                            <h2 className={Style.hache}><Link className={Style.Link} href="/home">Inicio</Link></h2>
                            <div className={Style["BanderaContainer"]}>
                                <img src={bandera} alt="" className={Style["Bandera"]}/>
                            </div>
                        </div>
                        <div className={Style["Header__div-div-nav-iconos"]}>
                            <div className={`${Style["Icono"]} ${Style["activo"]}`}>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                                <input type="text" className={Style.Input} />
                            </div>
                            <Link className={`${Style["Icono"]}`} href="/carrito">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </Link>
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