//Walker Class
import p5 from 'p5'

class Walker {
  x: number
  y: number
  private readonly sketch: p5

  constructor(sketch: p5) {
    this.x = sketch.width / 2
    this.y = sketch.height / 2
    this.sketch = sketch
  }

  public show() {
    const { x, y, sketch } = this
    sketch.stroke(125)
    sketch.point(x, y)
  }

  public step() {
    let { sketch, x, y } = this
    const choice = sketch.floor(sketch.random(4))

    if (choice === 0) {
      x++
    } else if (choice === 1) {
      x--
    } else if (choice === 2) {
      y++
    } else {
      y--
    }
  }
}
