var Electrofast, ElectrofastImg;
var ground, platformImg, leftWall, rightWall, wallImg, middlePlatform;

function preload() {
  // This creates ElectroFast's in-game animation. It's pretty long!
  ElectrofastImg = loadAnimation("Images/Electrofast1_jump.svg", "Images/Electrofast2.svg", "Images/Electrofast3.svg",
  "Images/Electrofast4.svg", "Images/Electrofast5_stand.svg","Images/Electrofast4.svg","Images/Electrofast3.svg", "Images/Electrofast2.svg");

  // The platforms images:
  platformImg = loadImage("Images/Ground_Platform.png");
  wallImg = loadImage("Images/Walls.png");

}

function setup() {
  createCanvas(1400, 700);

  // The code below forms ElectroFast's size, picture and animation.
  Electrofast = createSprite(400,400,20,20);
  Electrofast.addAnimation("Electrofast_Running",ElectrofastImg);
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
  middlePlatform.scale =0.5
}

function draw() {
  //background(255,255,255);  
  background("cyan")
  drawSprites();
}
