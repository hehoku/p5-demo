import { w, h } from '../utils/constants'

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.background(29, 215, 95)
}

const draw = p => {
  if (p.mouseIsPressed) {
    p.fill(0)
  } else {
    p.fill(255)
  }
  p.ellipse(p.mouseX, p.mouseY, 100, 100)
  console.log('drawing...')
}

export { setup, draw }
