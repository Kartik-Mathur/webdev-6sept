function Vehicle(){

}

function Car(){

}


console.log(Car.prototype)
console.log(Vehicle.prototype)
Car.prototype = Object.create(Vehicle.prototype)

// How to check Car.prototype ka parent kaun h?
console.log(Car.prototype.__proto__ == Object.prototype)
console.log(Car.prototype.__proto__ == Vehicle.prototype)
console.log(Vehicle.prototype.__proto__ == Object.prototype)