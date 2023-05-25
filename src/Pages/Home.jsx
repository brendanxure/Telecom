import React from 'react'
import Agent from '../Component/Agent'
import AwesomeServ from '../Component/AwesomeServ'
import Banner from '../Component/Banner'
import DataPlans from '../Component/DataPlans'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Services from '../Component/Services'
import Stat from '../Component/Stat'
import './Tailwind.css'
import WhyUS from '../Component/WhyUS'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <WhyUS />
        <AwesomeServ />
        <Services />
        <Agent />
        <DataPlans />
        <Footer />
    </div>
  )
}

export default Home