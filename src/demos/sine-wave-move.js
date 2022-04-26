import { w, h } from '../utils/constants'

let angle = 0.0
const offset = 60
const scalar = 40
const speed = 0.05

function setup (p, parentCanvas) {
  p.createCanvas(w, h).parent(parentCanvas)
}

function draw (p) {
  p.clear()
  p.background(29, 215, 95)
  p.noStroke()
  const y1 = offset + p.sin(angle) * scalar
  const y2 = offset + p.sin(angle + 0.4) * scalar
  const y3 = offset + p.sin(angle + 0.8) * scalar
  p.ellipse(80, y1, 40, 40)
  p.ellipse(130, y2, 40, 40)
  p.ellipse(180, y3, 40, 40)
  angle += speed
}

export { setup, draw }
