import bgTriangle from '../../assets/bg-triangle.svg'

import {
  paperSignal,
  scissorsSignal,
  rockSignal,
 } from '../../constants'

import SignalButton from '../signal-button'
import { ISignal } from '../../constants'

interface IProps {
  setSelectedSignal: (signal: ISignal) => void,
}

const TriangleOption = ({ setSelectedSignal }: IProps) => {
  const handleSelectSignal = (signal: ISignal) => {
    setSelectedSignal(signal);
  }

  return (
    <div className='container flex justify-center mt-8'>
      <div className='relative p-4 w-fit h-fit'>
        <img src={bgTriangle} />
        <SignalButton onSelectSignal={handleSelectSignal} signal={paperSignal} className='absolute top-0 left-0' />
        <SignalButton onSelectSignal={handleSelectSignal} signal={scissorsSignal} className='absolute top-0 right-0' />
        <SignalButton onSelectSignal={handleSelectSignal} signal={rockSignal} className='absolute inset-x-0 bottom-0 m-auto' />
      </div>
    </div>
  )
}

export default TriangleOption
