import { w, h } from '../utils/constants'

let x = 0
let y = 0
let px = 0
let py = 0
const easing = 0.05

function setup (p) {
  p.createCanvas(w, h)
  p.stroke(0, 102)
}

function draw (p) {
  let targetX = p.mouseX
  x += (targetX - x) * easing
  let targetY = p.mouseY
  y += (targetY - y) * easing
  const weight = p.dist(x, y, px, py)
  p.strokeWeight(weight)
  p.line(x, y, px, py)
  py = y
  px = x
}

export { setup, draw }
