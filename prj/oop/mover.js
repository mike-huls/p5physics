class Mover {
  mu = 0.1;
  constructor(x,y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    
    this.bounceRatio = random(50,75)/150;
    this.fill = (150, 150, 150);
    this.currentFill = this.fill;
    this.isTouchingGround = false;
  }
  
  friction() {
    let diff = height - (this.pos.y + this.r);
    if (this.isTouchingGround) {
      // Direction of Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of Friction
      let normal = this.mass;
      friction.setMag(this.mu * normal);
      this.applyForce(friction);
    }
  }
  
  applyForce(force) {
    this.acc.add(force);
  }  
  

  
  edges() {
    let isTouchingEdge = false;
    this.isTouchingGround = false;
    if (this.pos.y >= height-(this.r*2)) {
      isTouchingEdge = true;
      this.isTouchingGround = true;
      this.pos.y = height-(this.r*2);
      this.vel.y *= -this.bounceRatio;
    } else if (this.pos.y <= this.r) {
      isTouchingEdge = true;
      this.pos.y = 0 + this.r;
      this.vel.y *= -this.bounceRatio;
    }
    
    if (this.pos.x >= width - this.r) {
      isTouchingEdge = true;
      this.pos.x = width - this.r;
      this.vel.x *= -this.bounceRatio;
    } else if (this.pos.x <= this.r) {
      isTouchingEdge = true;
      this.pos.x = this.r;
      this.vel.x *= -this.bounceRatio;
    }
    
    // if (isTouchingEdge) {
    //   this.currentFill = (255, 230, 0);
    // } else {
    //   this.currentFill = this.fill
    // }
  }
    
  update() {
    this.currentFill = this.fill;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  show() {
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(this.currentFill);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}