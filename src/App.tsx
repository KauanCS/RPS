import { useState } from 'react'
import './App.css'

import Scoreboard from './components/scoreboard'
import TriangleOption from './components/triangle-option'
import Footer from './components/footer'
import Duel from './components/duel'

import { ISignal } from './constants'

const App = () => {
  const [score, setScore] = useState<number>(0)
  const [selectedSignal, setSelectedSignal] = useState<ISignal | null>(null)

  return (
    <div className='container mx-auto'>
      <Scoreboard score={score} />
      {selectedSignal ? 
        <Duel selectedSignal={selectedSignal} setScore={setScore} setSelectedSignal={setSelectedSignal} />
        : <TriangleOption setSelectedSignal={setSelectedSignal} /> 
      }
      <Footer />
    </div>
  )
}

export default App
