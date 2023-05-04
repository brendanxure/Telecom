import React from 'react'

const Footer = () => {
  return (
    <div className='bg-teal-800 p-8 flex flex-wrap md:flex-nowrap justify-between'>
        <div className='basis-2/4 px-4 '>
            <h1 className='text-4xl font-bold my-3'>TELECOM</h1>
            <p>We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more</p>
        </div>
        <div className='basis-1/4 px-4 '>
            <h1 className='text-2xl font-bold my-3'>Useful Links</h1>
            <ul className='leading-8'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
        <div className='basis-1/4 px-4 '>
            <h1 className='text-2xl font-bold my-3'>Contact Information</h1>
            <ul className='leading-8'>
                <li>Address: FCT Abuja, Nigeria.</li>
                <li>Email: telecom@gmail.com</li>
                <li>Phone: 07012345678</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer