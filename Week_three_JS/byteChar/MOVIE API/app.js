// Variable para llevar el control de la página actual
let pagina = 1;

// Obtener los botones de anterior y siguiente del DOM
const btnPrev = document.getElementById('btnAnterior');
const btnNext = document.getElementById('btnSiguiente');

// Evento para el botón "Siguiente"
btnNext.addEventListener('click', () => {
    // Si la página es menor a 1000, avanza una página y carga las películas
    if (pagina < 1000) {
        pagina++;
        cargarPeliculas();
    }
});

// Evento para el botón "Anterior"
btnPrev.addEventListener('click', () => {
    // Si la página es mayor a 1, retrocede una página y carga las películas
    if (pagina > 1) {
        pagina--;
        cargarPeliculas();
    }
});

// Función asíncrona para cargar las películas desde la API
const cargarPeliculas = async () => {
    try {
        // Realiza la petición a la API de películas
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b7a184cb346ca4f89f9a082c072c016b&page=${pagina}`);

        // Si la respuesta es exitosa (código 200)
        if (respuesta.status === 200) {
            const datos = await respuesta.json(); // Convierte la respuesta a JSON
            mostrarPeliculas(datos.results); // Muestra las películas en pantalla
        } else if (respuesta.status === 401) {
            // Si la API Key es incorrecta
            console.error('No autorizado: API Key incorrecta');
        } else {
            // Otros errores
            console.error('Error desconocido');
        }
    } catch (error) {
        // Error de red o conexión
        console.error('Error de red:', error);
    }
};

// Función para mostrar las películas en el HTML
const mostrarPeliculas = (peliculas) => {
    const contenedor = document.getElementById('contenedor'); // Contenedor donde se mostrarán las películas
    // Genera el HTML para cada película y lo inserta en el contenedor
    contenedor.innerHTML = peliculas.map(pelicula => `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h2>${pelicula.title}</h2>
      <p>Popularidad: ${pelicula.popularity}</p>
    </div>
  `).join('');
};

// Carga las películas al cargar la página por primera vez
cargarPeliculas();
