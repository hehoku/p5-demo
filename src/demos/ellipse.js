import { w, h } from '../utils/constants'

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
}

const draw = p => {
  p.background(29, 215, 95)
  p.fill(255)
  p.ellipse(w / 2 - 100, h / 2, 100, 50)
}

export { setup, draw }
