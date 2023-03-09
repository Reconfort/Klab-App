import React from 'react'
import '../styles/Navbar.css'
import Logo from '../../Assets/Logo.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="bg-white navbar-Header rounded-3xl p-4 m-4 fixed flex justify-between items-center top-0 flex-grow z-50">
      <img src={Logo} alt="Klap Logo" className="w-16 ml-2" />
      <ul className="hidden justify-around text-sm font-normal items-center gap-4 xl:flex lg:flex md:flex sm:hidden">
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Community</li>
        <li>Events</li>
      </ul>
      <button className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-2xl hidden xl:flex lg:flex md:flex sm:hidden">
        Signup
      </button>
      <FaBars className="block xl:hidden lg:hidden md:hidden sm:block mr-2" />
    </div>
  );
}

export default Navbar