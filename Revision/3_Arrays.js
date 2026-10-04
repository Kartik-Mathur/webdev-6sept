/*
Arrays are heterogeneous in JS
*/

let arr = [1,2,3,4];
console.log(arr);

arr = [1, 'hello', true, 1.11];
console.log(arr);

arr[10] = "Random";
console.log(arr);

for(let e of arr){
    console.log(e);
}


arr.push("People"); // Insertion at end
console.log(arr);

arr.pop(); // Deletion at end
console.log(arr);

arr.unshift("World"); // Insertion at front
console.log(arr);

arr.shift(); // Deletion at front
console.log(arr);
