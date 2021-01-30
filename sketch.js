var bob,larry


function setup() {
 createCanvas(800,400);
 
 bob = createSprite(200,200,200,200)
 bob.shapeColor = ("blue")
 
 larry = createSprite(400,200,200,200)
 larry.shapeColor = ("red")


}

function draw() {
  background(255,255,255); 
  bob.x = mouseX
  bob.y = mouseY
  if(bob.x - larry.x < bob.width/2 + larry.width/2 &&
    larry.x - bob.x < bob.width/2 + larry.width/2 &&
    bob.y - larry.y < bob.height/2 + larry.height/2 &&
    larry.y - bob.y < bob.height/2 + larry.height/2){
      bob.shapeColor = ("purple")
      larry.shapeColor = ("yellow")
    }
    else{
      bob.shapeColor = ("blue") 
      larry.shapeColor = ("red")
    }
  drawSprites();



}