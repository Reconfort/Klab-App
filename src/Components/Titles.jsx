import React from 'react'
import LineImg from '../Assets/Vector.svg'

const Titles = () => {
  return (
    <div className="xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-base">Our programs</h1>
      <img src={LineImg} alt="VectorImage" className="w-1/3" />
      <p className="text-center font-normal text-slate-800 text-sm xl:text-base lg:text-base md:text-base sm:text-sm">
        We have several progams that helps peaple with different experience
        getting started an strength their career in tech as talents and
        enterprenuers.
      </p>
    </div>
  );
}

export default Titles