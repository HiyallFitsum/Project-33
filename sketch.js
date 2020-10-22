var WON = 1;
var PLAY = 0;
var END = -1;
var gameState = PLAY;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var particle;

var count = 10;

var line;

function setup() {
  createCanvas(480,800);

var line = createSprite(width/2, 495, width, 2.5);
line.shapeColor = "yellow";

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,800,480,20);
  
  for (var k = 0; k <=width; k= k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

for(var i = 75; i <=width; i=i+50){
  plinkos.push(new Plinko(i,75));
}

for (var i = 15; i <=width-10; i=i+50){
  plinkos.push(new Plinko(i,175));
}

for (var i = 75; i <=width; i=i+50) 
    {
       plinkos.push(new Plinko(i,275));
    }
for (var i = 50; i <=width-10; i=i+50) 
    {
       plinkos.push(new Plinko(i,375));
    }
  
Engine.run(engine);

}

function draw() {
  background(0);  

  text("Score:" + score, 400, 50);

  text("Turns:" + count, 50, 50);

  textSize(20);
  fill("white");
  text("300", 25, 650);
  text("200", 105, 650);
  text("100", 185, 650);
  text("100", 265, 650);
  text("200", 345, 650);
  text("300", 425, 650);

  ground.display();

  for(var j = 0; j <plinkos.length; j++){
    
    plinkos[j].display();
  }
  
  for(var k = 0; k < divisions.length; k++){
    
    divisions[k].display();
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 0)
              {
                  score = score+0;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 0 && particle.body.position.x < 80)
              {
                  score = score+300;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 81 && particle.body.position.x < 160)
              {
                  score = score+200;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 161 && particle.body.position.x < 240)
              {
                  score = score+100;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 241 && particle.body.position.x < 320)
              {
                  score = score+100;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) {         
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 321 && particle.body.position.x < 400)
              {
                  score = score+200;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 401 && particle.body.position.x < 480)
              {
                  score = score+300;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x < 480)
              {
                  score = score+0;
                  count = count-1;
                  particle=null;
                  if ( count<= 0) { 
                    count = 0;
                    gameState = "END";
                  }
              }
      }
  }


  if(gameState === "END" && score <= 100)
  {
    textSize(25);
    fill("white");
    text("You Win!", width - 300, height - 600);
  }

  
  if(gameState === "END" && score > 50)
  {
    textSize(25);
    fill("white");
    text("Game Over!", width - 300, height - 600)
  }

  



  drawSprites();
}





function mouseDragged()
  {
    if(gameState!=="END")
    {
     particle=new Particle(mouseX, 10, 10, 10);
    }
  }