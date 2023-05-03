import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
      {/* background-image */}
        <img className='w-full h-[100vh] -z-40' src="https://images.unsplash.com/photo-1482747029550-096ad6aa9caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
        {/* welcome note banner */}
        <div className='absolute -z-5 left-0 top-0  bg-black/20 w-full h-full text-white flex flex-col justify-center items-center'>
            <h1 className='text-5xl md:text-6xl text-center my-4'>Welcome to <span className='text-teal-400 font-bold'>TELECOM!</span></h1>
            <p className='lg:w-[50%] text-center text-xl my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate inventore, hic illo ipsum in ipsa molestias blanditiis non facilis corrupti?</p>
            {/* signup/register link */}
            <div className='flex mx-auto justify-between my-4'>
                <a href='#' className='bg-white text-black w-[100px] text-center py-2 mx-2'><p>REGISTER</p></a>
                <a href="#" className='bg-teal-900 w-[100px] text-center py-2 mx-2'><p>LOGIN</p></a>
            </div>
        </div>
    </div>
  )
}

export default Banner