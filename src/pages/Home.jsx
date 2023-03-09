import React from 'react'
import Contact from '../Components/sections/Contact'
import Footer from '../Components/sections/Footer'
import HomeWelcome from '../Components/sections/Home/HomeWelcome'
import MVO from '../Components/sections/MVO'
import Partners from '../Components/sections/Partners'
import Programs from '../Components/sections/Programs'
import Team from '../Components/sections/Team'
import Testimonials from '../Components/sections/Testimonials'

const Home = () => {
  return (
    <div>
      <HomeWelcome />
      <Programs />
      <MVO />
      <Partners />
      <Testimonials />
      <Team />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home