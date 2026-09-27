let arr;
console.log(arr);

// Arrays are heterogeneous in JS (means we can add different type of data)
arr = [1,2,3,"Hello World", true];

console.log(arr);

// Loop
for(let i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}

// [1,2,3,4]
arr = [1,2,3,4];
// Update like: [0,1,2,3,4];
arr.unshift(0);// unshift to insert data at front in array
console.log(arr);

arr.shift(); // pop at front in array
console.log(arr);

arr.push(5); // insert at end
console.log(arr);

arr.pop();
console.log(arr);

// We can add at any index in array of js
arr[8] = "My string";
console.log(arr);

// for-of loop also works on array
for(let data of arr){
    console.log(data)
}