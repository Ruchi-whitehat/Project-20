var car,wall;
var d;
var speed, w; 


function setup() {
  createCanvas(800, 400);

	speed=Math.round(random(55,90))
	weight=Math.round(random(400,1500));


	car=createSprite(50, 200, 50,50);   
	car.velocityX = speed;
	car.shapeColor= "white";

  	wall=createSprite(700,200, 50, height/2)
  	wall.shapeColor="grey";
}


function draw() {
  background("black");

  if(wall.x-car.x < car.width/2 + wall.width/2)  {

  	car.velocityX=0;
	d = (0.5 * weight * speed* speed)/22500;
	  
	if(d>180){
		car.shapeColor = "red";
	}
	else if(d>100 && d<180){
		car.shapeColor = "yellow";
	}
	else if(d<100){
		car.shapeColor = "green";
	}
  }   
  drawSprites();
}


