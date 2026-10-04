

console.log(f(10, 20));

var f = function (a,b){
    return a + b;
}
var f; // undefined
// -------
// f is not a function
console.log(f(10, 20));

f = function (a,b){
    return a + b;
}
