import React from 'react'
import Image from '../../../Assets/Background.png'

const Info = () => {
    return (
      <div className="w-full rounded-3xl px-6 py-4 flex flex-col gap-6 justify-start items-start">
        <div className="">
          In Rwanda, most of the innovations in technology, start-ups, or even
          ideas, supporting projects and initiatives are concentrated in the
          capital city of Kigali and there is little knowledge about IT talents
          outside the capital. Therefore; kLab initiated the project to create
          awareness, build interest in young people, and identify promising
          future IT talents in the 4 provinces outside if Kigali that can be
          further supported.
          <br />
          <br />
          The project will be conducted during 5 months from October to
          February, in three phases: Talent detection across the country,
          training, and organizing a hackathon
        </div>
        <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="flex flex-col gap-3">
            <h1 className=" text-blue-500">Why Apply?</h1>
            <ul className=" ml-4">
              <li>Access to incubation programs</li>
              <li>Membership at klab</li>
              <li>Mentorship</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-blue-500">Why Apply?</h1>
            <p>Requirements</p>
            <ul className=" ml-4">
              <li>Access to incubation programs</li>
              <li>Membership at klab</li>
              <li>Mentorship</li>
            </ul>
          </div>
        </div>
        <p className="">
          Application deadline : <b className="font-bold">4th November</b>
        </p>
        <button className="bg-slate-800 text-slate-50 px-8 py-4 rounded-2xl">
          Apply now
        </button>
        <hr />
        <h2 className="font-bold text-lg">Klab Startups academy | Gallery</h2>
        <p>
          In Rwanda, most of the innovations in technology, start-ups, or even
          ideas, supporting projects and initiatives are concentrated in the
          capital city of Kigali and there is little knowledge about IT talents
          outside the capital.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4 p-2 xl:h-80 lg:h-80 md:h-80 h-96 overflow-y-visible overflow-scroll scroll-m-4 rounded-3xl">
          <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
          <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
          <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
          <img src={Image} alt="ImageOne" className="w-full rounded-3xl" />
        </div>
      </div>
    );
}

export default Info