import React from 'react'
const Footer = () => {
  return (
    <div className='bg-gradient-to-tr from-teal-800 to-teal-500 text-white p-8 flex flex-wrap md:flex-nowrap justify-between'>
        <div className='basis-2/4 px-4 '>
            <h1 className='text-4xl font-bold my-3'>TELECOM</h1>
            <p  className=' text-lg'>We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more</p>
        </div>
        <div className='basis-1/4 px-4 '>
            <h1 className='text-2xl font-bold my-3'>Useful Links</h1>
            <ul className='leading-8 cursor-pointer text-lg'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Whyus'>About Us</a></li>
                <li><a href='#Services'>Services</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='Signup'>Register</a></li>
            </ul>
        </div>
        <div className='basis-1/4 px-4 '>
            <h1 className='text-2xl font-bold my-3'>Contact Information</h1>
            <ul className='leading-8 text-lg'>
                <li>Address: FCT Abuja, Nigeria.</li>
                <li>Email: telecom@gmail.com</li>
                <li>Phone: 07012345678</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer