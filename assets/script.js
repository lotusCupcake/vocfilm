const movies = [
  {
    title: "Guardians of the Galaxy Vol. 3",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Aquaman and the Lost Kingdom",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ1ZTUzMWMtY2VkNS00ZDRjLWEwODYtYmFkMWJiNTQxMDUzXkEyXkFqcGc@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Avengers: Endgame",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "The Roundup: Punishment",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU3N2UwMmEtNTM1ZS00NWQ2LTgzNDUtZDM0NGIyNzZkZTIzXkEyXkFqcGc@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "The Batman",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Inception",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Twilight",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Parasite",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    category: "trending",
  },
  {
    title: "Ghostbusters: Frozen Empire",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGE5MWJmZWYtN2ZlMi00ZjY1LTlhYTUtMzQ2Y2IxZWQyYTA2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Lift",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBlNmEwNzQtZTc5MC00YmVjLTk5NjgtMmM0NDFmZjJkZjYzXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Argylle",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDkzMTU2OWUtZjA2ZS00ZmYxLWE2MzgtZDlhZDc1YjM4Yjk5XkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Wonka",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "The Family Plan",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjcxYmNmNTktZDhlNS00ZGUzLTk2NGUtZDQwMDVmMWZkMjY0XkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Bad Boys: Ride or Die",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Exhuma",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA1OTY1NTYtNDEzZS00OTgyLWI1NWEtNDI5NjBhOTIwNzIyXkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Rebel Moon - Part Two: The Scargiver",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQ2ODgyZjMtMmQyMy00ZWRhLTllOGUtZDI3MDkzNjFhZWQ2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Dune: Part Two",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
  {
    title: "Furiosa: A Mad Max Saga",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTcwYWE1NTYtOWNiYy00NzY3LWIwY2MtNjJmZDkxNDNmOWE1XkEyXkFqcGc@._V1_SX300.jpg",
    category: "latest",
  },
];

function showMovies(mov, search = false) {
  const trending = document.querySelector(".movies-container-trending");
  const latest = document.querySelector(".movies-container-latest");
  const result = document.querySelector(".movies-container-result");

  const trendingSection = document.querySelector("#trending");
  const latestSection = document.querySelector("#latest");
  const resultSection = document.querySelector("#result");

  if (search) {
    if (mov.length === 0) {
      result.innerHTML = "Tidak ada film yang cocok, coba keyword lain deh :)";
      resultSection.removeAttribute("hidden");
      return;
    }
    trendingSection.setAttribute("hidden", true);
    latestSection.setAttribute("hidden", true);
    resultSection.removeAttribute("hidden");
  } else {
    trendingSection.removeAttribute("hidden");
    latestSection.removeAttribute("hidden");
    resultSection.setAttribute("hidden", true);
  }

  trending.innerHTML = "";
  result.innerHTML = "";
  latest.innerHTML = "";

  for (const movie of mov) {
    const element = createElement(movie);
    if (search) {
      result.scrollIntoView({ behavior: "smooth" });
      result.appendChild(element[0]);
    } else {
      if (element[1] === "trending") {
        trending.appendChild(element[0]);
      } else {
        latest.appendChild(element[0]);
      }
    }
  }
}

function createElement(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <div class="cover"><img src=${movie.image} alt=${movie.title} ></div>
    <p>${movie.title}</p>
    `;

  const category = movie.category;
  return [card, category];
}

showMovies(movies);

const searchInput = document.querySelector("#search-input");
const home = document.querySelector("#home");
const navLinks = document.querySelectorAll(".nav-links a");

function searchMovies() {
  let search = true;
  const filter = searchInput.value;
  const filteredMovies = movies.filter((mov) =>
    mov.title.toLowerCase().includes(filter.toLowerCase())
  );
  if (filter === "") {
    search = false;
  }
  showMovies(filteredMovies, search);
}

searchInput.addEventListener("input", searchMovies);

function handlingNav() {
  searchInput.value = "";
  showMovies(movies);
}
navLinks.forEach((link) => link.addEventListener("click", handlingNav));

