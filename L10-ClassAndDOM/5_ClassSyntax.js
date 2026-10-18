/*
Here classes helps in prototype chaining
- JS is not OOPS oriented
- Class as a syntax exist karti hai that helps with prototype chaining..
- new keyword se class ka object banate hai that is the binding wala part
- Constructor function hota hai class mei
- Getter and Setter bhi hote hai class mei
- Private data members bhi bana skte hai class mei
- function bhi bann jaate hai class mei
- But yeh OOPS nhi hai
*/

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  printCar() {
    console.log("Name", this.name);
    console.log("Model", this.model);
  }
}

let maruti = new Car("Maruti", "White");
let bmw = new Car("Bmw", "Blue");

console.log(maruti);
console.log(bmw);

console.log(Car.prototype);
console.log(maruti.__proto__ == Car.prototype);
maruti.printCar();
bmw.printCar();

console.log(maruti.__proto__.__proto__ == Object.prototype);
console.log(maruti.__proto__.__proto__.__proto__ == null);

console.log(typeof(Car));