import { w, h } from '../utils/constants'

const speed = 2.5
const diameter = 20
let x, y

function setup (p, canvasParentRef) {
  p.createCanvas(w, h).parent(canvasParentRef)
  x = w / 2
  y = h / 2
  p.background(204)
}

function draw (p) {
  x += p.random(-speed, speed)
  y += p.random(-speed, speed)
  x = p.constrain(x, 0, w)
  y = p.constrain(y, 0, h)
  p.ellipse(x, y, diameter, diameter)
}

export { setup, draw }
