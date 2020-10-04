var fixedRect, movingRect;

var a1,a2,a3,a4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,100,50,90);
  fixedRect.velocityY= 5;
  fixedRect.shapeColor = "cyan";

  movingRect = createSprite(200,250,30,100);
  movingRect.velocityY= -6;
  movingRect.shapeColor = "cyan";

  a1 = createSprite(200,200,50,50);
  a1.shapeColor = "cyan";

  a2 = createSprite(400,200,50,50);
  a2.velocityX= 3;
  a2.shapeColor = "cyan";

  a3 = createSprite(600,200,50,50);
  a3.velocityX= -4;
  a3.shapeColor = "cyan";

  a4 = createSprite(700,200,50,50);
  a4.shapeColor = "cyan"
  
}

function draw() {
  background("pink");
bounceOff(a3,a4);
bounceOff(movingRect,fixedRect);
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,a2))
  {
    a2.shapeColor = "black";
    movingRect.shapeColor = "black"
  }

  else
  {
    a2.shapeColor = "cyan";
    movingRect.shapeColor = "cyan"

  }*/
  
  
  drawSprites();      
}

