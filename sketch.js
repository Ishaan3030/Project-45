
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background, bgImg;
var runner1, runner2;
var keyCode;

function preload()
{
	bgImg = loadImage("./assets/track.jpg");
}

function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    runner1 = new Runner1(500, 100, 20, 50);
	runner2 = new Runner2(500, 400, 20, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  image(bgImg, 0, 0, width, height);

  runner1.display();
  runner2.display();

  if(gameState === PLAY){
	  if(keyCode = UP_ARROW){
           runner1.x= runner1.x + 3;
	  }

	  runner2.velocityX = 3;
  }
  
  drawSprites();
 
}



