var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png") 
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")


function setup() {
  createCanvas(600, 200);
  
  //crear sprite del t-rex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar tamaño y posición al t-rex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite suelo.
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
}

function draw() {
  background("orange");
  
  ground.velocityX = -2
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //Hacer saltar al t-rex con la tecla espaciadora.
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el trex caiga
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles()
  drawSprites();
}
function spawnClouds(){
  if (frameCount % 60 ===0){
    cloud=createSprite(600,100,40,10)
    cloud.addImage(cloudImg)
    cloud.y=Math.round(random(10,60))
  cloud.velocityX=-3 
  cloud.lifetime=200
  cloud.depth=trex.depth
  trex.depth=trex.depth+1
  }
  
}
function spawnObstacles(){
  if (framecount % 60===0){
    var obstacle=createSprite(600,165,10,40)
    obstacle.velocityX=-6
var ran=Mat.raound(Random(1,6));
switch(ran){
  case 1: obstacle.addImage(obstacle1);
  break;
  case 2: obstacle.addimage(obstacle2);
  break;
  case 3: obstacle.addImage(obstacle3);
  break;
  case 4: obstacle.addImage(obstacle4);
  break
  case 5: obstacle.addImage(obstacle5);
  break;
  case 6: obstacle.addImage(obstacle6);
  break;
default: break;
}
obstacle.scale=0.5
obstacle.lifetime=300
}
}
