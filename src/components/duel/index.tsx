import { useState, useEffect, useCallback } from "react"
import SignalButton from "../signal-button"
import {
  ISignal,
  baseOptions,
  SignalsEnum,
  // rockSignal,
  // scissorsSignal,
  // paperSignal,
} from "../../constants"

interface IProps {
  selectedSignal: ISignal,
  setSelectedSignal: (signal: ISignal | null) => void
  setScore: (score: (prev: number) => number ) => void,
}

const WAIT_SECONDS = 100;

const Duel = (props: IProps) => {
  const {
    setSelectedSignal,
    selectedSignal,
    setScore,
  } = props

  const [housePick, setHousePick] = useState<ISignal | null>(null)
  const [resultText, setResultText] = useState('')

  const getRandomItem = () => {
    // TRAINED AI TO ALWAYS WIN

    // if (selectedSignal.signal === SignalsEnum.ROCK) {
    //   return paperSignal
    // }
    // if (selectedSignal.signal === SignalsEnum.PAPER) {
    //   return scissorsSignal
    // } 
    // return rockSignal
    return baseOptions[Math.floor(Math.random() * baseOptions.length)]
  }

  // FIXME: improve
  const handleResult = useCallback((randomItem: ISignal) => {
    if (selectedSignal.signal === randomItem.signal) {
      setResultText('YOU DRAW')
      return
    }

    if (selectedSignal.signal === SignalsEnum.PAPER) {
      if (randomItem.signal === SignalsEnum.ROCK) {
        setResultText('YOU WIN')
        setScore((prev) => prev + 1)
      } else if (randomItem.signal === SignalsEnum.SCISSORS){
        setResultText('YOU LOSE')
        setScore((prev) => prev - 1)
      }
      return;
    }

    if (selectedSignal.signal === SignalsEnum.ROCK) {
      if (randomItem.signal === SignalsEnum.SCISSORS) {
        setResultText('YOU WIN')
        setScore((prev) => prev + 1)
      } else if (randomItem.signal === SignalsEnum.PAPER){
        setResultText('YOU LOSE')
        setScore((prev) => prev - 1)
      }
      return;
    }

    if (selectedSignal.signal === SignalsEnum.SCISSORS) {
      if (randomItem.signal === SignalsEnum.PAPER) {
        setResultText('YOU WIN')
        setScore((prev) => prev + 1)
      } else if (randomItem.signal === SignalsEnum.ROCK){
        setResultText('YOU LOSE')
        setScore((prev) => prev - 1)
      }
      return;
    }
  }, [selectedSignal.signal, setScore])

  const handlePlayAgain = () => {
    setResultText('')
    setSelectedSignal(null)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomItem = getRandomItem()
      handleResult(randomItem)
      setHousePick(randomItem)

    }, WAIT_SECONDS)
    return () => {
      clearInterval(timer)
    }
  }, [handleResult])

  return (
    <div className='container flex justify-center p-4'>
      <div className='flex flex-col items-center mx-12'>
        <h1 className='mb-12 text-xl'>YOU PICKED</h1>
        <SignalButton signal={selectedSignal} className='scale-125 cursor-default' />
      </div>

      {housePick && 
        <div className='flex flex-col justify-center text-xl'>
          <h1 className='text-4xl font-bold text-center text-white'>{resultText}</h1>
          <button className='w-40 h-8 mt-4 text-base text-black bg-white rounded' onClick={handlePlayAgain}>PLAY AGAIN</button>
        </div>
      }

      <div className='flex flex-col items-center mx-12'>
        <h1 className='mb-12 text-xl'>THE HOUSE PICKED</h1>
        {housePick ? 
          <SignalButton signal={housePick} className='scale-125 cursor-default' />
          : <div className='flex w-24 h-24 scale-125 rounded-full bg-black/20'/>
        }
      </div>
    </div>
  )
}

export default Duel