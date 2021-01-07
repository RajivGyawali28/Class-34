const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var ball, ground, rope, block;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,800,800,20);

	ball = new Ball(30,550,50);

	rope = new Rope(ball.body,{x:280,y:350});

	block1 = new Block(420,780,30,30);
	block2 = new Block(450,780,30,30);
	block3 = new Block(480,780,30,30);
	block4 = new Block(510,780,30,30);
	block5 = new Block(540,780,30,30);
	block6 = new Block(420,750,30,30);
	block7 = new Block(450,750,30,30);
	block8 = new Block(480,750,30,30);
	block9 = new Block(510,750,30,30);
	block10 = new Block(540,750,30,30);
	block11 = new Block(420,720,30,30);
	block12 = new Block(450,720,30,30);
	block13 = new Block(480,720,30,30);
	block14 = new Block(510,720,30,30);
	block15 = new Block(540,720,30,30);
	block16 = new Block(420,690,30,30);
	block17 = new Block(450,690,30,30);
	block18 = new Block(480,690,30,30);
	block19 = new Block(510,690,30,30);
	block20 = new Block(540,690,30,30);
	block21 = new Block(420,660,30,30);
	block22 = new Block(450,660,30,30);
	block23 = new Block(480,660,30,30);
	block24 = new Block(510,660,30,30);
	block25 = new Block(540,660,30,30);
	block26 = new Block(420,630,30,30);
	block27 = new Block(450,630,30,30);
	block28 = new Block(480,630,30,30);
	block29 = new Block(510,630,30,30);
	block30 = new Block(540,630,30,30);
	block31 = new Block(420,600,30,30);
	block32 = new Block(450,600,30,30);
	block33 = new Block(480,600,30,30);
	block34 = new Block(510,600,30,30);
	block35 = new Block(540,600,30,30);
	block36 = new Block(420,570,30,30);
	block37 = new Block(450,570,30,30);
	block38 = new Block(480,570,30,30);
	block39 = new Block(510,570,30,30);
	block40 = new Block(540,570,30,30);
	block41 = new Block(420,540,30,30);
	block42 = new Block(450,540,30,30);
	block43 = new Block(480,540,30,30);
	block44 = new Block(510,540,30,30);
	block45 = new Block(540,540,30,30);
	block46 = new Block(420,510,30,30);
	block47 = new Block(450,510,30,30);
	block48 = new Block(480,510,30,30);
	block49 = new Block(510,510,30,30);
	block50 = new Block(540,510,30,30);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("grey");

  ground.display();

  ball.display();

  rope.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
 
}



