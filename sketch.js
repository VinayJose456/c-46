var wagon1,wagon2;
var obstacles = [];

const NUM_OBSTACLES = 40;
function setup(){
  createCanvas(400,400);
 wagon1 = new wagon(width*0.33);
 wagon2 = new wagon(width*0.73); 
}

function draw(){
  background(0);
  wagon1.update();
  wagon2.update();
  wagon1.display();
  wagon2.display();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    wagon1.isUp=true;
    wagon.isDown=false;
  }
  else if(keyCode==DOWN_ARROW){
    wagon1.isDown=true;
    wagon1.isUp=false;
  }
  if(keyCode==87){
    wagon2.isUp=true;
    wagon2.isDown=false;
  }
  else if(keyCode==83){
    wagon2.isDown=true;
    wagon2.isUp=false;
  }
}

function keyReleased(){
  if(keyCode==UP_ARROW){
    wagon1.isUp=false;
  }
  else if(keyCode==DOWN_ARROW){
    wagon1.isDown=false;
  }
  if(keyCode==87){
    wagon2.isUp=false
  }
  else if(keyCode==83){
    wagon2.isDown=false;
  }
}