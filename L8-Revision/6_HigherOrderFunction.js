/*
Higher order function ek concept hai where I can pass
function as arguments and even return function from another
function, jo language yeh karti hai that is said to support
Higher Order functions.
*/

function createFun(){

    function hello(){
        console.log("Hello");
    }

    return hello;  // -> function khud return hoga
    // return hello();  // -> undefined return ho jaega
}

let x = createFun();
console.log(x);
x();