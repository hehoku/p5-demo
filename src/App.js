import './App.css'
import Sketch from 'react-p5'
import { setup, draw } from './demos/robot'

function App () {
  return <Sketch setup={setup} draw={draw} />
}

export default App
