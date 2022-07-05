
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let ball_options={
		isStatic:false,
		restitution:0.85,
		friction:0,
		density:1.2
	}
	fill("white")
	ball=Bodies.circle(200,10,40)
	World.add(world,ball)

	rightside = new Ground(1300,600,20,120)
	leftside = new Ground(1100,600,20,120)
	groundObj = new Ground(width/2,670,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display()
  leftside.display()
  rightside.display()

  ellipse(ball.position.x,ball.position.y,40,40)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y:-0.3})
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.3, y:0})
	}
}


