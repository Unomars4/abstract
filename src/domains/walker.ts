//Walker Class
import p5 from 'p5';

export class Walker {
  x: number;
  y: number;
  protected readonly sketch: p5;
  name: string;

  constructor(sketch: p5) {
    this.x = sketch.width / 2;
    this.y = sketch.height / 2;
    this.sketch = sketch;
    this.name = 'Basic';
  }

  public show() {
    this.sketch.strokeWeight(5);
    this.sketch.stroke(0);
    this.sketch.point(this.x, this.y);
  }

  public step() {
    const choice = this.sketch.floor(this.sketch.random(4));

    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}

export class AdvancedWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch);
    this.name = 'Advanced';
  }

  public step(): void {
    const xStep = this.sketch.random(-1, 1);
    const yStep = this.sketch.random(-1, 1);

    this.x += xStep;
    this.y += yStep;
  }
}
