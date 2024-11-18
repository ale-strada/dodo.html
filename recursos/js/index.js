console.log("Estoy funcionando");

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// Escuchar el clic en el botón hamburguesa
menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("active"); // Cambiar el icono a "X"
	navMenu.classList.toggle("show"); // Mostrar/ocultar el menú
});
