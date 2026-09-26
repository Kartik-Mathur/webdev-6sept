// In JS functions act as variables...
function sum(x, y){
    return x + y;
}

sum(10, 20);
sum(110, 210);

// In JS function is also a datatype like number
// In JS we can pass functions into arguments and return function as a value 
// so any language that does it is said to support Higher Order Function
function callFun(fn){
    // console.log(fn)
    console.log(fn.toString());
    fn();
}

function hello(){
    console.log("Hello");
}

function world(){
    console.log("world");
}

callFun(hello); // Correct way to pass function
callFun(()=>{
    console.log("I am arrow Function");
}); // Correct way to pass function

// callFun(hello()); // Incorrect way of passing function -> Yaha hello function 
// call kar diya, toh jo hello return karega vo chala jaega callFun ke andar


// ------------------------------------------------------------------------------------------
function createFun(){
    function cb(){
        console.log("Welcome to CB");
    }

    return cb; // correct way to return 
    // return cb(); // incorrect way to return a function -> Yaha se jo cb function
    // return karega vo vapis jaega that is undefined...
}

let f = createFun();
f(); // createFun ne function return kia hai toh we can call it...