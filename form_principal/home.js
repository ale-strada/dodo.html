console.log("Estoy funcionando");

const burgerButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
burgerButton.addEventListener("click", () => {
	console.log("click, soy menu button");
	navMenu.classList.toggle("open");
});
