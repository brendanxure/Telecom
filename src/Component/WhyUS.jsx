import React, { useState } from 'react'
import { strengths } from '../Data'
import {FaHandPointRight} from "react-icons/fa"

const WhyUS = () => {
    const [data, setData] = useState(strengths)
  return (
    <div id='Whyus' className='py-4'>
        <h1 className='whyusheader py-3 text-center' style={{fontSize : "60px", color: " #1171ef"}}>What makes us stand out?</h1>
        {/* left-side */}
        <div className='whyusmsg w-75 mx-auto'>
        <p className='text-center' style={{fontSize: "22px"}}>Our services include instant recharge options for airtime, data bundles, electricity bill payment, and more. We pride ourselves on being fast, providing automated services, offering 100% secure transactions, and being a reliable choice. Our services are available online 24/7, and we also provide customer support around the clock.</p>
        </div>
        {/* right-side */}
        <div className='whyusimg d-flex px-2 py-3'>
            <img className='col-4 px-3' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='col-4 px-3' src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='col-4 px-3' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
    </div>
  )
}

export default WhyUS