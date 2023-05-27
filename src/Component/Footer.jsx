import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid py-5 text-center' style={{background: "linear-gradient(45deg, #11cdef, #1171ef)", color: 'white'}}>
        <div className='col-12' style={{color: "white"}}>
            <h1 className='fs-2'>TELECOM</h1>
            <h5 className='fs-5'>We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more</h5>
        </div>
        {/* <div className='col-3 fs-5'>
            <h3>Useful Links</h3>
            <ul className='text'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Whyus'>About Us</a></li>
                <li><a href='#Services'>Services</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='Signup'>Register</a></li>
            </ul>
        </div> */}
        <div className='col-12 mt-5'>
            <h3 className='py-2 fs-3'>Contact Information</h3>
            <div className='fs-5'>
                <h3>Address: FCT Abuja, Nigeria.</h3>
                <h3>Email: telecom@gmail.com</h3>
                <h3>Phone: 07012345678</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer