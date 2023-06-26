import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Agent from '../Component/Agent'
import AwesomeServ from '../Component/AwesomeServ'
import Banner from '../Component/Banner'
import DataPlans from '../Component/DataPlans'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Services from '../Component/Services'


import WhyUS from '../Component/WhyUS'
import { getUser, logout } from '../features/Auth/AuthSlice'
import { getUserWalletHistory, reset, userWalletHistory } from '../features/Wallet/WalletHistorySlice'

const Home = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(getUser)
  const {message} = useSelector(getUserWalletHistory)

  useEffect(()=> {
      if(user) {
        dispatch(userWalletHistory())
        if(message === 'token expired') {
          dispatch(logout())
        }
        dispatch(reset())
      }
  },[message])
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