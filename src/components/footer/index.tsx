import { useState } from 'react'
import Rules from '../../assets/image-rules.svg'
import CloseIcon from '../../assets/icon-close.svg'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <>
      {isModalOpen && 
        <div className='absolute top-0 flex items-center justify-center w-full h-full bg-black/50' >
          <div className='container p-8 bg-white rounded h-fit w-fit'>
            <div className='flex justify-between'>
              <h1 className='mb-8 text-xl font-extrabold text-black'>RULES</h1>
              <img className='w-6 h-6 cursor-pointer' src={CloseIcon} onClick={() => setIsModalOpen(false)} />
            </div>
            <img src={Rules} />
          </div>
        </div>
      }
      <div className='flex justify-end p-4'>
        <button onClick={() => setIsModalOpen(true)} className='p-2 border-2 w-28 rounded-xl border-slate-500'>
          RULES
        </button>
      </div>
    </>
  )
}

export default Footer
