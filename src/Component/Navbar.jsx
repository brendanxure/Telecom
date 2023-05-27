import React, {useEffect, useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout, reset } from '../features/Auth/AuthSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(getUser)
    console.log(user.user)

   const onLogout = () => {
       dispatch(logout())
   }
   useEffect(()=>{
      dispatch(reset())
   },[])


  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TELECOM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Whyus">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#DataPlans">Pricing</a>
        </li>
        {!user?.user && <li class="nav-item">
          <Link to='/auth/login'><a class="nav-link" href="">Login</a></Link>
        </li>}
        {user?.user && <li class="nav-item" onClick={onLogout}>
          <a class="nav-link" href="">Logout</a>
        </li>}
        <li class="nav-item">
          <Link to='/auth/register'><a class="nav-link" href="#Services">Register</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar