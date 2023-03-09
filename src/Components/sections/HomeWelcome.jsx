import React from 'react'
import Navbar from '../Navs/Navbar'
import '../styles/HomeWelcome.css'

const HomeWelcome = () => {
  return (
    <div className="w-screen h-screen welcomeBg flex justify-center items-center relative p-4">
      <Navbar />
      <div className="homewelcome-w text-slate-50 ">
        <div className="w-3/4 flex flex-col gap-4">
          <p className="font-light mt-14">
            Build your team with developers, engineers and pro remote experts.
          </p>
          <h1 className="font-semibold text-3xl">
            kLab provides an open space for IT entrepreneurs to collaborate and
            innovate in Kigali, Rwanda.
          </h1>
          <span className="flex gap-4 mt-4 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row">
            <button className="border border-slate-50 px-6 py-4 rounded-3xl">
              Hire talent
            </button>
            <button className="border border-slate-900 bg-slate-900 px-6 py-4 rounded-3xl">
              Became member
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome