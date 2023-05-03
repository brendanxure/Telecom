import React from 'react'
import Agent from '../Component/Agent'
import AwesomeServ from '../Component/AwesomeServ'
import Banner from '../Component/Banner'
import DataPlans from '../Component/DataPlans'
import Navbar from '../Component/Navbar'
import Services from '../Component/Services'
import Stat from '../Component/Stat'
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
        <Stat />
        <DataPlans />
    </div>
  )
}

export default Home