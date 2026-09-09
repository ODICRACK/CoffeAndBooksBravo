//TODAS LAS FUNCIONES DEL CARRITO

export function obtenerCarrito() {
    const carrito = localStorage.getItem("carrito");

    if (!carrito) {
        return [];
    }

    return JSON.parse(carrito);
}

export function vaciarCarrito() {
    localStorage.removeItem("carrito");

    return [];
}

export function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();

    const productoExistente = carrito.find(
        (item) => item.id === producto.id
    );

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            productoTipo: producto.productoTipo,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

export function eliminarDelCarrito(id) {
    const carrito = obtenerCarrito();

    const carritoActualizado = carrito.filter(
        (producto) => producto.id !== id
    );

    localStorage.setItem(
        "carrito",
        JSON.stringify(carritoActualizado)
    );

    return carritoActualizado;
}

export function aumentarCantidad(id) {
    const carrito = obtenerCarrito();

    const carritoActualizado = carrito.map((producto) => {
        if (producto.id === id) {
            return {
                ...producto,
                cantidad: producto.cantidad + 1
            };
        }

        return producto;
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carritoActualizado)
    );

    return carritoActualizado;
}


export function disminuirCantidad(id) {
    const carrito = obtenerCarrito();

    const carritoActualizado = carrito.map((producto) => {
        if (producto.id === id && producto.cantidad > 1) {
            return {
                ...producto,
                cantidad: producto.cantidad - 1
            };
        }

        return producto;
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carritoActualizado)
    );

    return carritoActualizado;
}

export function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => {
        const precio = parseFloat(
            producto.precio
                .replace("$", "")
                .replace(/,/g, "")
        );

        return total + precio * producto.cantidad;
    }, 0);
}