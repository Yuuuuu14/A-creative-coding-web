let cam; 

let scale =13; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cam = createCapture(VIDEO, { flipped:true });
  cam.size(width/scale,height/scale)
  
  //cam.hide()
  pixelDensity(1)
  rectMode(CENTER);
 
}

function draw() {
  background(0);
  
  stroke(0,255,255)
  
  cam.loadPixels();
  
  //translate(scale/2, scale/2)
 // loadPixels()
  
  let index = 0
  
  for(let y = 0; y< cam.height; y++){
    
    beginShape();
    for(let x = 0; x<cam.width; x++){
      
      let r = cam.pixels[index] 
      let g = cam.pixels[index+1] 
      let b = cam.pixels[index+2] 
      
      let bright = (r+g+b)/3;
      
      
      
      // fill(bright)
      rect(x*scale/2, y*scale/2, scale*(bright/255),scale*(bright/255))
      ellipse(x*scale/2, y*scale/2+ height/2, scale*(bright/255),scale*(bright/255))
      noFill()
      curveVertex(x*scale/2+ width/2, y*scale/2 + bright/20);
      
      index+=4
   
    }
    endShape()
    
  }
  
  
  cam.updatePixels();
  //updatePixels();

  image(cam, width/2,height/2,width/2,height/2)
  
  
}