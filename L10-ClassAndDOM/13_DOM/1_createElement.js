let moviesDiv = document.getElementById('movies')
console.log(moviesDiv);

// Create an element
let li = document.createElement('li');
console.log(li);
// li -> <li></li>

// Updating the text inside an element
// 1. innerText
// 2. innerHTML
// li.innerText = `<strong>Hulk</strong>`
li.innerHTML = `<strong>Hulk</strong>`
// li -> <li><strong>Hulk</strong></li>

// We can also add class name in li
li.classList.add("film")
// li -> <li class="film"><strong>Hulk</strong></li>

// li.classList.remove("film") // This will remove the class

// We can also add id to li
li.setAttribute('id','film');
// li -> <li id="film" class="film"><strong>Hulk</strong></li>

// Add the element li to moviesDiv
// appendChild
moviesDiv.appendChild(li);