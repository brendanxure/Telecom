import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import SignUp from '../Component/SignUp'
import SEO from '../Component/SEO'

const SignUpPage = () => {
  return (
    <div>
        <SEO title='Telecom || Register' />
        <Navbar />
        <SignUp />
        <Footer />
    </div>
  )
}

export default SignUpPage