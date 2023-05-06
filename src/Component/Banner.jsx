import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative'>
      {/* background-image */}
        <img className='w-full h-[100vh] -z-40' src="https://images.unsplash.com/photo-1482747029550-096ad6aa9caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
        {/* welcome note banner */}
        <div className='absolute -z-5 left-0 top-0  bg-black/20 w-full h-full text-white flex flex-col justify-center items-center'>
            <h1 className='text-5xl md:text-6xl text-center my-4'>Welcome to <span className='text-teal-400 font-bold'>TELECOM!</span></h1>
            <p className='lg:w-[50%] text-center text-xl my-2'>At TELECOM, we are dedicated to providing you with the most affordable and cheapest data, airtime, DStv, GOtv, and Startimes subscription options. We are also the right place for your electricity subscription needs. With us, you can rest assured that you are getting the best deals and prices for all of your subscription needs</p>
            {/* signup/register link */}
            <div className='flex mx-auto justify-between my-4'>
            <Link to='/Signup' className='bg-white text-black w-[100px] text-center py-2 mx-2'><a href='#' >REGISTER</a></Link>
            <Link to='/login' className='bg-teal-900 w-[100px] text-center py-2 mx-2'><a href="#" >LOGIN</a></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner