let ball;
let coin;
let coinCounter = 0; 
let speed = 10; 

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 20;
  }

  moveTowards(target) {
    this.x += target.x;
    this.y += target.y;
  }

  overlaps(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return distance < this.diameter / 2 + other.size / 2;
  }

  increaseDiameter(amount) {
    this.diameter += amount;
  }

  display() {
    fill(0, 0, 255); 
    ellipse(this.x, this.y, this.diameter);
  }
}

class Coin {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = 'red';
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ball = new Ball();
  ball.diameter = 50;

  coin = new Coin(random(width), random(height), 30);
  coin.color = 'red';
}

function draw() {
  clear();

  let moveVector = createVector(mouseX - ball.x, mouseY - ball.y);
  moveVector.normalize();
  moveVector.mult(speed);

  ball.moveTowards(moveVector);

  if (ball.overlaps(coin)) {
    coin = new Coin(random(width), random(height), 30);
    coin.color = 'red';
    ball.increaseDiameter(5);
    coinCounter++; 
  }

  ball.display();
  coin.display();

  textSize(16);
  textAlign(RIGHT, TOP);
  fill(0);
  text(`Coin: ${coinCounter}`, width - 10, 10);
  text(`Ball Diameter: ${ball.diameter}`, width - 10, 30); 
}


