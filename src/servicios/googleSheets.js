const API_KEY = 'AIzaSyDhCnfezRndQ-yTdC5oJ4a9ifOrPl_7J18';
const SPREADSHEET_ID = '1NKnaATTKPDGZ0s8MXoNX7mcUgQ8WsSIz7hBWZ24ZMdg';

//ACA IRIAN LOS SERVICIOS: OBTENER DATOS (GENERAL) - OBTENER CAFÉS, OBTENER LIBROS Y OBTENER PREGUNTAS FRECUENTES

// OBTENER DATOS GENERALES
function obtenerDatos(rango) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${rango}?key=${API_KEY}`;
    return fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) {
                console.error("Error al obtener los datos");
                return [];
            }
            return respuesta.json();
        })
        .then((datos) => {
            return datos.values;
        });
}

// OBTENER CAFÉS
export function obtenerCafes() {
    return obtenerDatos("Cafes!A2:L")
        .then((datos) => {
            return datos
                .filter((fila) => fila[0].trim() !== "")
                .map((fila) => ({
                    id: fila[0],
                    img: fila[1].replace(
                        "https://drive.google.com/file/d/",
                        "https://drive.google.com/thumbnail?id="
                    ).replace("/view?usp=sharing", ""),
                    nombre: fila[2],
                    marca: fila[3],
                    tipo: fila[4],
                    peso: fila[5],
                    intensidad: fila[6],
                    precio: fila[7],
                    oferta: fila[8],
                    descuento: fila[9],
                    vendidos: fila[10],
                    disponible: fila[11],
                    productoTipo: "cafe"
                }));
        });
}

// OBTENER LIBROS
export function obtenerLibros() {
    return obtenerDatos("Libros!A2:L")
        .then((datos) => {
            return datos
                .filter((fila) => fila[0].trim() !== "")
                .map((fila) => ({
                    id: fila[0],
                    img: fila[1].replace(
                        "https://drive.google.com/file/d/",
                        "https://drive.google.com/thumbnail?id="
                    ).replace("/view?usp=sharing", ""),
                    nombre: fila[2],
                    sinopsis: fila[3],
                    autor: fila[4],
                    genero: fila[5],
                    formato: fila[6],
                    precio: fila[7],
                    oferta: fila[8],
                    descuento: fila[9],
                    vendidos: fila[10],
                    disponible: fila[11],
                    productoTipo: "libro"
                }));
        });

}

export function obtenerTodosLosProductos() {
    return obtenerCafes()
        .then((cafes) => {
            return obtenerLibros()
                .then((libros) => {
                    const productos = [];
                    const cantidad = Math.max(
                        cafes.length,
                        libros.length
                    );
                    for (let i = 0; i < cantidad; i++) {
                        if (libros[i]) {
                            productos.push(libros[i]);
                        }
                        if (cafes[i]) {
                            productos.push(cafes[i]);
                        }
                    }
                    return productos;
                });
        });

}

export function obtenerProductosDestacados() {
    return obtenerTodosLosProductos().then((productos) => {
        return productos.sort((a, b) => Number(b.vendidos) - Number(a.vendidos)).slice(0, 10);
    });
}

export function obtenerCategorias() {
    return obtenerDatos("Categorias!A2:E")
        .then((datos) => {
            return datos
                .filter((fila) => fila[0] && fila[4] === "TRUE")
                .slice(0, 6)
                .map((fila) => ({
                    categoria: fila[0],
                    tipo: fila[1],
                    descripcion: fila[2],
                    img: fila[3]
                        .replace(
                            "https://drive.google.com/file/d/",
                            "https://drive.google.com/thumbnail?id="
                        ).replace("/view?usp=sharing", ""),
                }));
        });
}

// OBTENER PREGUNTAS FRECUENTES

export function obtenerPreguntasFrecuentes() {

    return Promise.all([obtenerDatos("Preguntas frecuentes!A2:D"), obtenerDatos("Tipo frecuente!A2:C")])
        .then(([datosPreguntas, datosCategorias]) => {

            const preguntasFrecuentes = datosPreguntas.map((fila) => ({
                id: fila[0],
                tipoId: fila[1],
                pregunta: fila[2],
                respuesta: fila[3]
            }));

            const categoriasFrecuentes = datosCategorias.map((fila) => ({
                id: fila[0],
                nombre: fila[1],
                icono: fila[2]
            }));
            return { categoriasFrecuentes, preguntasFrecuentes };
        });
}
