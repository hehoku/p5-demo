import { w, h } from '../utils/constants'

let x = 180
let y = 400
let bodyHeight = 153
let neckHeight = 56
const radius = 45
let angle = 0.0

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.strokeWeight(2)
  p.ellipseMode(p.RADIUS)
  p.textFont('Source Code Pro')
}

const draw = p => {
  // change position by a small random amount
  x += p.random(-4, 4)
  y += p.random(-1, 1)

  // change height of neck
  neckHeight = 80 + p.sin(angle) * 30
  angle += 0.05

  p.clear()
  p.background(29, 215, 95)

  // text
  p.textSize(28)
  p.text('on small step for man ...', 25, 60)

  let ny = y - 1 * (bodyHeight + neckHeight + radius)
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
}

export { setup, draw }
