import React, { useState } from 'react'
import { services } from '../Data';

const Services = () => {
  const [datas, setDatas] = useState(services)
  return (
    <div className='w-full bg-gray-200 py-[10vh]'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center lg:w-[95%] mx-auto'>
        {/* left-side */}
      <div className='basis-1/2 flex flex-col'>
        <h1 className='text-6xl font-bold'>The Best Platform For Automated VTU Services</h1>
        <a href="http://" className='bg-black/90 text-white p-4 text-center my-8'>Sign In to Account</a>
      </div>
      {/* right-side */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center px-4'>
        {datas.map((data, id)=> 
        // each service
        <div className='relative bg-white m-3 p-4 flex flex-col justify-center items-center rounded-xl'>
          <p className='bg-teal-900 w-fit px-2 rounded-xl absolute top-2 -right-3'>AUTOMATED</p>
          <span className='flex w-full justify-center mt-8 my-4 bg-gray-200 py-2 rounded-full max-w-[40px] mx-auto text-xl md:text-2xl text-blue-500'>{data.logo}</span>
          <p className='text-center'>{data.title}</p>
        </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Services