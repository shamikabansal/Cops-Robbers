
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){	
	Maze = loadImage("MazeImage.png");
}


function setup() {

 createCanvas(1000,1000);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(Maze);
  
  drawSprites();
 
}



