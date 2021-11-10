var bow, arrow, balloon, fundo ;
var bowImage, arrowImage,fundoImage;

var redBalloonImage;
var blueBalloon;
var greenBalloon;
var pinkBalloon;

var score;

function preload(){
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  fundoImage = loadImage("background0.png");
  redBalloonImage = loadImage("red_balloon0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
}


function setup() {
  createCanvas(400, 400);
  fundo = createSprite(200,200,400,400);
  fundo.addImage(fundoImage);
  
  bow=createSprite(370,200,10,10);
  bow.addImage(bowImage);


}

function draw() {
 background(240);

 
  text("Pontuação: "+ score, 300,50);

  bow.y=mouseY;
  if(keyDown("space")){
  createArrow();
  }

   if(frameCount % 10 === 0){
      var select_balloon = Math.round(random(1,4));
      switch(select_balloon){
        case 1: redBalloon();
        break;
        case 2: blueBalloon();
        break;
        case 3: greenBalloon();
        break;
        case 4: pinkBalloon();
        break;
      default: break;
    }
}
  drawSprites();
}


// Criando flechas para o arco
 function createArrow() {
  arrow=createSprite(370,200,10,10);
  arrow.y=bow.y;
  arrow.addImage(arrowImage);
  arrow.velocityX=-4;
  arrow.lifetime=100;
  arrow.scale = 0.2;
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
      red.addImage(redBalloonImage);
      red.velocityX=3;
      red.lifetime=150;
      red.scale=0.1;
}
function blueBalloon(){
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
      blue.addImage(blueBalloonImage);
      blue.velocityX=3;
      blue.lifetime=150;
      blue.scale=0.1;
}
function greenBalloon(){
  var green = createSprite(0,Math.round(random(20,370)),10,10);
      green.addImage(greenBalloonImage);
      green.velocityX=3;
      green.lifetime=150;
      green.scale=0.1;
}
function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
      pink.addImage(pinkBalloonImage);
      pink.velocityX=3;
      pink.lifetime=150;
      pink.scale=1.2;
}

