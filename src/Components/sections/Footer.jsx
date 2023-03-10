import React from 'react'
import '../styles/footer.css'
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-screen py-12 bg-slate-800 flex flex-col justify-center items-center text-slate-50">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 footerW px-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Klab</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>About us</li>
            <li>Our team</li>
            <li>Terms and Services</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Need help</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Kigali, Gasabo KG 123 st</li>
            <li>Our team</li>
            <li>
              07888222229 <br />
              07888222229
            </li>
            <li>info@klab.rw</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Programs</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Klab startpus academy</li>
            <li>Future coder</li>
            <li>Another program</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold">Our newsletter</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              Get latest news and updates from us and all over the worl by
              subscribing to our news letter.
            </li>
            <li>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-base px-8 p-4 rounded-2xl border-none outline-none bg-slate-200"
              />
            </li>
            <li>
              <input
                type="submit"
                value="Subscribe"
                className="w-1/2 text-base px-8 p-4 rounded-2xl bg-blue-500 text-slate-100 "
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 footerW xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 text-left gap-4 px-6 py-6">
        <p>Klab</p>
        <div className="flex flex-row gap-2 justify-around">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p className=" text-xs">
          @2023 Klab Rwanda. Made with passion by
          <a href="http://netfort.netlify.app/" className="text-blue-500">
            Reconfort
          </a>
          ❤️
        </p>
      </div>
    </div>
  );
}

export default Footer