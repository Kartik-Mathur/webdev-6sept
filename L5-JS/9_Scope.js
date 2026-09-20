// JS mei scope
// Let : block scope
// Var : functional scope
// What is block? 
/*
    {
        Curly brackets are block
    }
*/
/*
    let a = 20
    if(a>10){
        let x = -100;
        console.log(x)
    }

    console.log(x) // x is not defined...
*/

let a = 20
if(a>10){
    var x = -100;
    console.log(x)
}

console.log(x)