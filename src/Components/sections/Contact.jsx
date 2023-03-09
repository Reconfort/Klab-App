import React from 'react'
import LeftContact from '../LeftContact'
import RightContact from '../RightContact'
import Titles from '../Titles'

const Contact = () => {
  return (
    <div className=" w-screen flex justify-center items-center flex-col gap-8 py-8">
      <Titles />
      <div className="flex gap-5 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <LeftContact />
        <RightContact />
      </div>
    </div>
  );
}

export default Contact