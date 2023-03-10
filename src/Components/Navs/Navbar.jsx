import React from 'react'
import '../styles/Navbar.css'
import Logo from '../../Assets/Logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-white navbar-Header rounded-3xl p-4 m-4 fixed flex justify-between items-center top-0 flex-grow z-50">
      <img src={Logo} alt="Klap Logo" className="w-16 ml-2" />
      <ul className="hidden justify-around text-sm font-light items-center gap-4 xl:flex lg:flex md:flex sm:hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/community">Community</Link>
        <Link to="/events">Events</Link>
      </ul>
      <Link to="/create-account">
        <button className="bg-slate-800 px-5 text-sm font-semibold py-2 text-slate-50 rounded-2xl hidden xl:flex lg:flex md:flex sm:hidden">
          Signup
        </button>
      </Link>
      <FaBars className="block xl:hidden lg:hidden md:hidden sm:block mr-2" />
    </div>
  );
}

export default Navbar