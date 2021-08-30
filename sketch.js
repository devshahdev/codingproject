var ball, ground, wall, wall1, wall2, wall3, wall4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);



	engine = Engine.create();
	world = engine.world;

	var ball_options=
	{
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}


	//Create the Bodies Here.
	ball = Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);

	wall = new Ground(200,500,20,17);
	wall1 = new Ground(200,500,700,20);
	wall2 = new Ground(950,300,100,10);
	wall3 = new Ground(900,265,10,60);
	wall4 = new Ground(1000,200,10,190)




	Engine.run(engine);
	ellipseMode(RADIUS);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  wall.show();
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();

  if(keyDown ("UP_ARROW"))
  {
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:-3});
  }



  
  drawSprites();
 
}



