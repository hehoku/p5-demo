import { w, h } from '../utils/constants'

let x = 120
let y = 60
let radius = 12

// The area of the circle keeps increasing util its boundary touches the mouse.
function setup (p) {
  p.createCanvas(w, h)
  p.ellipseMode(p.RADIUS)
}

function draw (p) {
  p.background(220)
  let d = p.dist(p.mouseX, p.mouseY, x, y)
  if (d < radius) {
    p.fill(0)
  } else {
    radius++
    p.fill(255)
  }
  p.ellipse(x, y, radius, radius)
}

export { setup, draw }
