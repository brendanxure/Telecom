import React, { useState } from 'react'
import MTNLOGO from '../Logos/New-mtn-logo.jpg';
import GLOLOGO from '../Logos/Glo-Logo.png'
import NINEMOBILELOGO from '../Logos/9mobile-Logo.svg'
import AIRTELLOGO from '../Logos/Airtel-logo.png'
import { AIRTELDATA, GLODATA, MTNDATA, NINEMOBILEDATA } from '../Data';
import {HiOutlineShoppingCart} from 'react-icons/hi'

const DataPlans = () => {
    const [mtnDataPlans, setMtnDataPlans] = useState(MTNDATA)
    const [gloDataPlans, setGloDataPlans] = useState(GLODATA)
    const [airtelDataPlans, setAirtelDataPlans] = useState(AIRTELDATA)
    const [nineMobileData, setNineMobileData] = useState(NINEMOBILEDATA)
  return (
    <div className='w-full'>
        <div className='w-full'>
            {/* Title */}
            <h1 className='my-8 text-center text-4xl font-bold'>Affordable Data Plans And Prices</h1>
            {/* Data Plans Div */}
            <div className='flex w-full mx-auto justify-center p-4 my-8 flex-wrap xl:flex-nowrap'>
                {/* MTN DIV */}
                <div className='hover:shadow-lg hover:shadow-black ease-in duration-150 p-4 m-3 bg-gray-200 flex flex-col h-fit items-center basis-1/4 w-full'>
                    {/* MTN LOGO */}
                    <img className='w-[80px]' src={MTNLOGO} alt="" />
                    <p>MTN DATA</p>
                    {/* MTN DATA PLANS */}
                    <div className=''>
                        {mtnDataPlans?.map((data, id)=> 
                        <div id= {id} className=' border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center min-w-[275px]' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                    <a href="" className='w-full flex justify-center items-center rounded-xl py-3 bg-gradient-to-tr from-teal-800 to-teal-500 text-center font-bold text-xl my-3 hover:shadow-lg hover:shadow-black duration-75 ease-in'><HiOutlineShoppingCart className='mr-1'/><p>Buy now</p></a>
                </div>
                {/* GLO DIV */}
                <div className='hover:shadow-lg hover:shadow-black ease-in duration-150 p-4 m-3 bg-gray-200 flex flex-col items-center basis-1/4 h-fit'>
                    {/* GLO LOGO */}
                    <img className='w-[80px]' src={GLOLOGO} alt="" />
                    <p>GLO DATA</p>
                    {/* GLO DATA PLANS */}
                    <div className=''>
                        {gloDataPlans?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center min-w-[275px]' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                    <a href="" className='w-full flex justify-center items-center rounded-xl py-3 bg-gradient-to-tr from-teal-800 to-teal-500 text-center font-bold text-xl my-3 hover:shadow-lg hover:shadow-black duration-75 ease-in'><HiOutlineShoppingCart className='mr-1'/><p>Buy now</p></a>
                </div>
                {/* AIRTEL DIV */}
                <div className='hover:shadow-lg hover:shadow-black ease-in duration-150 p-4 m-3 bg-gray-200 flex flex-col items-center basis-1/4 h-fit'>
                    <img className='w-[80px]' src={AIRTELLOGO} alt="" />
                    <p>AIRTEL DATA</p>
                    {/* AIRTEL DATA PLANS */}
                    <div className=''>
                        {airtelDataPlans?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center min-w-[275px]' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                    <a href="" className='w-full flex justify-center items-center rounded-xl py-3 bg-gradient-to-tr from-teal-800 to-teal-500 text-center font-bold text-xl my-3 hover:shadow-lg hover:shadow-black duration-75 ease-in'><HiOutlineShoppingCart className='mr-1'/><p>Buy now</p></a>
                </div>
                {/* 9mobile DIV */}
                <div className='hover:shadow-lg hover:shadow-black ease-in duration-150 p-4 m-3 bg-gray-200 flex flex-col items-center basis-1/4 h-fit'>
                    <img className='w-[80px]' src={NINEMOBILELOGO} alt="" />
                    <p>9MOBILE DATA</p>
                    {/*9MOBILE  DATA PLANS */}
                    <div className=''>
                        {nineMobileData?.map((data, id)=> 
                        <div id= {id} className='border-t-2 border-solid border-gray-500 flex my-2 py-3 items-center text-center min-w-[275px]' >
                            <p className='basis-1/3'>{data.Data}</p>
                            <p className='basis-1/3'>{data.Price}</p>
                            <p className='basis-1/3'>{data.Duration}</p>
                        </div>
                        )}
                    </div>
                    <a href="" className='w-full flex justify-center items-center rounded-xl py-3 bg-gradient-to-tr from-teal-800 to-teal-500 text-center font-bold text-xl my-3 hover:shadow-lg hover:shadow-black duration-75 ease-in'><HiOutlineShoppingCart className='mr-1'/><p>Buy now</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataPlans