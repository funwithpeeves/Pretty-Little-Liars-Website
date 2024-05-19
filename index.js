var canvas = document.getElementById("blood");

var ctx = canvas.getContext("2d");

var drops = [];

for (var i = 0; i < 100; i++) {

  drops.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    radius: Math.random() * 3 + 1,

    speed: Math.random() * 6 + 1

  });

}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  

  for (var i = 0; i < drops.length; i++) {

    ctx.beginPath();

    ctx.arc(drops[i].x, drops[i].y, drops[i].radius, 0, 2 * Math.PI);

    ctx.fillStyle = "red";

    ctx.fill();

    

    drops[i].y += drops[i].speed;

    

    if (drops[i].y > canvas.height) {

      drops[i].y = 0;

    }

  }

  

  requestAnimationFrame(draw);

}

draw();

