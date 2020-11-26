var fixedRect,MovingRect





function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 MovingRect= createSprite(600,100,100,50);
}

function draw() {
 
 MovingRect.x=mouseX
 MovingRect.y=mouseY


 if(MovingRect.x - fixedRect.x < MovingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - MovingRect.x < MovingRect.width/2 + fixedRect.width/2 &&
    MovingRect.y - fixedRect.y < MovingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - MovingRect.y < MovingRect.width/2 + fixedRect.width/2){
 MovingRect.shapeColor="green";
 fixedRect.shapeColor="green";

 } else{
MovingRect.shapeColor="red";
fixedRect.shapeColor="red";
 }
 
  background(255,255,255);  
  drawSprites();
}