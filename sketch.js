//adding shortcut terms for all the useful matter.js terms
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declaring the variables
var player, playertest;
var floor1, floor2, floor3;
var engine, world;

function setup() {
  //setting the canvas size
  createCanvas(windowWidth-1,windowHeight- 4);

  //running the engine and world
  engine = Engine.create();
  world = engine.world;

  //creating the floor objects
  floor1 = new Floor(375,height/2 + 150,1100,25);
  floor2 = new Floor(width-200,height/2,1000,25);
  floor3 = new Floor(375,height/2-150,950,25);

  //creating a player object
  player = new Player(width/2-100,0,30,30);

  var render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1000,
    height: 400,
    wireframes: false
  }
  });

  Matter.Render.run(render);
}


function draw() 
{
  
  //setting the background color
  background(51);
  //continuously updating the engine
  Engine.update(engine);
  
  //displaying the objects
  
  floor1.display();
  floor2.display();
  floor3.display();
  player.display();
  
  //player controls

  if(keyIsDown(LEFT_ARROW)){
    player.body.position.x -= 0.5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.body.position.x += 0.5;
  }
}

