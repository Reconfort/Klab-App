import React from 'react'
import { FaStar } from 'react-icons/fa';

const LeftStartup = () => {
  return (
    <div className='flex gap-4 flex-col w-full text-slate-800 h-full'>
      <span className='flex flex-col gap-4'>
        <p className='text-sm'>Meet with our</p>
        <h1 className=' text-2xl text-slate-900'> STARTUPS MEMBERS</h1>
      </span>
      <p className='text-sm'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularized in the.
      </p>
      <span className='flex gap-4 justify-start items-center'>
        <FaStar className=" text-blue-500" />
        <p>
          Rated <b className="text-base text-blue-500">4.9/5</b> form over{" "}
          <b className="text-base">450</b> reviews
        </p>
      </span>
    </div>
  );
}

export default LeftStartup