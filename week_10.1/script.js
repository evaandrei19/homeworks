function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};
function Car(name, color, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);
function Moto(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.prototype = Object.create(Vehicle.prototype);
function Bus(name, engine, fuel) {
  Vehicle.call(this, name, Bus.WHEELS, engine, fuel, Bus.WHEELS);
}
Bus.WHEELS = 16;
Bus.COLOR = "yellow";
Bus.prototype = Object.create(Vehicle.prototype);
function Engine(name, capacity) {
  this.name = name;
  this.capacity = capacity;
}
Engine.prototype.run = function () {
  console.log("Running");
};
Engine.prototype.start = function () {
  console.log("Starting");
  this.run();
};
Engine.prototype.stop = function () {
  console.log("Has stopped");
};



function CarFleet(lotNumber) {
  this.lotNumber = lotNumber;
  
}



function MotoFleet(lotNumber) {
  this.lotNumber = lotNumber;
}