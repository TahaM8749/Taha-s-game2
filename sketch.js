var player, playerS, playerRunning;


function preload(){
  playerRunning = loadAnimation("man1.png", "man2.png","man3.png");
  playerS = loadImage("manS.png");

}

function setup() {
  createCanvas(1200,800);
  

  player = createSprite(200,200,20,20);
  player.addImage(playerS);
  //player.addAnimation("running",playerRunning);

}

function draw() {
  background("lightGray");  
  drawSprites();
}