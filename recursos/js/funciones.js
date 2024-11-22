export function renderizarProductos(productos, contenedor, agregarAlCarrito) {
	// Recorrer el array de productos y crear el HTML
	productos.forEach((producto) => {
		const productoHTML = `
		<article class="articulo" id="producto-${producto.id}">
      <img
        src="${producto.imagen}"
        width="140"
        height="140"
        class="articulo-img"
        alt="${producto.nombre}"
      />
      
      <div class="productos">
        <div class="p_titulo">
          <h3 class="p_producto">${producto.nombre}</h3>
          <button id="agregar-${producto.id}" class="btn-agregar-carrito" data-id="${producto.id}">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <p>${producto.descripcion}</p>
        <p style="font-weight: bold">$ ${producto.precio}</p>
      </div>
    </article>
    `;

		// Agregar el artículo al contenedor
		contenedor.innerHTML += productoHTML;
	});

	// Agregar manejadores de eventos para los botones
	// const botones = contenedor.querySelectorAll(".btn-agregar-carrito");
	// botones.forEach((boton) => {
	// 	boton.addEventListener("click", () => {
	// 		const productoId = boton.getAttribute("data-id");
	// 		agregarAlCarrito(productoId); // Llama a la función pasada como parámetro
	// 	});
	// });
}

// export function agregarAlCarrito(productoId) {
// 	const producto = productos.find((prod) => prod.id === parseInt(productoId));
// 	if (producto) {
// 		carrito.push(producto);
// 		console.log("Producto agregado al carrito:", producto);
// 	}
// }
