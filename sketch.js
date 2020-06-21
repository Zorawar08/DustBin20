const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1;
var rect1 ,rect2, rect3,rect4image;
var chain1;

function preload(){
	rect4image = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,400);
	rect1 = new Rect(615,630,10,100);
	rect2 = new Rect(715,675,200,10);
	rect3 = new Rect(795,630,10,100);
	chain1 = new Chain(ball1.body,{x:150,y:400});

	//Create a Ground
	ground = Bodies.rectangle(400, 680, 800, 10, {isStatic:true} );
 	World.add(world, ground);}

function draw() {
  Engine.update(engine);
  background(255);
  ball1.display(); 
  rect1.display();
  rect2.display();
  rect3.display();
  chain1.display(); 
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
	
	
	}
function mouseReleased(){
	chain1.fly();
	
	
	}




