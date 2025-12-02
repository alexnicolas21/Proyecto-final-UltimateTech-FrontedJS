export const actualizar_contador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
};

export const mostrar_mensaje = (texto) => {
    alert(texto);
};