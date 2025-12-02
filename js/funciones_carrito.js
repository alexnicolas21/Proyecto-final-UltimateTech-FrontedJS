import {guardar_carrito, obtener_carrito, vaciar_carrito_storage} from "./storage.js";
import {actualizar_contador, mostrar_mensaje} from "./ui.js";

export const agregar_carrito = (producto) => {
    const carrito = obtener_carrito() || [];
    carrito.push(producto);
    guardar_carrito(carrito);
    actualizar_contador(carrito);
    mostrar_mensaje("Producto agregado exitosamente!!");
};

export const eliminar_producto = (id) => {
    const carrito = obtener_carrito() || [];
    carrito.splice(id, 1);
    guardar_carrito(carrito);
    actualizar_contador(carrito);
    mostrar_mensaje("Producto eliminado correctamente!!");
};

export const vaciar_carrito = () => {
    vaciar_carrito_storage();
    actualizar_contador([]);
    mostrar_mensaje("Carrito vacío!!");
};