var ball,img,paddle,img2,playerscore;
var count = 0;
var gameState = "serve";
function preload() {
img = loadImage("paddle.png");
img2 = loadImage("ball.png");  
}
function setup() {
createCanvas(400, 400);
paddle = createSprite(380,200,10,70); 
paddle.addAnimation("paddle",img); 

ball = createSprite(200,200,10,10);
ball.addAnimation("ball",img2);

}

function draw() {
background(205,153,0);
paddle.y = mouseY;
  if(gameState === "serve"){
  text("PRESS SPACE KEY TO START",110,150);
 }                       
   if(ball.bounceOff(paddle)){
count = count +1;
     randomVelocity();
   
    console.log(ball.velocityY);
     }
  textSize(50);   
  text("Score:"+count,100,50);


edge = createEdgeSprites();
ball.bounceOff(edge[2]); 
ball.bounceOff(edge[3]);
ball.bounceOff(edge[0]);
ball.bounceOff(paddle,randomVelocity);
paddle.collide(edge);  

if(keyWentDown("Space") && gameState === "serve"){
ball.velocityX = -9; 
gameState = "play"  
}
  
if(ball.x > 400){
gameState === "over";
 reset(); 
}
 
drawSprites();
 } 

function randomVelocity()
{
ball.velocityY = Math.round(random(9,-9)+ count/50);
}

function reset (){
 ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
  gameState = "serve";
  count = 0;
}