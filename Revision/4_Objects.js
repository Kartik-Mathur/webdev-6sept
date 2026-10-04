let obj = {
  a: "hello",
  b: 10,
  c: true,
  " ": "I am space",
  "first name": "Kartik",
  movies: ["Hulk", "Ironman"],
  10: ["Aryan", "Mayank"],
};

console.log(obj);
console.log(obj.a);
console.log(obj["a"]);
// console.log(obj."first name"); // ERROR
// console.log(obj.first name); // ERROR
console.log(obj["first name"]);

for (let key in obj) {
  console.log(key, " : ", obj[key]);
}
