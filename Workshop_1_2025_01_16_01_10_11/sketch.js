let x = 0
let move = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (x > width){
    move = -3; 
  }
    
    if (x < 0){
      move = 3;
    }


rect (x, 200, 100, 50);

  x = x + move;
  
}

