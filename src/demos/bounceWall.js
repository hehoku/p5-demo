import { w, h } from '../utils/constants'

const radius = 40
let x = w / 2
const speed = 4
let direction = 1

function setup (p, canvasParentRef) {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.ellipse(p.RADIUS)
}

function draw (p) {
  p.background(29, 215, 95)
  p.noStroke()
  x += speed * direction

  if (x > p.width - radius || x < 0) {
    direction *= -1
  }

  if (direction === 1) {
    p.arc(x, 60, radius, radius, 0.52, 5.76)
  } else {
    p.arc(x, 60, radius, radius, 3.67, 8.9)
  }
}

export { setup, draw }
