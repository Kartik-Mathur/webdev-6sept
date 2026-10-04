let a = 10;
console.log(a);

// JS mei character nahi hota sirf string hota hai
a = 'Hello';
console.log(a)

// In JS there is only Number 
// 10.11 -> Number hai
// 10 -> Number hai
a = 1.11;
console.log(a)

// Boolean
a = true;
console.log(a);
a = false;
console.log(a);

// Double quotes mei bhi string hi banti hai
a = "Hello";
console.log(a)

// We can also write loop on a string
for(let i = 0 ; i < a.length; i++){
    console.log(a[i]) // It automatically adds newline
}

// To print space separated string?
/*
a = "Hello"
Output: H e l l o
Output: H_e_l_l_o_
 */

let x = "";
for(let i = 0 ; i < a.length; i++){
    x += a[i] + '_';
}

console.log(x);
   
a = "Coding"
let i = 0;
while(i < a.length){
    console.log(a[i])
    i++;
}


let t;
console.log(t);
