import { w, h } from '../utils/constants'

let x = 60
const y = h / 2
let bodyHeight = 160
let neckHeight = 70
const radius = 45
const ny = y - bodyHeight - neckHeight - radius
const easing = 0.04

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.background(29, 215, 95)
  p.strokeWeight(2)
  p.ellipseMode(p.RADIUS)
}

const draw = p => {
  const targetX = p.mouseX
  x += (targetX - x) * easing
  if (p.mouseIsPressed) {
    neckHeight = 16
    bodyHeight = 90
  } else {
    neckHeight = 70
    bodyHeight = 160
  }
  // neck
  p.stroke(102)
  p.line(x + 12, y - bodyHeight, x + 12, ny)

  // antennae
  p.line(x + 12, ny, x - 18, ny - 43)
  p.line(x + 12, ny, x + 42, ny - 99)
  p.line(x + 12, ny, x + 78, ny + 15)

  // body
  p.noStroke()
  p.fill(102)
  p.ellipse(x, y - 33, 33, 33)
  p.fill(0)
  p.rect(x - 45, y - bodyHeight, 90, bodyHeight - 33)

  // head
  p.fill(0)
  p.ellipse(x + 12, ny, radius, radius)
  p.fill(255)
  p.ellipse(x + 24, ny - 6, 14, 14)
  p.fill(0)
  p.ellipse(x + 24, ny - 6, 3, 3)
}

export { setup, draw }
