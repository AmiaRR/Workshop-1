function setup() {
  createCanvas(500, 500, WEBGL);

}

function draw() {
  background(0);


  rotateX(frameCount * 0.03);
  
  fill (0, 255, 0)

  
  circle(60, 80, 150, 150);
}