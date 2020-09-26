var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
boxposition = width/2-100;
boxY = 610;
engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxLeftSprite = createSprite(boxposition,boxY,20,100);
	boxLeftSprite.shapeColor = "red";
	boxLeftBody = Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase = createSprite(boxposition+100,boxY+40,200,20);
	boxBase.shapeColor = "red";
	boxBottomBody = Bodies.rectangle(boxposition+100,boxY+25,200,20,{isStatic:true});
	World.add(world,boxBottomBody);

	boxRightSprite = createSprite(boxposition+200,boxY,20,100);
	boxRightSprite.shapeColor = "red";
	boxRightBody = Bodies.rectangle(boxposition+180,boxY,20,100,{isStatic:true});
	World.add(world,boxRightBody);

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



