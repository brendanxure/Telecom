import React, { useState } from 'react'
import { strengths } from '../Data'
import {FaHandPointRight} from "react-icons/fa"

const WhyUS = () => {
    const [data, setData] = useState(strengths)
  return (
    <div className='flex flex-col lg:flex-row flex-wrap lg:flex-nowrap py-10 px-4'>
        {/* left-side */}
        <div className='basis-1/2 flex flex-col justify-center px-2'>
            <h1 className='text-5xl my-4 text-teal-600 text-center'>Why Choose Us?</h1>
            <p className='text-xl'>We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more.</p>
            <div className='grid grid-cols-2 my-4'>
                {data.map((item, id)=> 
                <span className='flex my-1'>
                    <FaHandPointRight color='teal' size={20} /><p className='ml-2 text-lg'>{item.details}</p>
                </span>
                )}
            </div>
        </div>
        {/* right-side */}
        <div className='hidden md:block my-6 lg:my-0'>
            <img className='rounded-full w-[700px] h-[700px]' src="https://images.pexels.com/photos/4560152/pexels-photo-4560152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default WhyUS