let targetX=0;
let x = 0
let y=0
let targetY=0
let img1
let img2

function preload() {
  
  img1=loadImage('2.PNG');
  img2=loadImage('1.PNG');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(176,213,223);
  
  image(img2, targetX-25, targetY-25,70,70)
  
 x=lerp(x,targetX,0.3)
 y=lerp(y, targetY, 0.3)
  image(img1, x-20, y-20, 50, 50)
}

function mousePressed(){
  targetX = mouseX
  targetY = mouseY
}