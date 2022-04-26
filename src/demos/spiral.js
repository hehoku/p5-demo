import { w, h } from '../utils/constants'

let angle = 0.0
const offset = h / 2
let scalar = 2
let speed = 0.05

function setup (p, parentCanvas) {
  p.createCanvas(w, h).parent(parentCanvas)
  p.fill(0)
  p.background(29, 215, 95)
}

function draw (p) {
  const x = offset + p.cos(angle) * scalar
  const y = offset + p.sin(angle) * scalar
  p.ellipse(x, y, 2, 2)
  angle += speed
  scalar += speed
}

export { setup, draw }
