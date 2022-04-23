import { w, h } from '../utils/constants'

function setup (p) {
  p.createCanvas(w, h)
  p.fill(0)
  p.textSize(64)
  p.textAlign(p.CENTER)
}

function draw (p) {
  p.background(255)
  p.text(p.key, w / 2, h / 2)
}

export { setup, draw }
