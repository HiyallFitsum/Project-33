if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
}

  for(var j = 0; j < particles.length; j++){
  
    particles[j].display();
  }
  function mousePressed()
  {
    if(gameState!=="END")
    {
      count = count - 1;
     particle=new Particle(mouseX, 10, 10, 10);
    }
  }
  
  function mouseWentDown()
  {
    if(gameState!=="END")
    {
      count = count - 1;
     particle=new Particle(mouseX, 10, 10, 10);
    }
  }
  