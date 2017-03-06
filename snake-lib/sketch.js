res = 30;
var snake;
var food;
var fps = 7;

function setup() {
	createCanvas(600, 600);
	frameRate(fps);
	snake = new Snake(res);
	food = new Food();
}

function draw() {
	background(51);
	snake.move();
	snake.eat(food);
	snake.show();
	food.show();
	snake.die();
	
	push();
	textAlign(LEFT,TOP);
	fill(255);
	textSize(16);
	textStyle(BOLD);
	text("length: " + (snake.tail.length + 1), 7, 7);
	pop();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.changeDir(createVector(0, -1));
	} else if (keyCode === DOWN_ARROW) {
		snake.changeDir(createVector(0, 1));
	} else if (keyCode === RIGHT_ARROW) {
		snake.changeDir(createVector(1, 0));
	} else if (keyCode === LEFT_ARROW) {
		snake.changeDir(createVector(-1, 0));
	} else if (key === "R") {
		frameRate(fps = 7);
		snake = new Snake(res);
		food = new Food();
		loop();
	}
}