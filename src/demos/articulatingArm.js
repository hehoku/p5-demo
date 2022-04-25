import { w, h } from '../utils/constants'

let angle = 0.0
let angleDirection = 1
let speed = 0.005

function setup (p, canvasParentRef) {
  p.createCanvas(w, h).parent(canvasParentRef)
}

function draw (p) {
  // p5-react has a bug where it doesn't clear the canvas
  p.clear()
  p.background(29, 215, 95)
  p.translate(w / 2, h / 2)
  p.rotate(angle)
  p.strokeWeight(12)
  p.line(0, 0, 40, 0)

  p.translate(40, 0)
  p.rotate(angle * 2.0)
  p.strokeWeight(6)
  p.line(0, 0, 30, 0)

  p.translate(30, 0)
  p.rotate(angle * 2.5)
  p.strokeWeight(3)
  p.line(0, 0, 20, 0)

  angle += speed * angleDirection
  if (angle > p.QUARTER_PI || angle < 0) {
    angleDirection *= -1
  }
}

export { setup, draw }
