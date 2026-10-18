// We are using function as Constructor Function
function Car(name, color){
    this.name = name;
    this.color = color;
}

let maruti = new Car("Maruti", "White");
let bmw = new Car("Bmw", "Blue");

console.log(maruti);
console.log(bmw);