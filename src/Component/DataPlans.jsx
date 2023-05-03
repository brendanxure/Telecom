import React, { useState } from 'react'
import MTNLOGO from '../Logos/New-mtn-logo.jpg';
import GLOLOGO from '../Logos/Glo-Logo.png'
import NINEMOBILELOGO from '../Logos/9mobile-Logo.svg'
import AIRTELLOGO from '../Logos/Airtel-logo.png'
import { AIRTELDATA, GLODATA, MTNDATA, NINEMOBILEDATA } from '../Data';

const DataPlans = () => {
    const [mtnDataPlans, setMtnDataPlans] = useState(MTNDATA)
    const [gloDataPlans, setGloDataPlans] = useState(GLODATA)
    const [airtelDataPlans, setAirtelDataPlans] = useState(AIRTELDATA)
    const [nineMobileData, setNineMobileData] = useState(NINEMOBILEDATA)
  return (
    <div>
        <div className='w-full'>
            {/* Title */}
            <h1>Affordable Data Plans And Prices</h1>
            {/* Data Plans Div */}
            <div className='flex w-full mx-auto justify-center'>
                {/* MTN DIV */}
                <div className='p-4 mx-2 bg-gray-200 flex flex-col items-center basis-1/4'>
                    {/* MTN LOGO */}
                    <img className='w-[80px]' src={MTNLOGO} alt="" />
                    <p>MTN DATA</p>
                    {/* MTN DATA PLANS */}
                    <div className=''>
                        {mtnDataPlans?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                </div>
                {/* GLO DIV */}
                <div className='p-4 mx-2 bg-gray-200 flex flex-col items-center basis-1/4'>
                    <img className='w-[80px]' src={GLOLOGO} alt="" />
                    <p>GLO DATA</p>
                    {/* GLO DATA PLANS */}
                    <div className=''>
                        {gloDataPlans?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                </div>
                {/* AIRTEL DIV */}
                <div className='p-4 mx-2 bg-gray-200 flex flex-col items-center basis-1/4'>
                    <img className='w-[80px]' src={AIRTELLOGO} alt="" />
                    <p>AIRTEL DATA</p>
                    {/* AIRTEL DATA PLANS */}
                    <div className=''>
                        {airtelDataPlans?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                </div>
                {/* 9mobile DIV */}
                <div className='p-4 mx-2 bg-gray-200 flex flex-col items-center basis-1/4'>
                    <img className='w-[80px]' src={NINEMOBILELOGO} alt="" />
                    <p>9MOBILE DATA</p>
                    {/*9MOBILE  DATA PLANS */}
                    <div className=''>
                        {nineMobileData?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataPlans