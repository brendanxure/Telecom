import React, { useState } from 'react'
import { strengths } from '../Data'
import {FaHandPointRight} from "react-icons/fa"

const WhyUS = () => {
    const [data, setData] = useState(strengths)
  return (
    <div className='flex flex-col lg:flex-row flex-wrap lg:flex-nowrap py-4'>
        {/* left-side */}
        <div className='basis-1/2 flex flex-col justify-center px-6 bg-teal-800 py-10 rounded-tr-full'>
            <h1 className='text-5xl my-4 text-teal-600 text-center'>What makes us stand out?</h1>
            <p className='text-xl'>Our services include instant recharge options for airtime, data bundles, electricity bill payment, and more. We pride ourselves on being fast, providing automated services, offering 100% secure transactions, and being a reliable choice. Our services are available online 24/7, and we also provide customer support around the clock.</p>
            {/* <div className='grid grid-cols-2 my-4'>
                {data.map((item, id)=> 
                <span className='flex my-1'>
                    <FaHandPointRight color='teal' size={20} /><p className='ml-2 text-lg'>{item.details}</p>
                </span>
                )}
            </div> */}
        </div>
        {/* right-side */}
        <div className='hidden md:block lg:my-0 py-10 px-6'>
            <img className='rounded-full w-[700px] h-[700px]' src="https://images.pexels.com/photos/4560152/pexels-photo-4560152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default WhyUS