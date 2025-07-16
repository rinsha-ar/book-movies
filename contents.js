document.addEventListener("DOMContentLoaded", function () {
  const movies = [
    {
      title: "Super Man",
      rating: "⭐ 4.5",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Action/Sci-Fi/Adventure/Fantasy",
    },
    {
      title: "F1: The Movie",
      rating: "⭐ 4.5",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTYwYjJhNzYtY2ZiZS00ZmYxLWJkZjctYjRlNGIxYjI3ZTU0XkEyXkFqcGc@._V1_.jpg",
      genre: "Action/Drama/Sports",
    },
    {
      title: "Jurassic World Rebirth",
      rating: "⭐ 4.5",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDE1N2EzMjAtMDY1My00YWE5LWEyYjYtYmE3YjZjNzQwNDhmXkEyXkFqcGc@._V1_.jpg",
      genre: "Action/Sci-Fi/Thriller",
    },
    {
      title: "Maalik",
      rating: "⭐ 4.5",
      image:
        "https://c.saavncdn.com/950/Maalik-Hindi-2025-20250711124204-500x500.jpg",
      genre: "Action/Crime/Drama/Period",
    },
  ];

  const container = document.getElementById("movieCardsContainer");
  if (!container) return;

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const rating = document.createElement("div");
    rating.className = "movie-card__rating";
    rating.textContent = movie.rating;

    const img = document.createElement("img");
    img.className = "movie-card__image";
    img.src = movie.image;
    img.alt = movie.title;
    img.loading = "lazy";
    img.setAttribute("fetchpriority", "high");

    const title = document.createElement("h3");
    title.className = "movie-card__title";
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.className = "movie-card__text";
    genre.textContent = movie.genre;

    const button = document.createElement("button");
    button.className = "movie-card__button movie-card__button--primary";
    button.setAttribute("aria-label", `Book ${movie.title}`);
    const iconSpan = document.createElement("span");
    iconSpan.className = "movie-card__button-icon";
    iconSpan.textContent = "→";
    button.textContent = "Book Now ";
    button.appendChild(iconSpan);

    card.appendChild(rating);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(button);

    container.appendChild(card);
  });
});
