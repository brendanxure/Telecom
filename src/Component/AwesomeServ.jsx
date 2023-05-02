import React from 'react'

const AwesomeServ = () => {
  return (
    <div className='flex flex-col-reverse flex-wrap lg:flex-row lg:flex-nowrap bg-gray-200'>
        <img className='hidden md:block basis-1/2 h-[100vh]' src="https://images.pexels.com/photos/4350202/pexels-photo-4350202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='basis-1/2 flex flex-col justify-center items-center px-4 text-gray-700 py-10'>
            <h1 className='text-5xl text-teal-800'>We Provide Awesome Services</h1>
            <p className='my-4'>Certain things are hard 😓 but making payments shouldn't be one of them 😋💗. TELECOM helps you make payments for services you enjoy right from the comfort of your home or office. The experience of total convenience,fast service delivery and easy payment is just at your fingertips.</p>
        </div>
    </div>
  )
}

export default AwesomeServ