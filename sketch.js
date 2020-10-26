var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}
function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    wall.velocityX = 0;
    var Damage = 0.5*weight*speed**2/22500
  }
  if (Damage<3.68 && Damage>12.43) {
    wall.shapeColor = "Green"
  }
  if (Damage>12.43) {
    wall.shapeColor = color(255,0,0)
  }
  drawSprites();
}