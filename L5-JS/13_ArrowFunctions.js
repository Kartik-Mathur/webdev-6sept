// Another way to create a function
/*
- Arrow functions are basically Lambda Functions
Lambda functions ka output humesha same rehta hai for same input


λ(n) = sqrt(n)

λ(16) -> 4
*/

let sum = (a,b) => {
    return a + b;
}

let sub = (a,b) => a-b; // by default single line statement is return statement

console.log(sum(10, 20));
console.log(sub(30, 10));