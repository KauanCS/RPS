import { ISignal } from "../../constants"

interface IProps {
  className: string,
  signal: ISignal,
  onSelectSignal?: (key: ISignal) => void,
}


// FIXME: improve the colors code
const SignalButton = (props: IProps) => {
  const {
    signal,
    className,
    onSelectSignal,
  } = props

  const handleClick = () => {
    if (onSelectSignal) {
      onSelectSignal(signal)
    }
  }

  return (
    <div onClick={handleClick} className={`${className} ${signal.bgColor} ${signal.shadow} cursor-pointer w-32 h-32 flex justify-center items-center rounded-full`}>
      <div className={`w-24 h-24 bg-white flex rounded-full p-6 shadow-[inset_0px_5px_0px_0px_rgba(0,0,0,0.15)]`} >
        <img src={signal.iconName} />
      </div>
    </div>
  )
}

export default SignalButton
