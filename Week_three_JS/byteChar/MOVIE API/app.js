let pagina = 1;
const btnPrev = document.getElementById('btnAnterior');
const btnNext = document.getElementById('btnSiguiente');

btnNext.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina++;
        cargarPeliculas();
    }
});

btnPrev.addEventListener('click', () => {
    if (pagina > 1) {
        pagina--;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b7a184cb346ca4f89f9a082c072c016b&page=${pagina}`);

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            mostrarPeliculas(datos.results);
        } else if (respuesta.status === 401) {
            console.error('No autorizado: API Key incorrecta');
        } else {
            console.error('Error desconocido');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
};

const mostrarPeliculas = (peliculas) => {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = peliculas.map(pelicula => `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h2>${pelicula.title}</h2>
      <p>Popularidad: ${pelicula.popularity}</p>
    </div>
  `).join('');
};

cargarPeliculas();
