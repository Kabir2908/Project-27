
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;
var bobDiameter = 200;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(250,100,600,20);
bobObject1 = new Bob(50,300,100);
bobObject2 = new Bob(150,300,100);
bobObject3 = new Bob(250,300,100);
bobObject4 = new Bob(350,300,100);
bobObject5 = new Bob(450,300,100);
rope1 = new Chain(bobObject1.body,roof.body,-bobDiameter*2,0);
rope2 = new Chain(bobObject2.body,roof.body,-bobDiameter*1,0);
rope3 = new Chain(bobObject3.body,roof.body,0,0);
rope4 = new Chain(bobObject4.body,roof.body,bobDiameter*1,0);
rope5 = new Chain(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



