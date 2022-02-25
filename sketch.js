var box;

//runs once at the start of the game, is used to create things.
function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,10,100);
}

function draw() 
{
  background(30);

  if(keyDown(RIGHT_ARROW)){
    box.x+=4; 
  }

  if(keyDown(LEFT_ARROW)){
    box.x-=4;
  }

  if(keyDown(UP_ARROW)){
    box.y-=4;
  }

  if(keyDown(DOWN_ARROW)){
    box.y+=4;
  }


  drawSprites();

}




