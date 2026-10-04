/*
- a mei Number store ho skta hai
- a mei Boolean store ho skta hai
- a mei String store ho skta hai
- similarly Function bhi ek datatype hai that can also be 
stored inside a variable a
*/

/*
- a ko print karke 10 milega
- b ko print karke "hello" milega
- jab f ki baat krenge toh vo function dega as uski value mei
function stored hai
*/
let a = 10;
let b = "hello";
let c = true;
// Since they are datatypes can be stored in a variable

let f = function subtract(a, b){
    return a - b;
}

console.log(f(20, 10));

let ans = f(20, 10);
console.log(ans);


function sayHello(){
    console.log("Hello");
}

sayHello();
console.log(sayHello());

console.log(sayHello);
console.log(sayHello.toString());