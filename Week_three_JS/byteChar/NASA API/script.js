// Clave de la API de la NASA (reemplázala si usas otra)
const API_KEY = "VGhoTUQrsI4HqFkjm04BejMY1xeoNErodniwJjC3";

// URL del endpoint para obtener la imagen astronómica del día (APOD)
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

/**
 * Función asincrónica para obtener la imagen del día desde la API de NASA
 */
async function obtenerImagenDelDia() {
    try {
        const response = await fetch(URL);

        // Validar respuesta
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();

        // Mostrar los datos en el HTML
        mostrarImagen(data);

    } catch (error) {
        console.error("Error al obtener datos de la NASA:", error);

        // Mostrar mensaje de error en el DOM
        const contenedor = document.getElementById("apod");
        contenedor.innerHTML = `
            <p>❌ Ocurrió un error al obtener los datos de la NASA. Intenta nuevamente.</p>
        `;
    }
}

/**
 * función para mostrar la imagen o video en el DOM
 * @param {object} data - Objeto con los datos de la API
 */
function mostrarImagen(data) {
    const contenedor = document.getElementById("apod");

    // Si es una imagen, la mostramos directamente
    if (data.media_type === "image") {
        contenedor.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.url}" alt="${data.title}" style="max-width: 100%; border-radius: 8px;" />
            <p>${data.explanation}</p>
        `;
    } else {
        // Si no es imagen (por ejemplo, un video), mostramos el enlace
        contenedor.innerHTML = `
            <h2>${data.title}</h2>
            <p>🎬 Hoy no hay imagen, pero puedes ver el video aquí:</p>
            <a href="${data.url}" target="_blank">${data.url}</a>
            <p>${data.explanation}</p>
        `;
    }
}

// Ejecutar la función principal al cargar la página
obtenerImagenDelDia();
