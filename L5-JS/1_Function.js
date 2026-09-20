function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
console.log(sum(10));


/*
function is a datatype
let a = 10;
let s = "Hello";
let b = true;
let f = function(){}
*/

// We cannot call this function by sum1 name
// let add = function sum1(a,b){
//     return a + b;
// }
// console.log(sum1(10, 50)); // Error
// Using function as expression
let add = function(a,b){
    return a + b;
}

// add(10, 50);
console.log(add(10, 50));