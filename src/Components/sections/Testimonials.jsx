import React from 'react'
import LeftTestimony from '../LeftTestimony'
import RightTestimony from '../RightTestimony'
import Titles from '../Titles'

const Testimonials = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center xl:px-32 lg:px-12 md:px-10 sm:px-10 px-6">
      <Titles />
      <div className="flex gap-5 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <LeftTestimony />
        <RightTestimony />
      </div>
    </div>
  );
}

export default Testimonials