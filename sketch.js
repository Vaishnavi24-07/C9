var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,30,30);
box.shapeColor = "lightgreen"
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW)){
box.position.x = box.position.x + 5;

}
if(keyDown("left")){
  box.position.x -=  5;
}
if(keyDown("up")){
  box.position.y -=  5;
}
if(keyDown("down")){
  box.position.y +=  5;
}

  drawSprites();
}



