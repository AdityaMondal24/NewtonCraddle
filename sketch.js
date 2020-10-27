const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,roof;

function setup()
{
	var canvas = createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	bob3 = new Bob(600,400,40);
	bob2 = new Bob(560,400,40);
	bob1 = new Bob(520,400,40);
	bob4 = new Bob(640,400,40);
	bob5 = new Bob(680,400,40);
	roof = new Ground(600,300,300,20);
	ground = new Ground(600,700,1200,20);

	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);


}

function draw()
{
	background(255);
	Engine.update(engine);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	ground.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85});
  
	}
}