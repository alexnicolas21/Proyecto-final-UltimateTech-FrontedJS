import { obtener_carrito} from "./storage.js";
import { actualizar_contador} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtener_carrito();
    actualizar_contador();
})