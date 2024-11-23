export function renderizarProductos(productos, contenedor) {
	const carrito = []; // Array para almacenar los productos del carrito
	const carritoDiv = document.getElementById("carrito"); // Div donde se mostrarán los productos del carrito

	// Crear un contenedor para el total
	const totalDiv = document.createElement("div");
	totalDiv.className = "total";
	carritoDiv.appendChild(totalDiv); // Agregar el contenedor al carrito

	// Recorrer el array de productos y crear el HTML
	productos.forEach((producto) => {
		const articulo = document.createElement("article");
		articulo.className = "articulo";
		articulo.id = `producto-${producto.id}`;
		articulo.innerHTML = `
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
          <button class="btn-agregar-carrito" data-id="${producto.id}">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <p>${producto.descripcion}</p>
        <p style="font-weight: bold">$ ${producto.precio}</p>
      </div>
    `;

		// Agregar el artículo al contenedor
		contenedor.appendChild(articulo);

		// RICHARD:
		// No modificar. Este formato (contenedor.innerHTML += productoHTML), genera un error.
		// hace que no funcione el boton de agregar al carrito

		// Agrega event listeners para los botones de agregar
		const buttonAgregar = articulo.querySelector(".btn-agregar-carrito");
		buttonAgregar.addEventListener("click", () => {
			agregarAlCarrito(producto); // Llamar la función para agregar al carrito
		});
	});

	// Función para agregar un producto al carrito
	function agregarAlCarrito(producto) {
		carrito.push(producto); // Agregar el producto al array
		actualizarCarrito(); // Actualizar la visualización del carrito
	}

	// Función para actualizar el contenido del carrito
	function actualizarCarrito() {
		carritoDiv.innerHTML = ""; // Limpiar el contenido anterior, excepto el total

		// Recorrer el array de carrito y crear el HTML
		carrito.forEach((item, index) => {
			const carritoItemHTML = `
        <div class="carrito-item" id="carrito-item-${item.id}">
          <p><strong>${item.nombre}</strong> - $${item.precio}</p>
          <button class="btn-eliminar" data-index="${index}">Borrar</button>
        </div>
      `;
			carritoDiv.innerHTML += carritoItemHTML;
		});

		// Agrega event listeners para los botones de eliminar
		const botonesEliminar = carritoDiv.querySelectorAll(".btn-eliminar");
		botonesEliminar.forEach((button) => {
			button.addEventListener("click", (event) => {
				const index = event.target.getAttribute("data-index");
				eliminarDelCarrito(index);
			});
		});

		// Actualizar el total
		actualizarTotal();
	}

	// Función para eliminar un producto del carrito
	function eliminarDelCarrito(index) {
		carrito.splice(index, 1); // Eliminar el producto del array
		actualizarCarrito(); // Actualizar la visualización del carrito

		// Si el carrito queda vacío, mostrar un mensaje
		if (carrito.length == 0) {
			carritoDiv.innerHTML = `<p class="carrito-vacio">Carrito vacio</p>`;
		}
	}

	// Función para actualizar el total
	function actualizarTotal() {
		let total = 0;
		carrito.forEach((item) => {
			total += item.precio;
		});
		totalDiv.innerHTML = `
    <div class="total-container">
      <span class="total-text">Total: $${total}</span>
      <button class="btn-comprar">Comprar</button>
    </div>
  `;
		carritoDiv.appendChild(totalDiv);
	}
}
