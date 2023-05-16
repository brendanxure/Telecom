import React from 'react'
import Footer from '../Component/Footer'
import Login from '../Component/Login'
import Navbar from '../Component/Navbar'
import SEO from '../Component/SEO'


const LoginPage = () => {
  return (
    <div>
      <SEO title = 'Telecom || Login' /> 
        <Navbar />
        <Login />
        <Footer />
        <head>
        <title>Login</title>
        </head>
    </div>
  )
}

export default LoginPage