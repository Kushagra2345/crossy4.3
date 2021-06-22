var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var City1;
var Player1;
function preload()
{
 car1Img=loadImage("images/car1.png")
 car2Img=loadImage("images/car2.png")
 log1Img=loadImage("images/log1.png")
 log2Img=loadImage("images/log2.png")
 City1Img=loadImage("images/city1.png")
 Player1Img=loadImage("images/Player-03.png")
}

function setup() {
  createCanvas(1366,2700);
 carGroup1 = new Group();
 logGroup1 = new Group();

  for (var i=0;i<6;i++){
    
    if (i%2===0){
    var road=createSprite(width/2,height-250-(i*400),width,300)
    road.shapeColor="black"
    var bottomGrass1=createSprite(width/2,height-50-(i*400),width,grassHeight)
    bottomGrass1.shapeColor="green"
    var bottomGrass2=createSprite(width/2,height-450-(i*400),width,grassHeight)
    bottomGrass2.shapeColor="green"

    }
  }

  for (var i=0;i<16;i++){
   cars=new Car(6)
   carGroup1.add(cars.spt);

  }
  for (var i=0;i<35;i++){

    var logs=new Log(5);
    logGroup1.add(logs.spt)
   
   }


  City1=new City(width/2,225)
  
  Player1=new Player(width/2,height-50)
  
  
  
   
 }

function draw() {
  background("skyblue");
 console.log(mouseX+","+mouseY)
 
    translate(0,-Player1.y+height-150)

  for (var i=1;i<logGroup1.length;i++){
    if (logGroup1[i].x<0 ){
      logGroup1[i].x=width
    }
  }
   
  for (var i=1;i<logGroup1.length;i++){
    if (logGroup1[i].x>width ){
      logGroup1[i].x=0
    }
  }


 
  for (var i=1;i<carGroup1.length;i++){
    if (carGroup1[i].x<0 ){
      carGroup1[i].x=width
    }
  }

  for (var i=1;i<carGroup1.length;i++){
    if (carGroup1[i].x>width ){
      carGroup1[i].x=0
    }

    
  }
 

  if (carGroup1.isTouching(Player1.spt)){

    Player1.spt.x=width/2
    Player1.spt.y=height-50
  }
 
  
  if (logGroup1.isTouching(Player1.spt)){
    Player1.spt.x=Player1.spt.x+5
  }

  else if 
  
  ((Player1.spt.y<height-500 && Player1.spt.y>height-800)||
  (Player1.spt.y<height-1300  && Player1.spt.y>height-1600)||
  (Player1.spt.y<height-2100 && Player1.spt.y>height-2200)||
  (Player1.spt.y>height)||
  (Player1.spt.x>width)||
  (Player1.spt.x<0)){
    Player1.spt.x=width/2
    Player1.spt.y=height-50
  }
  

  drawSprites();
 
  if (Player1.spt.y<height-2400){
    bg=createSprite(width/2,height/2,width,height)
    bg.shapeColor="lightblue"
    textSize(30)
    fill("green")
    text("Congrats!!!!! YOU WIN! GAME OVER,HOPE U ENJOYED",200,300)

  }
  
  
}

function keyPressed(){
  if (keyCode == UP_ARROW){
      Player1.move(0,-2.25)
  }else if
    (keyCode == DOWN_ARROW){
      Player1.move(0,2.25)
  }else if 
  (keyCode == LEFT_ARROW){
      Player1.move(-2.25,0)
  }else if
   (keyCode == RIGHT_ARROW){
    Player1.move(2.25,0)
  }
}




