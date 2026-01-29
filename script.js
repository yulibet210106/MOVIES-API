// URL de tu API backend
const API_URL = "http://localhost:3000/movies"; // cambialo si tu backend corre en otro puerto

const container = document.getElementById("movies-container");

async function loadMovies() {
    try {
        const res = await fetch(API_URL);
        const movies = await res.json();

        container.innerHTML = "";

        movies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "movie-card";
            card.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>Error cargando películas.</p>";
        console.error(error);
    }
}

loadMovies();