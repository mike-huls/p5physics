class Marble extends Mover {
  constructor(x,y, m) {
  	super(x, y, m)
    this.bounceRatio = 0.4;
    this.mu = 0.01;
    this.fill = 'blue';
  }
}