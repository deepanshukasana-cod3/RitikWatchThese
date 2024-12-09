// Sample movie data
const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    image: "https://imgs.search.brave.com/xg_L3Lq1-oBfT2db3h6GP7qCUc0TLWif5OCPdBYRC-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAy/OTk2OTQ0L2ZyL3Bo/b3RvL3Rva3lvLWFj/dG9yLWxlb25hcmRv/LWRpY2FwcmlvLWF0/dGVuZHMtdGhlLWlu/Y2VwdGlvbi1qYXBh/bi1wcmVtaWVyZS1h/dC1yb3Bwb25naS1o/aWxscy1vbi1qdWx5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1tcDJ6a2NCcWJs/OG5VSGpSVzY2RWND/SGVKU3RackV3XzZ4/ZVFIREtEb0M4PQ",
    link: "https://wwv.moviesjoy.space/inception/"
  },
  {
    title: "2001: A Space Odyssey",
    genre: "Sci-Fi",
    image: "https://imgs.search.brave.com/6MFx5NIhxMBPOEavdHSazWA7ZKqq68Ya5M9InK_0KBo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxdjBVejJuMkdM/LmpwZw",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "The Terminator",
    genre: "Sci-Fi",
    image: "https://imgs.search.brave.com/3vW3s_wxeeLGMi7zzUq353Qiv3AiGwi6Q6X0nnDedic/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlptRTBZekl4/TTJRdE1HTmxNaTAw/TWpSbUxXRTNNV010/T1dRek1HVmpNbVUw/WVRGbVhrRXlYa0Zx/Y0djQC5qcGc",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    image: "https://imgs.search.brave.com/dgXrE8L26DHo3spe2ZMXwvn6uY5bGqI4ghPvzREoopM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk3/MTI2OTkwL3Bob3Rv/L2tlYW51LXJlZXZl/cy1pbi10aGUtMTk5/OS1tb3ZpZS10aGUt/bWF0cml4LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1aaWNq/N0RuUUJQV05scmpP/blA4bW5QNnhaU2pl/LUNkNW84N2ZJaWFq/eFg0PQ",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Die Hard",
    genre: "Action",
    image: "https://imgs.search.brave.com/HdUGFFf4CX-iPWUXppk5HJ2bFIoeABaRCyUbi4aOg6A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFVUZiOENySUwu/anBn",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Joker 2",
    genre: "Drama",
    image: "https://imgs.search.brave.com/TZf-w9ouP-1uM-Ba3mSbH3qMbLvklAPGXTzYZmAulDg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9qb2Fx/dWluLXBob2VuaXgt/am9rZXItMi02NzA5/MDIyOTNhMGRmLmpw/Zz9jcm9wPTAuMzcw/eHc6MC42OTR4aDsw/LjM1M3h3LDAuMTky/eGgmcmVzaXplPTM2/MDoq",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Liar Liar",
    genre: "Comedy", // New genre
    image: "https://imgs.search.brave.com/lu1IT8P9pPiC5ER4k_zZMn6u1RkQO7FZI0gFYaug85U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEzMkNZVEhDTkwu/anBn",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Fault In Our Stars",
    genre: "Movies that make you Cry", // New genre
    image: "https://imgs.search.brave.com/OgU-hQcHsB2b_Z-Ry7Ppanm-NFsEG_xLMAWSU7TCvZA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMudGlkYWwu/Y29tL2ltYWdlcy82/NDUyYWM3NC9hNGQ2/LzQ3MTcvOTJhMC82/YzkwMjg0ZGQwYTEv/NjQweDY0MC5qcGc",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Five Feet Apart",
    genre: "Movies that make you Cry",
    image: "https://imgs.search.brave.com/fSOLRMsVxR5C4j-TTkYtAo3rwjWsY-X5U44J-mBH1qo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6WXhZelZp/WTJRdE5UWTNOeTAw/T0RsaUxUa3hPVGt0/WVRBM01qQTNZalpt/TW1aaVhrRXlYa0Zx/Y0djQC5qcGc",
    link: "https://wwv.moviesjoy.space/five-feet-apart/"
  },
  {
    title: "The NoteBook",
    genre: "Movies that make you Cry",
    image: "https://imgs.search.brave.com/9IREBPrlOOSZc7uRBJvVLtbHpU51MEfjGEhdJg2RrKU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqRTBaamd6/TXpZdE1UQXhZaTAw/TkdNekxUaG1aRGt0/TnpGbE16QTJNV1Jt/WVdRMFhrRXlYa0Zx/Y0djQC5qcGc",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Cast Away",
    genre: "Movies that make you Cry",
    image: "https://imgs.search.brave.com/SAYLDhflnNfCw2r1_uriAFTxuxU_wwSUK-2gYymw7m0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm9vdGJhbGxm/YW5hdGljcy5jb20v/Y2FzdC1hd2F5L3Rv/bS1oYW5rcy1zaWdu/ZWQtY2FzdC1hd2F5/LTExeDE3LW1vdmll/LXBvc3Rlci1waG90/by1iZWNrZXR0LWNv/YS15MDM0NTZfc3Mx/X3AtMTAxMDM0Mzkx/K3Utd2xqbG1qZ2Rn/cm9oenhiYXd3a2Qr/di14c2ZscXd3bm1p/eW5ycWtheGl0bC5q/cGc_X2h2PTImdz0z/NDA",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "Remember Me",
    genre: "Movies that make you Cry",
    image: "https://imgs.search.brave.com/3CaRNdhuvzgTjoLe1vtOJpAWvWlRsBcFZylarpilbWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFvV1R3d015M0wu/anBn",
    link: "https://popcornflix.rest/watch/"
  },
  {
    title: "A walk to Remember",
    genre: "Movies that make you Cry",
    image: "https://imgs.search.brave.com/J2tXlhJks48ogJQiuMc1g3vlKqgvRKXs6_EuKbJZq6o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZXJ2/eW53YXJyZW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy93YWxr/LXRvLXJlbWVtYmVy/LTU0MHg4MTAuanBn",
    link: "https://popcornflix.rest/watch/"
  }
 
];

// Get references to HTML elements
const genreSelect = document.getElementById("genre-select");
const movieList = document.getElementById("movie-list");
const loadingSpinner = document.getElementById("loading-spinner");

// Populate the genre dropdown
const genres = [...new Set(movies.map(movie => movie.genre))];
genres.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreSelect.appendChild(option);
});

// Display movies based on selected genre
genreSelect.addEventListener("change", () => {
  const selectedGenre = genreSelect.value;

  // Show loading spinner
  loadingSpinner.classList.remove("hidden");

  // Simulate loading time
  setTimeout(() => {
    movieList.innerHTML = ""; // Clear the movie list

    const filteredMovies = selectedGenre
      ? movies.filter(movie => movie.genre === selectedGenre)
      : movies;

    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <a href="${movie.link}" target="_blank">Watch Now</a>
      `;

      movieList.appendChild(movieCard);
    });

    // Hide loading spinner
    loadingSpinner.classList.add("hidden");
  }, 1000); // Simulated 1-second delay
});

// Initially show all movies
genreSelect.dispatchEvent(new Event("change"));
