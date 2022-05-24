var Electrofast, ElectrofastRunImg, ElectrofastStandImg, ElectroFastJumpImg, ElectroFastRunBackwardsImg;
var ground, platformImg, leftWall, rightWall, wallImg, middlePlatform;

function preload() {
  // This creates ElectroFast's in-game animation. It's pretty long!
  ElectrofastRunImg = loadAnimation("Images/Electrofast1_jump.svg", "Images/Electrofast2.svg",
  "Images/Electrofast3.svg", "Images/Electrofast4.svg","Images/Electrofast1_jump.svg","Images/Electrofast2.svg",
  "Images/Electrofast4.svg");
  ElectroFastRunBackwardsImg = loadAnimation("Images/Electrofast4.svg", "Images/Electrofast3.svg", "Images/Electrofast2.svg",
  "Images/Electrofast1_jump.svg", "Images/Electrofast4.svg","Images/Electrofast3.svg","Images/Electrofast2.svg");
  ElectrofastStandImg=loadImage('Images/ElectroFast5_stand.svg');
  ElectroFastJumpImg=loadImage('Images/ElectroFast1_jump.svg');

  // The platforms images:
  platformImg = loadImage("Images/Ground_Platform.png");
  wallImg = loadImage("Images/Walls.png");

}

function setup() {
  createCanvas(1400, 700);

  // The code below forms ElectroFast's size, picture and animation.
  Electrofast = createSprite(700,50,20,20);
  Electrofast.addImage('stand',ElectrofastStandImg);
  Electrofast.addAnimation("run",ElectrofastRunImg);
  Electrofast.addImage('Boing!!!',ElectroFastJumpImg);
  Electrofast.addAnimation('Backwards',ElectroFastRunBackwardsImg);
  Electrofast.scale = 0.32;

  // The platforms ElectroFast stands on:
  ground = createSprite(700, 670);
  ground.addImage(platformImg);
  ground.scale = 1.5;

  leftWall = createSprite(30, 350);
  leftWall.addImage(wallImg);

  rightWall = createSprite(1370, 350);
  rightWall.addImage(wallImg);

  middlePlatform = createSprite(700, 430);
  middlePlatform.addImage(platformImg);
  middlePlatform.scale =0.5;
}

function draw() {
  //background(255,255,255);  
  background("cyan");
  drawSprites();
  controlsAndPhysics();
}

function controlsAndPhysics(){
  Electrofast.velocityY+=1;
  Electrofast.collide(ground);
  Electrofast.collide(middlePlatform)
  console.log(Electrofast.x)

  // Jumping on the middle platform.
  if(keyDown("UP_ARROW")&&Electrofast.y>380&&Electrofast.y<385&&Electrofast.x>400&&Electrofast.x<1100) {
    Electrofast.velocityY=-20;
 }

 // Jumping on the bottom platform.
  if(keyDown("UP_ARROW")&&Electrofast.y>580&&Electrofast.y<585) {
  Electrofast.velocityY=-20;
}

  if(keyDown("RIGHT_ARROW")&&!Electrofast.isTouching(rightWall)&&!Electrofast.isTouching(middlePlatform)) {
    Electrofast.x+=10;
    Electrofast.changeAnimation('run');
  }

  if(keyDown("LEFT_ARROW")&&!Electrofast.isTouching(leftWall)&&!Electrofast.isTouching(middlePlatform)) {
    Electrofast.x-=10;
    Electrofast.changeAnimation('Backwards');
  }

  if(!keyDown("RIGHT_ARROW")&&!keyDown("LEFT_ARROW")) {
    Electrofast.changeImage("stand");
  }
}
