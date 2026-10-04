let f = function subtract(a, b){
    return a - b;
}

// f(20, 10);
console.log(f(20, 10));
// console.log(subtract); ReferenceError
/*
Jab call f se hi hoga toh subtract likhne ya na likhne se farak
nahi padega
*/
let f1 = function(a, b){
    return a - b;
}

console.log(f1(100, 20));
