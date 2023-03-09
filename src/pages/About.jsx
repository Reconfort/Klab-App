import React from 'react'
import AboutHomepage from '../Components/sections/About/AboutWelcome'
import WhatWeDo from '../Components/sections/About/WhatWeDo'
import WhatWeDO2 from '../Components/sections/About/WhatWeDo2'
import Footer from '../Components/sections/Footer'
import Team from '../Components/sections/Team'

const About = () => {
  return (
      <div>
          <AboutHomepage />
          <WhatWeDo />
          <WhatWeDO2 />
          <Team />
          <Footer/>
    </div>
  )
}

export default About