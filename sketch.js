
var monkey , monkey_running
var ground,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(30,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();

   var survivaltime = 0;
  
  

  
}

function draw() {
  background(220)
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time:"+ survivaltime,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+ survivaltime,100,50)
  
  spawnBananas();

  drawSprites();
}
function spawnBananas() {
  if (frameCount % 80 === 0){
   var banana = createSprite(330,165,10,40);
   banana.velocityX = -(6 + survivaltime/100);
   banana.addImage(bananaImage);
    banana.scale = 0.1;
}
}




