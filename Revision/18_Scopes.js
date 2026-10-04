let a = 10;
let x = 100;

console.log(x);

if(a > 0){
    console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = 20;
    console.log(x);
}

console.log(x);
