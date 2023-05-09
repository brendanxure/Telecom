import React from 'react'

const AwesomeServ = () => {
  return (
    <div className='flex flex-col-reverse flex-wrap lg:flex-row lg:flex-nowrap bg-gray-200'>
        <img className='hidden md:block basis-1/2 h-[90vh]' src="https://images.pexels.com/photos/4350202/pexels-photo-4350202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='basis-1/2 flex flex-col justify-center items-center px-4 text-gray-700 py-10'>
            <h1 className='text-5xl text-teal-600 text-center'>We offer outstanding services to our clients</h1>
            <p className='my-4 text-xl'>At TELECOM, we are committed to providing excellent services that simplify your life. We believe that certain things can be challenging, but making payments should not be one of them. With our help, you can easily pay for the services you enjoy, all from the comfort of your home or office. Our services offer total convenience, fast delivery, and easy payment options, all available at your fingertips.</p>
        </div>
    </div>
  )
}

export default AwesomeServ