document.addEventListener("DOMContentLoaded", function () {
  const movies = [
    {
      title: "Super Man",
      rating: "⭐ 4.5",
      image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Action/Sci-Fi/Adventure/Fantasy"
    },
    {
      title: "F1: The Movie",
      rating: "⭐ 4.5",
      image: "https://m.media-amazon.com/images/M/MV5BZTYwYjJhNzYtY2ZiZS00ZmYxLWJkZjctYjRlNGIxYjI3ZTU0XkEyXkFqcGc@._V1_.jpg",
      genre: "Action/Drama/Sports"
    },
    {
      title: "Jurassic World Rebirth",
      rating: "⭐ 4.5",
      image: "https://m.media-amazon.com/images/M/MV5BMDE1N2EzMjAtMDY1My00YWE5LWEyYjYtYmE3YjZjNzQwNDhmXkEyXkFqcGc@._V1_.jpg",
      genre: "Action/Sci-Fi/Thriller"
    },
    {
      title: "Maalik",
      rating: "⭐ 4.5",
      image: "https://c.saavncdn.com/950/Maalik-Hindi-2025-20250711124204-500x500.jpg",
      genre: "Action/Crime/Drama/Period"
    }
  ];

  const container = document.getElementById("movieCardsContainer");

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
  <div class="movie-card__rating">${movie.rating}</div>
  <img 
  src="${movie.image}" 
  alt="${movie.title}" 
  class="movie-card__image" 
  loading="lazy" 
  fetchpriority="high"
/>

  <h3 class="movie-card__title">${movie.title}</h3>
  <p class="movie-card__text">${movie.genre}</p>
  <button class="movie-card__button movie-card__button--primary">
    Book Now <span class="movie-card__button-icon">→</span>
  </button>
`;

    container.appendChild(card);
  });
});
