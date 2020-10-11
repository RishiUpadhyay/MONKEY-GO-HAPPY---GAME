var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
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
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true;
}

function draw() {
  background(220)
  console.log(gameState)
  
 if (gameState === PLAY) {
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time:"+ survivaltime,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+ survivaltime,100,50)
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnBananas();
  spawnObstacle();
  
  if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -16;
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  
 
  if (monkey.isTouching(FoodGroup)) {
  FoodGroup.destroyEach();
}
  if(ObstacleGroup.isTouching(monkey)) {
  gameState = END;
  }
 }
   else if (gameState === END) {
      ground.velocityX = 0;
      monkey.velocityX = 0;
      FoodGroup.setVelocityXEach(0)
      ObstacleGroup.setVelocityXEach(0)
      
   
  ObstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
   }
  if (keyDown("r")) {
    
    reset();
  }
   
     
  console.log(frameCount)
  
  
   monkey.collide(ground);         
  drawSprites();
}
function reset() {
  gameState = PLAY;
  ObstacleGroup.destroyEach();
  FoodGroup.destroyEach();
  survivaltime = 0;
}
function spawnBananas() {
  if (frameCount % 80 === 0){
   var banana = createSprite(330,165,10,40);
   banana.y = Math.round(random(120,200));
   banana.velocityX = -6;
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.lifetime = 200;
   FoodGroup.add(banana);
   
}
}
function spawnObstacle(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
     obstacle.velocityX = -6;                                                                                                                         
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.25;
     obstacle.lifetime = 300;
     ObstacleGroup.add(obstacle);

   }
}




