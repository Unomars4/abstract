//Walker Class
import p5 from 'p5'

export default class Walker {
  x: number
  y: number
  private readonly sketch: p5

  constructor(sketch: p5) {
    this.x = sketch.width / 2
    this.y = sketch.height / 2
    this.sketch = sketch
  }

  public show() {
    this.sketch.stroke(0)
    this.sketch.point(this.x, this.y)
  }

  public step() {
    const choice = this.sketch.floor(this.sketch.random(4))

    if (choice === 0) {
      this.x++
    } else if (choice === 1) {
      this.x--
    } else if (choice === 2) {
      this.y++
    } else {
      this.y--
    }
  }
}
