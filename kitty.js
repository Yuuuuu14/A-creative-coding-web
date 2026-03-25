let r = 0, b = 0, g = 0;
let x , y;
let catImg;
function preload() {

  catImg = loadImage('cat.png'); 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 // rectMode(CENTER);
  
  x=width/2;
  y=0;
 // cursor('cat.png', 16, 16);
}

function draw() {
  strokeWeight(3)
  background(255);
  r = map(mouseX, 0, width, 255, 0)
  b = map(mouseX, 0, width, 0, 255)
  g = map(mouseY, 0, height, 255, 0)
 
 

  fill(r,g,b); 
  
  rect(x,y,50,50)
  rect(x+8,y-8,35,40)
  rect(x+13,y-14,25,25)
  image(catImg, mouseX-120, mouseY-120, 200, 200)
  
  if(y>height){
    y=mouseY-25;
    x=mouseX-25
  }
  // y=y+1;
  y+=5;
  fill(0);
 // text('x= ' + x,30,30);
 // text('y = ' + y,30,60);
  

  
}