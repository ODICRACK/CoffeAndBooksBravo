export const abrirWhatsApp = () => {
    const numeroWhatsApp = "5492901534508";
    const mensaje =
        "Hola! Quería hacer una consulta sobre los productos de 𝐂𝐨𝐟𝐟𝐞𝐞 & 𝐁𝐨𝐨𝐤𝐬";

    const mensajeCodificado = encodeURIComponent(mensaje);

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    window.open(url, "_blank");
};

