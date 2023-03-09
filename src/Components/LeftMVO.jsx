import React from 'react'
import MVOCard from './Card/MVOCard'

const LeftMVO = () => {
  return (
    <div className="flex flex-col gap-6-row xl:w-1/2 lg:w-3/5 md:w-3/4 sm:w-full w-full gap-2">
      <MVOCard />
      <MVOCard />
      <MVOCard />
    </div>
  );
}

export default LeftMVO