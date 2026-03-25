var cam; 
let canvas
var vScale = 20
let x
let y
function setup() {
  canvas = createCanvas(700, 500);
  canvas.pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(width/vScale, height/vScale);
}

function draw() {
  canvas.background(51);
  
  cam.loadPixels();
  loadPixels();
  for(var y=0;y<cam.height;y++){
    for(var x=0;x<cam.width; x++){
      var index = (x+y*cam.width)*4;
      var r = cam.pixels[index]
      var g = cam.pixels[index+1]
      var b = cam.pixels[index+2]
      
  //    var bright = (r+g+b)/3
      canvas.fill(r,g,b);
      canvas.rect(x*vScale, y*vScale, vScale, vScale);
    }
 }
}
