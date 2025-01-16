function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

drawStair (50, 100, 50);
}
function drawStair (xPos, yPos, height,) {
  
  noStroke ();
  
  rect (xPos, yPos, 20, height);
  rect (xPos + -20, yPos - height, 20, height);
  
  
  
  
}