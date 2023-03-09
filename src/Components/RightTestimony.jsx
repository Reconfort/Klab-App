import React from 'react'
import Profile from '../Assets/profile.jpeg'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const RightTestimony = () => {
    return (
      <div className="bg-slate-100 rounded-3xl w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
        <div className="bg-slate-200 w-full rounded-3xl p-4 px-8 flex justify-start gap-4 items-center">
          <img src={Profile} alt="" className="rounded-3xl w-20" />
          <div className="bg-slte-100">
            <h1 className="font-bold text-lg">Isaa NSABIMANA</h1>
            <p className=" font-extralight text-base">Frontend Developer</p>
            <p className=" font-normal text-blue-500 text-sm">Klab trainer</p>
          </div>
        </div>
        <div className=" mx-2 py-8 rounded flex justify-between items-center gap-2">
          <button className="bg-blue-500 text-slate-50 p-4 rounded-xl">
            <FaChevronLeft />
          </button>
          <p className="text-base font-light w-3/4">
            <span className=" text-2xl font-semibold">"</span>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or .
            <span className=" text-2xl font-semibold">"</span>
          </p>
          <button className="bg-blue-500 text-slate-50 p-4 rounded-xl">
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
}

export default RightTestimony