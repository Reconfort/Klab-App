import React from 'react'
import Image from '../../Assets/TeamImg.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../styles/teamCard.css'

const TeamCard = () => {
  return (
    <div className="bg-slate-100 m-4 p-2 rounded-3xl duration-1000 group hover:scale-105">
      <div className=" relative  rounded-3xl w-full no-scroll h-64 group-hover:h-56 duration-1000">
        <img
          src={Image}
          alt=""
          className="rounded-3xl w-full relative"
        />
      </div>
      <div className="px-4 flex flex-col gap-2">
        <p className=" text-xs font-extralight opacity-0 -mt-4 group-hover:mt-4 group-hover:opacity-100 duration-1000">
          We have several programs that strengthening tech careers
        </p>
        <h1 className="text-lg font-light">Nicole UMURUNGI</h1>
        <p className="text-blue-500 font-medium text-sm">Project Manager</p>
        <div className="flex justify-between px-10 py-4">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default TeamCard