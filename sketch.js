let pg;
let cnv;
let x =0, y =0;
let vX = 2
let vY = 2
let xLoc = [];
let yLoc = [];
let wormX = 50;
let wormY = 50;
let xLoc1 = [];
let yLoc1 = [];

let numSegments = 80;
let numSegments2 = 230;
let counter = 0;

let col1, col2;

let canv;
function preload() {
  catImg = loadImage("cat.png");
}
function setup() {
 // cnv = createCanvas(400, 400);
  pg = select ('#p1');
  canv=createCanvas(windowWidth, windowHeight);
  canv.position(0,0)
  canv.style('z-index', '-1');
  
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
   background(220);
    pg.position(x,y)
  
  if(x> windowWidth){
    vX = -vX;
  }
  if(y> windowHeight){
    vY= -vY;
  }
  if(x<0){
    vX = -vX;
  }
  if(y< 0){
    vY= -vY;
  }
  
  x += vX;
  y+=vY;
  worm(70, 0, col1, col2);
  worm2(70, 0, col1, col2);
  counter += 0.01;
  image(catImg, 35, 400, 200, 200);

}

function worm(wormSize, offset, c1, c2) {
  

  xLoc[numSegments-1] = mouseX;
  yLoc[numSegments-1] = mouseY
  
  for (let i = 0; i < numSegments - 1; i++) {
    

    xLoc[i] = xLoc[i+1];
    yLoc[i] = yLoc[i+1];
    

    let s = sin(map(i, 0, numSegments-1, 0, PI));
    let d = wormSize * s;
    

    let c = lerpColor(c1, c2, s);
    stroke(c);
    fill(c);
    
    ellipse(xLoc[i], yLoc[i], d);
  }
 
}
function worm2(wormSize, offset, c1, c2) {
  

  xLoc1[numSegments2-1] = wormX;
  yLoc1[numSegments2-1] = wormY;
  wormX += vX;
if (wormX > 370 || wormX <= 0) vX *= -1;
  
  for (let i = 0; i < numSegments2 - 1; i++) {
    

    xLoc1[i] = xLoc1[i+1];
    yLoc1[i] = yLoc1[i+1];
    

    let s = sin(map(i, 0, numSegments2-1, 0, PI));
    let d = wormSize * s;
    

    let c = lerpColor(c1, c2, s);
    stroke(c);
    fill(c);
    
    ellipse(xLoc1[i], yLoc1[i], d);
  }
 
}
 function mousePressed() {
  if (
    mouseX > 35 && mouseX < 35 + 200 &&
    mouseY > 400 && mouseY < 400 + 200
  ) {
    window.open("kitty.html"); 
  }
}

