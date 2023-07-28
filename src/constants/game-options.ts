import iconPaper from '../assets/icon-paper.svg'
import iconRock from '../assets/icon-rock.svg'
import iconScissors from '../assets/icon-scissors.svg'
import { SignalsEnum } from '.'

export const paperSignal = {
  signal: SignalsEnum.PAPER,
  iconName: iconPaper,
  bgColor: 'bg-[#5671f5]',
  shadow: 'shadow-[0px_5px_0px_0px_#2945c2]',
}

export const rockSignal = {
  signal: SignalsEnum.ROCK,
  iconName: iconRock,
  bgColor: 'bg-[#da3d5c]',
  shadow: 'shadow-[0px_5px_0px_0px_#9f1536]',
}

export const scissorsSignal = {
  signal: SignalsEnum.SCISSORS,
  iconName: iconScissors,
  bgColor: 'bg-[#eba10e]',
  shadow: 'shadow-[0px_5px_0px_0px_#c86b1b]',
}

export const baseOptions = [
  paperSignal,
  rockSignal,
  scissorsSignal,
]

export const bonusOptions = [
  ...baseOptions,
  {
    signal: '',
    iconName: '',
    colorPrimary: '',
    colorSecondary: '',
  }
]