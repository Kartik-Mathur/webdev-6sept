// IIFE -> Immediately Invoked Function Expression
(function () {
  console.log("Hello");
})();

(function (a, b) {
  console.log(a + b);
})(10, 20);

let data = (function () {
  let student = {
    name: "mayank",
    age: 20,
    marks: 99,
  };

  return {
    name: student.name,
    age: student.age,
    getMarks: () => student.marks,
  };
})();

console.log(data);
console.log(data.getMarks())