import { w, h } from '../utils/constants'

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.background(29, 215, 95)
  p.stroke(154, 147, 225)
}

const draw = p => {
  // 折线
  // for (let i = 20; i < w; i += 20) {
  //   p.line(i, 0, i + i / 2, h / 2)
  //   p.line(i + i / 2, h / 2, i * 1.2, h)
  // }
  // 点和线
  for (let y = 20; y <= h - 20; y += 20) {
    for (let x = 20; x <= w - 20; x += 20) {
      p.ellipse(x, y, 4, 4)
      p.line(x, y, w / 2, h / 2)
    }
  }
}

export { setup, draw }
