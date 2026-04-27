const API_URL = "https://69efbb77112e1b968e24f14f.mockapi.io/productos";

export const obtenerProductos = async (req, res) => {
    try {
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) {
            throw new Error(`Error al obtener productos desde la API externa: ${respuesta.status}`);
        }

        const productos = await respuesta.json();
        
        // Respondemos al cliente con el JSON obtenido
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor al obtener productos" });
    }
};
