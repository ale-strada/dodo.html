import tienda from "./tienda.js";
import { renderizarProductos } from "./funciones.js";

const contenedor = document.getElementById("productos-container");

renderizarProductos(tienda.productos, contenedor);

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const mostrarMiCarrito = document.getElementById("mostrar-carrito");
const miCarrito = document.getElementById("carrito");

// Escuchar el clic en el botón hamburguesa
menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("active"); // Cambiar el icono a "X"
	navMenu.classList.toggle("show"); // Mostrar/ocultar el menú
});

// Escuchar el clic en el botón de mostrar el carrito
mostrarMiCarrito.addEventListener("click", () => {
	miCarrito.classList.toggle("show");
});
