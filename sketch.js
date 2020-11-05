
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,roof;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var bobDiameter =0;
	//Create the Bodies Here.
	bob1 = new Bob(300,600,5);
	bob2 = new Bob(340,600,5);
	bob3 = new Bob(380,600,5);
	bob4 = new Bob(420,600,5);
	bob5 = new Bob(460,600,5);

	//roof = new Roof(400,200,800,20);
	roof1 = new Roof(300,200,10,20);
	roof2 = new Roof(340,200,10,20);
	roof3 = new Roof(380,200,10,20);
	roof4 = new Roof(420,200,10,20);
	roof5 = new Roof(460,200,10,20);

	rope1 = new String(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new String(bob2.body,roof2.body,-bobDiameter*1,0);
	rope3 = new String(bob3.body,roof3.body,0,0);
	rope4 = new String(bob4.body,roof4.body,bobDiameter*1,0);
	rope5 = new String(bob5.body,roof5.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40, y :-40})
	 } 
 };

