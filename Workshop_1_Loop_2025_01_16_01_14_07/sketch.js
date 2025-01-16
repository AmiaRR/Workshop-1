function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(randomColor());
  
  function randomColor () {
    let r = random (255);
    let g = random (255);
    let b = random (255);
  
    return color (r, g, b);
  }
  
 let numCircles = 50;
  
  
fill (0);
  
  let num = 0;
  while(num < numCircles) {
    let x = random (width);
let y = random (height);
  let size = random (20, 40);
  circle (x, y, size);
  num++;
  }
  
  let num2Squares = 50 
  
  let num2 = 0;
  while (num2 < num2Squares) {
    let x = random (width);
    let y = random (height);
    let size = random (20, 40); 
    square (x, y, size);
    num2 ++;
  } 
}