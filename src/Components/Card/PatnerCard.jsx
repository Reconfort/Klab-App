import React from 'react'
import img from '../../Assets/IctChamber.png'

const PatnerCard = () => {
  return (
    <div className='bg-slate-300 p-6 rounded-3xl flex justify-center items-center'>
      <img src={img} alt="" className=' w-20'/>
    </div>
  )
}

export default PatnerCard