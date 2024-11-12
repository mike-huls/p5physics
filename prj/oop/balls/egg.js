class Egg extends Mover {
  constructor(x,y, m) {
  	super(x, y, m)
    this.bounceRatio = 0.1;
    this.mu = 0.5;
    this.fill = 'yellow';
  }
}