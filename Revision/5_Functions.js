function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

let ans = add(20, 40);
console.log(ans);

ans = add(20); // b is undefined
console.log(ans); // This is NaN -> Not a Number
