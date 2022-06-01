function Vehicle(name, color, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.fuel = fuel;
  this.wheels = wheels;
  this.drive = function () {
    console.log("Vehicle " + this.name + " drives on the highway! ");
  };
}
Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};
function Car(name, color, fuel) {
  Vehicle.call(this, name, color, fuel, Car.WHEELS); // mostenire
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);
function Moto(name, color, fuel) {
  Vehicle.call(this, name, color, fuel, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.prototype = Object.create(Vehicle.prototype);
function Bus(name, engine, fuel) {
  Vehicle.call(this, name, Bus.WHEELS, engine, fuel, Bus.WHEELS);
}
Bus.WHEELS = 16;
Bus.COLOR = "yellow";
Bus.prototype = Object.create(Vehicle.prototype);

function Highway(vehicles) {
  debugger;
  this.run = function () {
    debugger;
    vehicles.forEach(function (vehicle) {
      vehicle.drive(); // polimorsfism
    });
  };
}
var vehicles = [
  new Moto("bmw", "black"),
  new Car("audi", "red"),
  new Bus("mercedes", "grey"),
  new Car("dacia", "white"),
];

var  sunHighway = new Highway(vehicles);
sunHighway.run();
