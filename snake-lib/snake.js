function Snake() {
	this.head = createVector(0, 0);
	this.tail = [createVector (-1, 0)];
	this.dir = createVector(1, 0);
	this.grow = 0;
	this.prevDir = this.dir;
	
	this.move = function() {
		len = this.tail.length;
		for (var i = 0; i < len - 1; i++)
			this.tail[i] = this.tail[i+1];
		
		if (this.grow > 0) {
			this.tail.push(this.head.copy());
			this.grow--;
		} else if (len > 0)
			this.tail[len-1] = this.head.copy();
		
		delta = this.dir.copy().mult(res);
		this.head.add(delta);
		this.head.set(constrain(this.head.x, 0, width-res),
					  constrain(this.head.y, 0, height-res));
	}
	
	this.show = function() {
		fill(255, 255, 0);
		rect(this.head.x, this.head.y - 1, res, res);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y - 1, res, res);
		}
		this.prevDir = this.dir;
	}
	
	this.changeDir = function(v) {
		if (this.prevDir.copy().add(v).magSq() > 0)
			this.dir = v;
	}
	
	this.eat = function(food) {
		if (this.head.equals(food.pos)) {
			this.grow = 3;
			food.rndpos();
			frameRate(fps+=0.2);
		}
	}
	
	this.die = function() {
		for (var i = 0; i < this.tail.length; i++) {
			if (this.head.equals(this.tail[i])) {
				fill(255, 0, 0);
				rect(this.head.x, this.head.y, res, res);
				
				push();
				fill(255);
				textAlign(CENTER, CENTER);
				textSize(26);
				textStyle(BOLD);
				text("Game over! Press 'r' to restart", width/2, height/2);
				pop();
				
				noLoop();
			}
		}
	}
}