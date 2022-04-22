import { w, h } from '../utils/constants'

let x = 100
const y = h / 2
const bodyHeight = 110
const neckHeight = 30
const radius = 45
const ny = y - bodyHeight - neckHeight - radius

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.background(29, 215, 95)
  p.strokeWeight(2)
  p.ellipseMode(p.RADIUS)
}

const draw = p => {
  // neck
  p.stroke(102)
  p.line(x + 2, y - bodyHeight, x + 2, ny)
  p.line(x + 12, y - bodyHeight, x + 12, ny)
  p.line(x + 22, y - bodyHeight, x + 22, ny)

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
  p.fill(102)
  p.rect(x - 45, y - bodyHeight + 17, 90, 6)

  // head
  p.fill(0)
  p.ellipse(x + 12, ny, radius, radius)
  p.fill(255)
  p.ellipse(x + 24, ny - 6, 14, 14)
  p.fill(0)
  p.ellipse(x + 24, ny - 6, 3, 3)
  p.fill(153)
  p.ellipse(x, ny - 8, 5, 5)
  p.ellipse(x + 30, ny - 26, 4, 4)
  p.ellipse(x + 41, ny + 6, 3, 3)
}

export { setup, draw }
