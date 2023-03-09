import React from 'react'
import ProgramsCard from '../Card/ProgramsCard'
import Titles from '../Titles'

const Programs = () => {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
      <Titles />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6">
        <ProgramsCard />
        <ProgramsCard />
        <ProgramsCard />
      </div>
    </div>
  );
}

export default Programs