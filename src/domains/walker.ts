//Walker Class
import p5 from 'p5';

export class Walker {
  x: number;
  y: number;
  protected readonly sketch: p5;
  name: string;

  constructor(sketch: p5, name: string = 'Basic') {
    this.x = sketch.width / 2;
    this.y = sketch.height / 2;
    this.sketch = sketch;
    this.name = name;
  }

  public show() {
    this.sketch.strokeWeight(5);
    this.sketch.stroke('rgba(120, 120, 120, 0.2)');
    this.sketch.point(this.x, this.y);
  }

  protected edgeOfCanvasReset(): void {
    if (this.x > this.sketch.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.sketch.width;
    } else if (this.y > this.sketch.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = this.sketch.height;
    }
  }

  public step({
    mouseX,
    mouseY,
    screenWidth,
    screenHeight,
  }: {
    mouseX: number;
    mouseY: number;
    screenWidth: number;
    screenHeight: number;
  }): void;

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
    super(sketch, 'Advanced');
  }

  public override step(): void {
    const xStep = this.sketch.random(-1, 1);
    const yStep = this.sketch.random(-1, 1);

    this.x += xStep;
    this.y += yStep;

    this.edgeOfCanvasReset();
  }
}

export class DownRightWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch, 'DownRight');
  }

  public override step(): void {
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

    this.edgeOfCanvasReset();
  }
}

export class DynamicWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch, 'Dynamic');
  }

  public step({
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
    } else if (rand > 0.5 && rand < 0.6) {
      this.x++;
    } else if (rand > 0.6 && rand < 0.7) {
      this.x--;
    } else if (rand > 0.7 && rand < 0.8) {
      this.y--;
    } else if (rand > 0.8 && rand < 0.9) {
      this.y++;
    }

    this.edgeOfCanvasReset();
  }
}

export class GaussianWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch, 'Gaussian');
  }

  public override step(): void {
    const xStep = Math.floor(this.sketch.randomGaussian(0, 3)),
      yStep = Math.floor(this.sketch.randomGaussian(0, 3));

    this.x += xStep;
    this.y += yStep;

    this.edgeOfCanvasReset();
  }
}

export class LevyFlightWalker extends Walker {
  constructor(sketch: p5) {
    super(sketch, 'Levy Flight');
  }

  public override step(): void {
    const step = 5;
    let xStep = this.acceptReject() * step,
      yStep = this.acceptReject() * step;

    if (this.sketch.random([false, true])) {
      xStep *= -1;
    }

    if (this.sketch.random([false, true])) {
      yStep *= -1;
    }

    this.x += xStep;
    this.y += yStep;

    this.edgeOfCanvasReset();
  }

  private acceptReject(): number {
    while (true) {
      const r1 = this.sketch.random(1),
        probability = r1 * r1,
        r2 = this.sketch.random(1);

      if (r2 > probability) {
        return r1;
      }
    }
  }
}
