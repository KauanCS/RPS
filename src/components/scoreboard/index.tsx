import Logo from '../../assets/logo.svg'

interface IProps {
  score: number,
}

const Scoreboard = ({ score }: IProps) => {
  return (
    <div className='container flex justify-between w-3/5 p-4 mx-auto mt-8 border-2 rounded-xl border-slate-500'>
      <div className='flex flex-col justify-center text-4xl font-bold leading-[0.8] '>
        <img src={Logo} />
      </div>
      <div className='flex flex-col items-center justify-center bg-white border-2 flex-columnp-2 rounded-xl w-36 h-28'>
        <p className='text-lg leading-none text-[#2a46c0]'>SCORE</p>
        <p className='text-6xl text-[#3b4363] font-bold'>{score}</p>
      </div>
    </div>
  )
}

export default Scoreboard