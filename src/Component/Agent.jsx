import React from 'react'

const Agent = () => {
  return (
    <div className='flex flex-col bg-gray-100 flex-wrap lg:flex-row lg:flex-nowrap'>
      {/* left-side */}
        <div className='basis-1/2 flex flex-col justify-center px-4 text-gray-700 py-10'>
            <h1 className='text-5xl text-teal-600 text-center lg:text-left'>Become An Agent</h1>
            <p className='my-8 text-lg'>Join our network of exceptional entrepreneurs who partner with TELECOM and help us expand our 'easy-payments' experience to your network. As a Referrer, you will earn a commission for every transaction you perform for your customers and be part of our effort to promote technology and empower students on campuses of higher learning and youths in diaspora.</p>
            <p className=' text-lg'>Our referral program offers outstanding incentives to encourage entrepreneurial and managerial skill acquisition, enhance growth and development, and promote empowerment. By becoming a Referrer, you will have the opportunity to leverage your network and earn extra income while contributing to the advancement of technology in our society.</p>
            <p className='my-8 text-lg'>Join our team today and help us bring the benefits of TELECOM's 'easy-payments' experience to more people!</p>
            <a className='w-[150px] text-center bg-gradient-to-tr from-teal-800 to-teal-500 px-4 py-2 hover:shadow-lg hover:shadow-black duration-75 ease-in' href="">Get Started</a>
        </div>
        {/* image on the right side */}
        <img className='hidden md:block basis-1/2 h-[100vh]' src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    </div>
  )
}

export default Agent