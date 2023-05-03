import React from 'react'

const Stat = () => {
  return (
    <div className='bg-gray-300 py-6'>
        <div className='w-[70%] mx-auto flex justify-center md:justify-between items-center my-6 flex-wrap md:flex-nowrap'>
            <div className='p-4'>
                <h1 className='text-6xl font-bold text-blue-500 my-2'>826K</h1>
                <p>Registered User</p>
            </div>
            <div className='p-4'>
                <h1 className='text-6xl font-bold text-blue-500 my-2'>423K</h1>
                <p>Happy Clients</p>
            </div>
            <div className='p-4'>
                <h1 className='text-6xl font-bold text-blue-500 my-2'>423+</h1>
                <p>Logged In Users</p>
            </div>
            <div className='p-4'>
                <h1 className='text-6xl font-bold text-blue-500 my-2'>5+</h1>
                <p>Years Of Experience</p>
            </div>
        </div>
    </div>
  )
}

export default Stat