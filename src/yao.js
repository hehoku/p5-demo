import { w, h } from "./utils/constants";

const setup = (p, canvasParentRef) => {
  p.createCanvas(w, h).parent(canvasParentRef);
  p.background(255, 255, 255);
};

const draw = (p) => {
  console.log(w);
  p.textSize(64);
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont("Rubik Distressed");
  p.text("Better\n Late Than\n Never".toUpperCase(), w / 2, h / 2);
  p.fill(128, 128, 128);
  for (let i = 0; i < w; i += 10) {
    p.strokeWeight(4);
    p.line(i, 0, i, h);
  }
};

export { setup, draw };
