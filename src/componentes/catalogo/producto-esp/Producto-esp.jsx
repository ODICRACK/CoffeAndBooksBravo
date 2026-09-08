import "./producto-esp.css";
import imgMoneda from "../../../assets/bola.svg";
import imgMarcoCap from "../../../assets/marcoImg-capsula.svg";
import imgNoDisponibleCafe from "../../../assets/img no disponible-cafe.svg";
import imgNoDisponibleLibro from "../../../assets/img no disponible-libro.svg";

export default function ProductoEsp({ producto, onCerrar }) {
    const obtenerClaseCafe = (tipo) => {
        const tipoNormalizado = tipo?.trim().toLowerCase() || "";
        if (
            tipoNormalizado.includes("capsula") ||
            tipoNormalizado.includes("cápsula")
        ) {
            return "capsula";
        }
        if (tipoNormalizado.includes("molido")) {
            return "molido";
        }
        return "enGrano";
    };

    const claseCafe =
        producto?.productoTipo === "cafe"
            ? obtenerClaseCafe(producto.tipo)
            : "";
    if (!producto) {
        return null;
    }

    return (
        <div className={`producto-esp ${producto.productoTipo}`}>
            {producto.productoTipo === "cafe" && (
                <div className={`producto-esp_div cafe ${claseCafe}`}>
                    {claseCafe === "molido" && (
                        <img
                            className={`modeda ${claseCafe}`}
                            src={imgMoneda}
                            alt=""
                        />
                    )}
                    {claseCafe === "capsula" && (
                        <img
                            className={`marcoImg ${claseCafe}`}
                            src={imgMarcoCap}
                            alt=""
                        />
                    )}
                    <h3 className={`peso ${claseCafe}`}>
                        {producto.intensidad}/4
                    </h3>
                    <img
                        className={claseCafe}
                        src={producto.img}
                        alt={producto.nombre}
                        onError={(e) => {
                            e.currentTarget.src = imgNoDisponibleCafe;
                        }}
                    />
                    <h2 className={`nombre ${claseCafe}`}>
                        {producto.nombre}
                    </h2>
                    <h2 className={`gramos ${claseCafe}`}>
                        {producto.peso}
                    </h2>
                </div>
            )}
            {producto.productoTipo === "libro" && (
                <div className="producto-esp_div libroesp">
                    <div className="libroesp">
                        <div className="libro__cara libro__frente">
                            <h2 className="libro__frente-h2">
                                {producto.nombre}
                            </h2>
                            <img
                                src={producto.img}
                                className="libro__frente-img"
                                alt={producto.nombre}
                                onError={(e) => {
                                    e.currentTarget.src =
                                        imgNoDisponibleLibro;
                                }}
                            />
                            <h3 className="libro__frente-h3">
                                {producto.autor}
                            </h3>
                        </div>
                        <div className="libro__cara libro__atras">
                            <div className="libro__atras-contenido">
                                <div className="libro__sinopsis">
                                    <p>
                                        {producto.sinopsis}
                                    </p>
                                </div>
                                <div className="libro__info">
                                    <p>
                                        <strong>Género:</strong>{" "}
                                        {producto.genero}
                                    </p>
                                    <p>
                                        <strong>Formato:</strong>{" "}
                                        {producto.formato}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="producto-esp_btn">
                <p>AÑADIR AL CARRITO</p>
            </div>
        </div>
    );
}