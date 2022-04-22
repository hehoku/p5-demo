import { w, h } from '../utils/constants'

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef)
  p.background(29, 215, 95)
  p.strokeWeight(2)
  p.ellipseMode(p.RADIUS)
}

const draw = p => {
  // neck
  p.stroke(102)
  p.line(266, 257, 266, 162)
  p.line(276, 257, 276, 162)
  p.line(286, 257, 286, 162)

  // antennae
  p.line(276, 155, 246, 112)
  p.line(276, 155, 306, 56)
  p.line(276, 155, 342, 170)

  // body
  p.noStroke()
  p.fill(102)
  p.ellipse(264, 377, 33, 33)
  p.fill(0)
  p.rect(219, 257, 90, 120)
  p.fill(102)
  p.rect(219, 274, 90, 6)

  // head
  p.fill(0)
  p.ellipse(276, 155, 45, 45)
  p.fill(255)
  p.ellipse(288, 150, 14, 14)
  p.fill(0)
  p.ellipse(288, 150, 3, 3)
  p.fill(153)
  p.ellipse(263, 148, 5, 5)
  p.ellipse(296, 130, 4, 4)
  p.ellipse(305, 162, 3, 3)
}

export { setup, draw }
