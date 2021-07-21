var iss, spaceCraft, hasDocked = false;
function preload(){
  bg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  scimg1 = loadImage("spacecraft1.png");
  scimg2 = loadImage("spacecraft2.png");
  scimg3 = loadImage("spacecraft3.png");
  scimg4 = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(1000,400);
  iss = createSprite(200, 200, 50, 50);
  iss.addImage(issimg);
  iss.scale = 0.75;
  spaceCraft = createSprite(500, 200, 50, 50);
  spaceCraft.addImage(scimg1);
  spaceCraft.scale = 0.15;
}

function draw() {
  background(bg);  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-20,20);
    
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-10;
      spaceCraft.addImage(scimg2);
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x-10;
      spaceCraft.addImage(scimg3);
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x+10;
      spaceCraft.addImage(scimg4);
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.y = spaceCraft.y+10;
      spaceCraft.addImage(scimg1);
    }
  }

  if(spaceCraft.y>=250 && spaceCraft.x<=50){
    hasDocked = true;
    textSize(20);
    fill("red");
    text("CONGRATULATIONS NOW THEY CAN EAT AS MUCH AS THEY WANT!!", 250,200);
  }
  drawSprites();
}

