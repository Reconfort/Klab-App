import React from 'react'
import Image1 from '../../Assets/CardImage.jpg'
import { FaArrowRight } from 'react-icons/fa'

const ProgramsCard = () => {
  return (
    <div className="bg-slate-50 rounded-3xl flex xl:flex-col lg:flex-col md:flex-row sm:flex-col flex-col">
      <img
        src={Image1}
        alt="CardImage"
        className="rounded-3xl xl:w-full lg:w-full md:w-1/3"
      />
      <div className="px-6 py-4 pb-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-base">Futures coders</h1>
          <p className="text-sm font-light">
            A program dedicated to kids in their schools vacance and weekend
            <span className="hidden md:block lg:hidden xl:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quo eaque labore deleniti tempora temporibus porro excepturi sequi
              nisi perspiciatis quisquam, ab fuga recusandae distinctio commodi
              sunt ullam? Ut, tempora.
            </span>
          </p>
        </div>
        <span className="flex gap-2 items-center text-blue-500 text-sm font-light">
          <p>Learn more </p>
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}

export default ProgramsCard