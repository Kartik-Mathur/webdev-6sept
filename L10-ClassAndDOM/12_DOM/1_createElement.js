console.log("Running");
/*
To add an element on the page 
1. Create an element
2. Select the parent element to add the created element
3. add it and done
*/

// Create an element
let li = document.createElement('li');
console.log(li);

// Selecting an element
/*
document.getElementById("your_id")
document.querySelector() -> Single element select
document.querySelectorAll() -> Collection of multiple elements
*/

let moviesDiv = document.getElementById('movies')
console.log(moviesDiv);