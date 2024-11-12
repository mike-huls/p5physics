let balls = [];
let mu = 0.2;		//friction coeff
let gravity = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 5; i++) {
  	let randomX = random(150,200);
  	let randomY = random(150, 200);
  	let randommass = random(0.5, 2);
    // let mover = new Mover(random(150,200), random(150, 200), random(1,6));
    balls.push(new Rubberball(randomX+10, randomY-10, randommass));
    balls.push(new Egg(randomX, randomY, randommass));
    balls.push(new Marble(randomX+10, randomY+10, randommass));
  }
}

function draw() {
  background(0);
  
  for (const mover of balls) {
  
    if (mouseIsPressed) {
      // difference between two vectors is the direction
      let mouse = createVector( mouseX, mouseY);
      mouse.sub(mover.pos);
      mouse.setMag(3);
      // let wind = createVector(0.8, 0);
      mover.applyForce(mouse);
    }


    let gravityForce = createVector(0, gravity);
    let weight = p5.Vector.mult(gravityForce, mover.mass);
    mover.applyForce(weight);
    mover.friction()
    mover.update();
    mover.edges();
    mover.show();
  }
}