import './App.css'
import Sketch from 'react-p5'
import { preload, setup, draw } from './demos/robot'

function App () {
  return <Sketch setup={setup} draw={draw} preload={preload} />
}

export default App
