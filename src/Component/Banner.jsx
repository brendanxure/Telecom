import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import 'animate.css'

const Banner = () => {
  return (
    <div id='Home' className='relative'>
      <section>
          <img className='w-full h-[90vh] -z-40' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <div className=' absolute -z-5 left-0 top-0  bg-black/20 w-full h-full text-white flex flex-col justify-center items-center'>
              <h1 className='text-5xl md:text-6xl text-center my-4 animate__animated animate__backInLeft animate__slower animate__delay-1s animate__infinite animate__slower'>Welcome to <span className='text-teal-600 font-bold'>TELECOM!</span></h1>
              <p className='lg:w-[50%] text-center text-2xl my-2 px-2 animate__animated animate__bounceInLeft animate__slower animate__delay-3s'>At TELECOM, we are dedicated to providing you with the most affordable and cheapest data, airtime.</p>
                {/*register link */}
              <div className='flex mx-auto justify-between my-4 animate__animated animate__bounceInLeft animate__slower animate__delay-3s'>
              <Link to='/Signup' className='bg-gradient-to-tr from-teal-800 to-teal-500 text-xl text-center px-7 py-2 mx-2'><a href="#" className='flex justify-center items-center' ><FiLogIn className='mr-2' />REGISTER</a></Link>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Banner