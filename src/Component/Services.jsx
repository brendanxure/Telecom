import React, { useState } from 'react'
import { services } from '../Data';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Services = () => {
  const [datas, setDatas] = useState(services)

  const slideleft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
}
const slideright = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
}

  return (
    <div className='w-full bg-gray-200 py-[10vh] group/pep relative'>
      <div className='flex flex-wrap justify-center lg: mx-auto'>
        {/* left-side */}
      <div className='flex flex-col'>
        <h1 className='text-5xl w-full font-bold mb-4'>Automated VTU Services</h1>
        {/* <a href="http://" className='bg-black/90 text-white p-4 text-center my-8'>Sign In to Account</a> */}
      </div>
      {/* right-side */}
      <MdChevronLeft onClick={slideleft} size={40} className='hidden group-hover/pep:block bg-white rounded-full left-4 top-[55%] md:top-[50%] absolute z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
      <div className='flex w-full items-center justify-between group/pep whitespace-nowrap scroll-smooth relative overflow-x-scroll scrollbar-hide' id={'slider'}>
        {datas.map((data, id)=> 
        // each service
        <div className='relative bg-teal-800 m-3 p-4 flex flex-col justify-center items-center rounded-xl min-w-[300px] h-[200px]'>
          {/* <p className='bg-teal-900 w-fit px-2 rounded-xl absolute top-2 -right-3 text-gray-200'>AUTOMATED</p> */}
          <span className='flex w-full justify-center my-4 bg-gray-200 py-2 rounded-full max-w-[60px] mx-auto text-xl md:text-4xl text-blue-500'>{data.logo}</span>
          <p className='text-center text-xl'>{data.title}</p>
        </div>
        )}
      </div>
      <MdChevronRight onClick={slideright} size={40} className='hidden group-hover/pep:block bg-white rounded-full absolute right-4 top-[55%] md:top-[50%] z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
    </div>
    </div>
  )
}

export default Services