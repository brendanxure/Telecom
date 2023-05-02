import React from 'react'

const Agent = () => {
  return (
    <div className='flex flex-col flex-wrap lg:flex-row lg:flex-nowrap'>
        <div className='basis-1/2 flex flex-col justify-center px-4 text-gray-700 py-10'>
            <h1 className='text-5xl text-blue-500 text-center lg:text-left'>Become An Agent</h1>
            <p className='my-8'>Join our network of outstanding entrepreneurs patnering with TELECOM. Bring the TELECOM 'easy-payments' experience closer to your network and earn a commission for every transaction you perform for your customers.</p>
            <p className=''>We offer our Referrers the best referral program incentives to encourage entrepreneurial and managerial skill acquisition; enhance growth and development and general empowerment among our students on campuses of higher learning and youths in diaspora. Finally, to promote technology via the use of ICT tools in our society.</p>
            <a className='my-4 w-[150px] text-center bg-blue-500 px-4 py-2' href="">Get Started</a>
        </div>
        <img className='hidden md:block basis-1/2 h-[100vh]' src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    </div>
  )
}

export default Agent