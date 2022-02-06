
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var Ball;
var groundObj;
var leftSide;
var rightSide;
var ball_options;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ball_options={
		isStatic : false,
		restitution:0.3,
		density : 1.2
		
		
	}

	engine = Engine.create();
	world = engine.World;

	

	//Create the Bodies Here.
	Ball = Bodies.circle(100,400,4,ball_options);
	World.add(world,Ball);
	groundObj = new Ground(width/2,670,width,2);
	leftSide = new Ground(1100,600,20,120);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  leftSide.show();
  ellipse(Ball.position.x,Ball.position.y,4,4)
  drawSprites();
 
}



