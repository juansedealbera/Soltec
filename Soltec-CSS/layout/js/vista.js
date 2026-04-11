export function renderizarProductos(productos) {
    const contenedor = document.getElementById('productos-grid');

    // Si la página no tiene productos-grid, no hacer nada
    if (!contenedor) return;

    let html = '';

    productos.forEach((producto) => {
        html += `
            <article class="producto">
                <img 
                    src="${producto.imagen.src}" 
                    alt="${producto.imagen.alt}"
                />

                <h3>${producto.nombre}</h3>

                <ul>
                    ${
                        producto.descripcion
                            ? `<li>${producto.descripcion}</li>`
                            : `<li><a class="btn" href="https://wa.me/5493472581774" target="_blank">Más info</a></li>`
                    }

                    <li>Precio: $ ${producto.precio.toLocaleString('es-AR')}</li>
                </ul>

                <button 
                    class="boton-consulta" 
                    data-id="${producto.id}"
                    data-nombre="${producto.nombre}"
                >
                    Consultar
                </button>
            </article>
        `;
    });

    contenedor.innerHTML = html;
}

