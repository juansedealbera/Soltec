import { renderizarProductos } from './vista.mjs';

// Función para obtener productos y renderizarlos
const cargarProductos = async () => {
    try {
        const res = await fetch('/api/productos');
        if (!res.ok) throw new Error('Error al obtener productos');
        const productos = await res.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error(error);
        const contenedor = document.getElementById('productos-grid');
        if (contenedor) {
            contenedor.innerHTML = '<p>Error al cargar los productos. Por favor intenta más tarde.</p>';
        }
    }
};

// Cargar productos al iniciar
cargarProductos();
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

// Lógica menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('abierto');
    });
}

