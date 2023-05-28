import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import 'animate.css'

const Banner = () => {
  return (
    <div id='Home'className='' >
        <section className='container-fluid w-100 p-0 position-relative'>
            <img className='container-fluid w-100 p-0 m-0' style={{height: '90vh'}} src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className='position-absolute top-0 start-0 w-100 h-100' style={{background: "rgb(0, 0, 0)", opacity: "0.6" }}>
            </div>
            <div className='position-absolute top-0 start-0 w-100 justify-content-center h-100 align-items-center d-flex flex-column'>
            <h1 className='animate__animated animate__backInLeft animate__slower animate__delay-1s animate__infinite animate__slower fs-1' style={{color: "white"}}>Welcome to<span className='mx-2' style={{color: "#1171ef"}}> TELECOM!</span></h1>
            <p className='my-3 text-center' style={{color: "white", fontSize: "20px"}}>At TELECOM, we are dedicated to providing you with the most affordable and cheapest data, airtime.</p>
            <div className='px-3 py-2' style={{background: "#1171ef", fontSize: "20px", fontWeight: "lighter", color: "white", cursor:"pointer"}}><Link to='/auth/register' style={{color: "white"}}><FiLogIn />   REGISTER</Link></div>
            </div>
        </section>
    </div>
  )
}

export default Banner