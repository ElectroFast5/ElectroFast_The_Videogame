var Electrofast, ElectrofastRunImg, ElectrofastStandImg, ElectroFastJumpImg, ElectroFastRunBackwardsImg;
var ground, platformImg, leftWall, rightWall, wallImg, middlePlatform;
let lightning, lightningImg, lightningGroup;
let drones, dronesImg, dronesGroup;
let bomb, bombImg;
let gameOver=false;
var edges;

function preload() {
  // This creates ElectroFast's in-game animations. It's pretty long!
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

  //Image for the gimmicks:
  dronesImg=loadImage('Images/Drone.png');
  bombImg=loadImage('Images/Golden Bomb.png');
  lightningImg=loadImage('Images/Lightning.png');
}

function setup() {
  createCanvas(1400, 700);
  edges = createEdgeSprites();

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

  // 

  //Groups for the gimmicks:
  dronesGroup=createGroup();
  lightningGroup=createGroup();

  //THE BOMB😱😱😱:
  bomb=createSprite(140,550);
  bomb.addImage(bombImg);
  bomb.scale=0.5;
}

function draw() { 
  background("cyan");
  controlsAndPhysics();
  buildDrones();
  lightningControl();
  console.log(Electrofast.x);

  if(gameOver==false){
    drawSprites();
  } else {
    stroke("blue");
    strokeWeight(20);
    textSize(100);
    text("Game Over!", width/2, height/2);
  }

  if(bomb.isTouching(lightningGroup)||bomb.isTouching(dronesGroup)||Electrofast.isTouching(dronesGroup)){
    gameOver=true;
  }
}

function controlsAndPhysics(){
  Electrofast.velocityY+=1;
  Electrofast.collide(ground);
  Electrofast.collide(middlePlatform);
  console.log(Electrofast.x);

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

function buildDrones(){
  if(frameCount%50==0){
    drones=createSprite(random(30,width),30,);
    drones.addImage(dronesImg);
    drones.scale=0.17;
    drones.velocityX=-7;
    drones.velocityY=+7;
    drones.setCollider("rectangle",0,0,400,300)
    dronesGroup.add(drones);
    } 
    dronesGroup.bounceOff(leftWall);
    dronesGroup.bounceOff(rightWall);
    dronesGroup.bounceOff(ground);
    dronesGroup.bounceOff(middlePlatform);
    dronesGroup.bounceOff(edges);
    if(dronesGroup.isTouching(lightningGroup)){
      dronesGroup[0].destroy();
    }
}

function lightningControl() {
  if(keyDown("DOWN_ARROW")||keyDown("SPACE") {
    lightning = createSprite(Electrofast.x,Electrofast.y);
    lightning.addImage(lightningImg);
    lightning.velocityX = 10;
    lightning.lifetime = 50;
    lightning.scale = 0.5;
    lightningGroup.add(lightning);
  }
}
