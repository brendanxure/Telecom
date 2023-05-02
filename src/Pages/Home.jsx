import React from 'react'
import Agent from '../Component/Agent'
import AwesomeServ from '../Component/AwesomeServ'
import Banner from '../Component/Banner'
import Navbar from '../Component/Navbar'
import Services from '../Component/Services'
import WhyUS from '../Component/WhyUS'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Services />
        <WhyUS />
        <AwesomeServ />
        <Agent />
    </div>
  )
}

export default Home