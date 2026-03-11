let pg;
let cnv;
let x =0, y =0;
let vX = 3
let vY = 5

function setup() {
  cnv = createCanvas(400, 400);
  pg = select ('#p1');
    
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
}