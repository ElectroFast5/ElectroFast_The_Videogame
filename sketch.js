var Electrofast, ElectrofastImg
var level

function preload() {
  ElectrofastImg = loadAnimation("ElectroFast1_jump.svg", "ElectroFast2.svg", "ElectroFast3.svg", "ElectroFast4.svg", "ElectroFast5_stand.svg");
}

function setup() {
  createCanvas(1400,700);
  //createSprite(200, 200, 50, 50);
  Electrofast = createSprite(400,400,20,20);
  Electrofast.addAnimation("Electrofast_Running",ElectrofastImg);
  Electrofast.scale = 0.5
}

function draw() {
  //background(255,255,255);  
  background("cyan")
  drawSprites();
}
