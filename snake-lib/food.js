function Food() {
	this.pos;
	
	this.show = function() {
		fill(200, 0, 120);
		ellipse(this.pos.x + res/2, this.pos.y + res/2, res - 1, res - 1);
	}
	
	this.rndpos = function() {
		var onSnake = 0;
		do {
			this.pos = createVector(random(height), random(width));
			this.pos = this.pos.sub(createVector(this.pos.x % res, 
												 this.pos.y % res));
			onSnake = this.pos.equals(snake.head);
			for (var i = 0; i < snake.tail.length && !onSnake; i++)
				if (this.pos.equals(snake.tail[i]))
					onSnake = 1;
		} while (onSnake);
	}
	this.rndpos();
}