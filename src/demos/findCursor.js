import { w, h } from '../utils/constants'

let x
let offset = 10

function setup (p) {
  p.createCanvas(w, h)
  x = p.width / 2
}

function draw (p) {
  p.background(220)
  if (p.mouseX > x) {
    x += 0.5
    offset = -10
  }
  if (p.mouseX < x) {
    x -= 0.5
    offset = 10
  }
  p.line(x, 0, x, p.height)
  p.line(p.mouseX, p.mouseY, p.mouseX + offset, p.mouseY - 10)
  p.line(p.mouseX, p.mouseY, p.mouseX + offset, p.mouseY + 10)
  p.line(p.mouseX, p.mouseY, p.mouseX + offset * 3, p.mouseY)
}

export { setup, draw }
