var Electrofast, ElectrofastRunImg, ElectrofastStandImg, ElectroFastJumpImg, ElectroFastRunBackwardsImg;
var ground, platformImg, leftWall, rightWall, wallImg, middlePlatform;

function preload() {
  // This creates ElectroFast's in-game animation. It's pretty long!
  ElectrofastRunImg = loadAnimation("Images/Electrofast1_jump.svg", "Images/Electrofast2.svg", "Images/Electrofast3.svg",
  "Images/Electrofast4.svg", "Images/Electrofast5_stand.svg","Images/Electrofast4.svg","Images/Electrofast3.svg",
  "Images/Electrofast2.svg");
  ElectroFastRunBackwardsImg = loadAnimation("Images/Electrofast2.svg", "Images/Electrofast3.svg", "Images/Electrofast4.svg",
  "Images/Electrofast5_stand.svg", "Images/Electrofast4.svg","Images/Electrofast3.svg","Images/Electrofast2.svg",
  "Images/Electrofast1_jump.svg");
  ElectrofastStandImg=loadImage('Images/ElectroFast5_stand.svg');
  ElectroFastJumpImg=loadImage('Images/ElectroFast1_jump.svg');

  // The platforms images:
  platformImg = loadImage("Images/Ground_Platform.png");
  wallImg = loadImage("Images/Walls.png");

}

function setup() {
  createCanvas(1400, 700);

  // The code below forms ElectroFast's size, picture and animation.
  Electrofast = createSprite(400,50,20,20);
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
  controls();
}

function controls(){
  if(!Electrofast.isTouching(ground)&&!Electrofast.isTouching(middlePlatform)){
    Electrofast.y+=10;
    Electrofast.changeImage('Boing!!!');
  }else{
    if(keyDown('LEFT_ARROW')){
      Electrofast.changeAnimation('Backwards');
    }else if(keyDown('RIGHT_ARROW')){
      Electrofast.changeAnimation('run');
    }else{
      Electrofast.changeImage('stand');
    }
  }
}
