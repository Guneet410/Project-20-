
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
    
var ground_options = {
	isStatic : true}

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
 
	ground2 = Bodies.rectangle(100,280,50,20,ground_options);
	World.add(world,ground2);
  
	ground3 = Bodies.rectangle(300,280,50,20,ground_options);
	World.add(world,ground3);
  
	circle_options={
	restitution : 0.05}
    ball = Bodies.circle(0,200,20,circle_options);
	ball1 = Bodies.circle(0,220,20,circle_options);
    ball2 = Bodies.circle(0,240,20,circle_options);
	
	
	wedge = Bodies.rectangle(150,200,50,20,ground_options);
    World.add(world,wedge);
	wedge1 = Bodies.rectangle(150,200,20,50,ground_options);
    World.add(world,wedge1);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  fill("red");
  rect(ground.postition.x, ground.postition.y,400,20);
  rect(ground2.postition.x, ground2.postition.y,50,20);
  rect(ground3.postition.x, ground3.postition.y,50,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(ball1.position.x,ball1.position.y,20,20);
  ellipse(ball2.position.x,ball2.position.y,20,20);
  
  push ();
  translate(wedge.position.x,wedge.position.y,wedge1.position.x,wedge1.position.y);
  rotate(angle);
  rect(0,0,50,20); 
  rect(20,50);
  pop ();
 
}



