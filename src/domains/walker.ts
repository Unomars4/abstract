//Walker Class
import p5 from 'p5'

class Walker {
  readonly x: number
  readonly y: number
  private readonly sketch: p5

  constructor(width: number, height: number, sketch: p5) {
    this.x = sketch.width / 2
    this.y = sketch.height / 2
    this.sketch = sketch
  }

  public show() {
    const { x, y, sketch } = this
    sketch.stroke(125)
    sketch.point(x, y)
  }
}
