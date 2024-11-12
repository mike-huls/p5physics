class Rubberball extends Mover {
  constructor(x,y, m) {
  	super(x, y, m)
    this.bounceRatio = 0.8
    this.mu = 0.3;
    this.fill = 'pink';
  }
}