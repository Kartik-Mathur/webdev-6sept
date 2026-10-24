let allFilms = document.querySelectorAll(".film");
console.log(allFilms);

// Issue 1 jitne film ke elements utne
// active eventListeners
for (let i = 0; i < allFilms.length; i++) {
  allFilms[i].addEventListener("click", (ev) => {
    console.log(ev.target.innerText);
  });
}

// Baad mei agar element add kia toh uspar
// event listener kaam nahi krega
let li = document.createElement('li');
li.innerText = 'Superman';
li.classList.add('film');
let movieList = document.querySelector('.movieList');
movieList.appendChild(li);