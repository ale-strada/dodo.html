import tienda from "./tienda.js";
import { renderizarProductos } from "./funciones.js";

const contenedor = document.getElementById("productos-container");
const boton = document.getElementById("boton-carrito");

boton.addEventListener("click", () => {
	console.log("carrito 3");
});

renderizarProductos(tienda.productos, contenedor);

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// Escuchar el clic en el botón hamburguesa
menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("active"); // Cambiar el icono a "X"
	navMenu.classList.toggle("show"); // Mostrar/ocultar el menú
});
