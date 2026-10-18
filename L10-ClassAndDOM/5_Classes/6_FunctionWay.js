function vehicle(){

}

function car(){

}

function bike(){

}

console.log(vehicle.prototype.__proto__ == Object.prototype);
console.log(car.prototype.__proto__ == Object.prototype);
console.log(bike.prototype.__proto__ == Object.prototype);

car.prototype = Object.create(vehicle.prototype);
bike.prototype = Object.create(vehicle.prototype);

console.log(car.prototype.__proto__ == vehicle.prototype);
console.log(bike.prototype.__proto__ == vehicle.prototype);

console.log(car.prototype.__proto__ == Object.prototype);