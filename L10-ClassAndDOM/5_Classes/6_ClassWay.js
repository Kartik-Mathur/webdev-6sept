class vehicle{
    constructor(){

    }
    
}

class car extends vehicle{
    constructor(){

    }
}

class bike extends vehicle{
    constructor(){

    }
}

console.log(car.prototype.__proto__ == vehicle.prototype);
console.log(bike.prototype.__proto__ == vehicle.prototype);
console.log(vehicle.prototype.__proto__ == Object.prototype);