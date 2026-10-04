/*
Let is a block scope
Var is a functional scope
*/

let a = 10;

console.log(x);

if(a > 0){
    var x = 20;
    console.log(x);
}

console.log(x);