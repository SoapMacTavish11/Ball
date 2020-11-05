
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,650,800,20);
	
	box1 = new Box(650,640,200,20);
	box2 = new Box(550,550,20,200);
	box3 = new Box(750,550,20,200);

	
	paper= new Paper(100,620,70);


	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  }
function keyPressed(){
	if(keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:765,y:-765});
	}
}



