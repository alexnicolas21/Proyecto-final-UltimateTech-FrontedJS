import {obtener_carrito} from "./storage.js"
import {eliminar_producto, vaciar_carrito} from "./funciones_carrito.js";
import {actualizar_contador, mostrar_mensaje} from "./ui.js";

const renderizarCarrito = () =>{
     const carrito = obtener_carrito()
     actualizar_contador(carrito)

     const contenedor = document.getElementById("lista-carrito")
     const acciones_carrito = document.getElementById("acciones-carrito")

     contenedor.innerHTML = ""
     acciones_carrito.innerHTML = ""

     if (!carrito.length) {

        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito esta vacio";

        contenedor.appendChild(mensaje);
        return
     }

     carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("contenedor-tarjeta");
        
        const img = document.createElement("img");
        img.src =  `../${producto.img}`;
        img.alt = producto.nombre;
        
        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;
            
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn");
        btnEliminar.classList.add("btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar Producto"
    
        btnEliminar.addEventListener("click", () => {
            eliminar_producto(indice)
            renderizarCarrito()
        });
        tarjeta.append(img);
        tarjeta.append(titulo);
        tarjeta.append(precio);
        tarjeta.append(btnEliminar);

        contenedor.appendChild(tarjeta);
     });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn");
    btnVaciar.classList.add("btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar Carrito"
    
    btnVaciar.addEventListener("click", ()=>{
        vaciar_carrito()
        renderizarCarrito()
    });

    acciones_carrito.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", ()=>{
    renderizarCarrito();
});