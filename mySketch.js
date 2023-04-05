// Morgan Connor
// Pascal Huynh
// 502-A22-LA WEB AND FX: FROM THEORY TO PRACTICE
// Over Ambitious
//https://openprocessing.org/sketch/1861229



//How to operate:
//Holding the mouse will increase the size of the circle, holding space will make the circle shrink


//This art piece is designed to represent the delicate balance of humanity. As the circle grows the more squares appear, creating a dependence on the circle.
//However, as the circle grows larger the squares also get more agitated. If you try to shrink the circle the squares become calmer. 
//The more you mess with this balance of squares and agiation, the more volatile the cicles growth becomes, eveytime getting closer to self destruction. When the circle becomes too large,
//it consumes the squares, When its gone, the squares cannot survive. This art piece is designed to be subjective,
//the circle and the squares could represent power, progress, organization, industrialization, etc. In the end how you percieve this art piece is the viewers responsibility



let circleSize = 20;
let squares = [];
let squareShake = 0;
let cicleShake = 0;
let growthRate = 0.5;
let shrinking = false;


function setup() {
	createCanvas(1280, 720);
	background(103, 146, 137);
	rectMode(CENTER);
}


function draw() {
  background(103, 146, 137);
  
	
//parameters for squares and square shake
  for (let location = 0; location < squares.length; location=location + 1) {
    fill('#ee9b00');
    rect(squares[location].x + random(squareShake), squares[location].y + random(squareShake), 30, 30);
		squareShake = circleSize/20;
	}

	
// Draw circle following mouse, circleShake
  	fill('#9b2226');
		circleShake = growthRate/2
  	ellipse(mouseX + random(circleShake), mouseY + random(circleShake), circleSize, circleSize);
	
	
// When mouse is pressed circle grows, growthrate increases, circle shake increases and squares are created
  if (mouseIsPressed) {
    circleSize = circleSize + growthRate;
		growthRate = growthRate + circleSize/750;
    squares.push({x: random(width), y: random(height)});
  }
	
	
//Begins shrinking when space bar is pressed
	if (keyIsPressed && key == ' ') {
    shrinking = true;
  }
	if (shrinking) {
    circleSize = circleSize - growthRate;
  if (circleSize <= 0) 
    circleSize = 0;
    shrinking = false;
  }
		
  
  		// If circle gets too big or small, reset size and clear squares
  if (circleSize > 1500 || circleSize <= 0){
	if (circleSize = 0)
    circleSize = 20;
    squares = [];
		growthRate = 0.5;
		squareShake = 0;
  }
}