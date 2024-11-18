const productos = [
	{
		nombre: "Producto 1",
		descripcion:
			"Descripción del producto 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse, quisquam accusantium cupiditate in distinctio rem ipsam.",
		imagen: "/recursos/productos/trabajo1.jpg",
	},
	{
		nombre: "Producto 2",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id laudantium placeat sequi enim minima excepturi.",
		imagen: "/recursos/productos/trabajo2.jpg",
	},
	{
		nombre: "Producto 3",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam deserunt. Natus, tempora facere quod optio eaque.",
		imagen: "/recursos/productos/trabajo3.jpg",
	},
	{
		nombre: "Producto 4",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit aut nulla. Quibusdam amet eos hic maiores.",
		imagen: "/recursos/productos/trabajo4.jpg",
	},
	{
		nombre: "Producto 5",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos ullam nam molestias vero, autem ex aliquid.",
		imagen: "/recursos/productos/trabajo5.jpg",
	},
	{
		nombre: "Producto 6",
		descripcion:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse, quisquam accusantium cupiditate in distinctio rem ipsam.",
		imagen: "/recursos/productos/trabajo6.jpg",
	},
];
function mostrarProductos(productos) {
	const contenedor = document.getElementById("productos-container");

	// Recorrer el array de productos y crear el HTML
	productos.forEach((producto) => {
		const article = document.createElement("article");

		article.innerHTML = `
      <img
        src="${producto.imagen}"
        width="140"
        height="140"
        class="articulo-img"
        alt="${producto.nombre}"
      />
      <div class="productos">
        <p class="p_producto">${producto.nombre}</p>
        <br />
        <p>${producto.descripcion}</p>
      </div>
    `;

		// Agregar el artículo al contenedor
		contenedor.appendChild(article);
	});
}

// Llamar a la función para mostrar los productos
mostrarProductos(productos);
