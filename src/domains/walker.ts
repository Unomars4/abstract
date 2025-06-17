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

export class DownRightWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch);
    this.name = 'DownRight';
  }

  public step(): void {
    const choice = this.sketch.floor(this.sketch.random(10));

    // 40% chance
    if (choice > 5) {
      this.x++;
      //30% chance
    } else if (choice < 6 && choice > 3) {
      this.y++;
    } else if (choice > 1 && choice < 4) {
      this.x--;
    } else {
      this.y--;
    }
  }
}

export class DynamicWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch);
    this.name = 'Dynamic';
  }

  override step({
    mouseX,
    mouseY,
    screenWidth,
    screenHeight,
  }: {
    mouseX: number;
    mouseY: number;
    screenWidth: number;
    screenHeight: number;
  }): void {
    const rand = this.sketch.random(1),
      xDiff = mouseX - this.x,
      yDiff = mouseY - this.y,
      mouseIsReachable =
        mouseX >= 0 &&
        mouseX <= screenWidth &&
        mouseY >= 0 &&
        mouseY <= screenHeight;

    if (mouseIsReachable && rand < 0.5) {
      this.x += xDiff > 0 ? 1 : -1;
      this.y += yDiff > 0 ? 1 : -1;
    } else if (rand < 0.6) {
      this.x++;
    } else if (rand < 0.7) {
      this.x--;
    } else if (rand < 0.8) {
      this.y--;
    } else {
      this.y++;
    }
  }
}

export class GaussianWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch);
    this.name = 'Gaussian';
  }

  override step({ width, height }: { width: number; height: number }): void {
    const xStep = this.sketch.floor(this.sketch.randomGaussian(1, 10)),
      yStep = this.sketch.floor(this.sketch.randomGaussian(1, 10));

    this.x += xStep;
    this.y += yStep;
  }
}
