
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3; 

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	block1= new block(600,550,80,65);
	block2= new block(600,500,15,50);
	block3= new block(650,500,15,50); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1);
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();

  
  
  drawSprites();
 
}



