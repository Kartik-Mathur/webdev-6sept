let movies = document.querySelector(".movies");

let newmovies = ["hulk", "thor", "ironman", "avengers"];

for (let i = 0; i < newmovies.length; i++) {
  let li = document.createElement("li");
  li.classList.add("film");
  li.classList.add(newmovies[i]);
  li.innerText = newmovies[i];

  movies.appendChild(li);
}
