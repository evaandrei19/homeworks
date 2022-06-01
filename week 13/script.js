window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.widht = window.innerWidth;

  //ctx.fillStyle= "red";
  //ctx.fillRect(50,50, 100, 100);
  //ctx.fillStyle= "blue";
  //ctx.fillRect(100,100, 100, 100);
  //ctx.fillStyle= "yellow";
  //ctx.fillRect(200,50, 100, 100);

  //ctx.beginPath();
  //ctx.moveTo(100, 100);
  //ctx.lineTo(200, 100);
  //ctx.lineTo(200, 200);
  //ctx.closePath();
  //ctx.stroke();

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  // EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

// square

var sq = document.getElementById("square").getContext("2d");

sq.fillStyle = "red";
sq.rect(50, 50, 200, 200);
sq.fill();

// rectangle

var rc = document.getElementById("rectangle").getContext("2d");

rc.fillStyle = "violet";
rc.rect(50, 100, 200, 100);
rc.fill();

// circle

var cir = document.getElementById("circle").getContext("2d");

cir.fillStyle = "yellow";
cir.arc(150, 150, 100, 0, 2 * Math.PI);
cir.fill();

// triangle

var tri = document.getElementById("triangle").getContext("2d");

tri.fillStyle = "balck";
tri.beginPath();
tri.moveTo(150, 50);
tri.lineTo(50, 250);
tri.lineTo(250, 250);
tri.fill();
