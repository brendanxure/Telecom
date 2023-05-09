import React, { useState } from 'react'
import { strengths } from '../Data'
import {FaHandPointRight} from "react-icons/fa"

const WhyUS = () => {
    const [data, setData] = useState(strengths)
  return (
    <div id='Whyus' className=' py-4'>
            <h1 className='text-5xl lg:text-7xl text-center my-4 text-teal-600'>What makes us stand out?</h1>
        {/* left-side */}
        <div className='flex justify-center px-6 py-10 rounded-tr-full items-center'>
            <p className='text-xl px-2'>Our services include instant recharge options for airtime, data bundles, electricity bill payment, and more. We pride ourselves on being fast, providing automated services, offering 100% secure transactions, and being a reliable choice. Our services are available online 24/7, and we also provide customer support around the clock.</p>
        </div>
        {/* right-side */}
        <div className='hidden md:grid grid-cols-3 mx-auto'>
           <img className='max-h-[50vh] px-4 py-2' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
           <img className='h-full px-4 py-2' src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
           <img className='max-h-[50vh] px-4 py-2' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
       </div>

    </div>
  )
}

export default WhyUS