import productos from './productos.js';
import { renderizarProductos } from './vista.js';

// Renderizar productos
renderizarProductos(productos);

// Activa la clase "active" del menú
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Número fijo de WhatsApp
const WHATSAPP_NUMBER = "5493472581774";

// Listener para botón "Consultar"
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-consulta")) {
        const nombre = e.target.dataset.nombre;

        const mensaje = encodeURIComponent(
            `Hola! Me interesa el producto: ${nombre}`
        );

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
    }
});

// Ajuste de altura dinámica del header
function ajustarAlturaHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    const h = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", h + "px");
}

window.addEventListener("load", ajustarAlturaHeader);
window.addEventListener("resize", ajustarAlturaHeader);
window.addEventListener("scroll", ajustarAlturaHeader);

