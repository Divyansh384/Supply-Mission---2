var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var r1, r2, r3;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	r1Sprite = createSprite(400, 665, 220, 10);
	r1Sprite.shapeColor = ("red");

	r2Sprite = createSprite(290, 620, 10, 100);
	r2Sprite.shapeColor = ("red");

	r3Sprite = createSprite(510, 620, 10, 100);
	r3Sprite.shapeColor = ("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	r1 = Bodies.rectangle(400, 655, 220, 10, {isStatic:true});
	World.add(world, r1);
		
	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    }
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }


