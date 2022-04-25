import { w, h } from '../utils/constants'

let x = 60
const y = h / 2
let bodyHeight = 180
let neckHeight = 40
const radius = 45
const easing = 0.04

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.strokeWeight(2)
  p.ellipseMode(p.RADIUS)
}

const draw = p => {
  p.clear()
  p.background(29, 215, 95)
  let ny = -1 * (bodyHeight + neckHeight + radius)
  p.translate(p.mouseX, y)
  if (p.mouseIsPressed) {
    p.scale(1.0)
  } else {
    p.scale(0.6)
  }
  // neck
  p.stroke(102)
  p.line(12, -bodyHeight, 12, ny)

  // hair
  p.push()
  p.translate(12, ny)
  let angle = -p.PI / 40.0
  for (let i = 0; i < 40; i++) {
    p.line(radius + 20, 0, 0, 0)
    p.rotate(angle)
  }
  p.pop()

  // body
  p.noStroke()
  p.fill(102)
  p.ellipse(0, -33, 33, 33)
  p.fill(0)
  p.rect(-45, -bodyHeight, 90, bodyHeight - 33)

  // head
  p.fill(0)
  p.ellipse(12, ny, radius, radius)
  p.fill(255)
  p.ellipse(24, ny - 6, 14, 14)
  p.fill(0)
  p.ellipse(24, ny - 6, 3, 3)
}

export { setup, draw }
