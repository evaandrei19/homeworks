function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};

function Car(name, color, engine, fuel) {
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
  this.cars = new Array();
  this.engine = new Engine("Diesel", "1900");
}
CarFleet.prototype.build = function (numberOfCars) {
  for (var i = 0; i < numberOfCars; ++i) {
    this.cars[i] = new Car("BMW", "green", this.engine, "diesel");
  }
};
function MotoFleet(lotNumber) {
  this.lotNumber = lotNumber;
  this.motors = [];
  this.engine = new Engine("Gas", "400");
}
MotoFleet.prototype.build = function (numberOfMotors) {
  for (var i = 0; i < numberOfMotors; ++i) {
    this.motors[i] = new Moto("Hardy Davindson", "red", this.engine, "gas");
  }
};

function buildVehicles(event) {
  event.preventDefault();

  var lotNo = document.getElementById("lot").value;
  var count = parseInt(document.getElementById("count").value);
  var carTableElem = document.getElementById("car-table");
  var carTBodyElem = carTableElem.getElementsByTagName("tbody")[0];
  carTBodyElem.innerHTML = "";

  var vehicleType = document.getElementById("vehicle").value;
  var vehicles = [],
    vehicleUrl = "";
  switch (vehicleType) {
    case "Car":
      // Here are built the cars
      var bmwFleet = new CarFleet(lotNo);
      bmwFleet.build(count);
      vehicles = bmwFleet.cars;
      vehicleUrl =
        "https://bmw-apan.ro/wp-content/uploads/sites/15/2021/10/x3.jpg";
      break;
    case "Moto":
      // Here are built the motors
      var hardyDavindsonFleet = new MotoFleet(lotNo);
      hardyDavindsonFleet.build(count);
      vehicles = hardyDavindsonFleet.motors;
      vehicleUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OXPCHAIYzZbYYdJZbKWd50OFEDw3WquEaA&usqp=CAU";
      break;
  }

  for (var vehicle of vehicles) {
    var index = vehicles.indexOf(vehicle);
    var carTrElem = createRow(vehicle, index + 1, lotNo, vehicleUrl);
    carTBodyElem.appendChild(carTrElem);
  }
}

function createRow(vehicle, index, lotNo, imageUrl) {
  var vehicleTrElem = document.createElement("tr");

  var vehicleIndexElem = document.createElement("td");
  vehicleIndexElem.innerHTML = index;
  vehicleTrElem.appendChild(vehicleIndexElem);

  var vehicleNameElem = document.createElement("td");
  vehicleNameElem.innerHTML = vehicle.name;
  vehicleTrElem.appendChild(vehicleNameElem);

  var lotNoElem = document.createElement("td");
  lotNoElem.innerHTML = lotNo;
  vehicleTrElem.appendChild(lotNoElem);

  var vehicleImageElem = document.createElement("td");
  var img = document.createElement("img");
  img.src = imageUrl;
  img.style.backgroundColor = vehicle.color;
  vehicleImageElem.appendChild(img);
  vehicleTrElem.appendChild(vehicleImageElem);

  return vehicleTrElem;
}
