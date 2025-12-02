import { obtener_carrito } from "./storage.js";
import { agregar_carrito } from "./funciones_carrito.js";
import { actualizar_contador} from "./ui.js";
console.log("JS cargado correctamente");
document.body.style.backgroundColor = "yellow";
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtener_carrito();
    actualizar_contador(carrito);

    fetch("./data/productos.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(datos => {
            datos.forEach(producto => {
                const tarjeta = document.createElement("article");
                tarjeta.classList.add("tarjeta-producto");

                const img = document.createElement("img");
                img.alt = producto.nombre;
                img.src = `./${producto.img}`;

                const titulo = document.createElement("h3");
                titulo.textContent = producto.nombre;

                const precio = document.createElement("p");
                precio.textContent = `$${producto.precio}`;

                const boton = document.createElement("button");
                boton.classList.add("btn");
                boton.textContent = "Agregar al Carrito";
                
                boton.addEventListener("click", () => agregar_carrito(producto));

                tarjeta.append(img, titulo, precio, boton);
                contenedor.appendChild(tarjeta);
            });
        })
        .catch(error => console.log(error));
});
