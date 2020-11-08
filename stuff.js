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
  
  
  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x > 0)
              {
                  score = score+0;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;

              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x < 0 && particle.body.position.x > 80)
              {
                  score = score+300;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>400)
      {
              if(particle.body.position.x < 81 && particle.body.position.x > 160)
              {
                  score = score+200;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;
                  
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x < 161 && particle.body.position.x > 240)
              {
                  score = score+100;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;
                  
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x < 241 && particle.body.position.x > 320)
              {
                  score = score+100;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;
                  
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y>760)
      {
              if(particle.body.position.x < 321 && particle.body.position.x > 400)
              {
                  score = score+200;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;

              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y < 760)
      {
              if(particle.body.position.x < 401 && particle.body.position.x > 480)
              {
                  score = score+300;
                  count = count+1;
                  particle=null;
                  if ( count>= 5)gameState = END;
    
              }
      }
  }

  if(particle!=null)
  {
    particle.display();

      if (particle.body.position.y > 760)
      {
              if(particle.body.position.x < 480)
              {
                  score = score+0;
                  count = count+1;
                  particle=null;
                  if ( count>= 5) gameState = END;
                  
              }
      }
  }

