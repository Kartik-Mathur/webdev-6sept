/*
Because of HOF ek issue arise hoga that is 
*/
function createFun(){
    let a = 10;

    function fun(){
        console.log(a);
    }

    return fun;
}

let f = createFun();
/*
    // fun toh aa gaya but a upar hi reh gaya parent mei
    // JS is issue ko solve karta hai using CLOSURE concept.
    f = function fun(){
        console.log(a);
    }
*/