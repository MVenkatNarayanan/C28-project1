const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stoneObj;
var engine,world;
var constraint;



function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200,750);

	engine = Engine.create();
	world = engine.world;
  constraint=engine.constraint;
	
	//Create the Bodies Here.
	tree=new Tree(915,561,5,5);
  tree.scale=0.5;

  boy=createSprite(282,618,10,10);
  boy.addImage(boyImg);
  boy.scale=0.2;

  mango1=new Mango(745,334,10,10);
  mango2=new Mango(800,270,10,10);
  mango3=new Mango(698,396,10,10);
  mango4=new Mango(996,390,10,10);
  mango5=new Mango(987,222,10,10);

 stone=new Stone(168,490,10,10);

	ground=new Ground(516,747,1200,20);

	Engine.run(engine);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();
  stone.display();

  // detectollision(stoneObj,mango1);
  // detectollision(stoneObj,mango2);
  // detectollision(stoneObj,mango3);
  // detectollision(stoneObj,mango4);
  // detectollision(stoneObj,mango5);
  
  drawSprites();
  textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}
 function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
     launcherObject.attach(stoneObj.body);
   }
 }
 function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function detectollision(Lstone,Lmango){
  mangoBodyPosition=LmangoBodyPosition;
  stoneBodyPosition=LstoneBodyPosition;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false);
  }
}



