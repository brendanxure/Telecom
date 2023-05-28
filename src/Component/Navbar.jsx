import React, {useEffect, useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout, reset } from '../features/Auth/AuthSlice'
import { Col, Row } from 'reactstrap'


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
    <a class="navbar-brand fs-2 fw-bolder" href="#">TELECOM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <Row className='navbar-collapse-header d-md-none d-flex justify-content-between align-items-center'>
      <Col className="collapse-brand fs-2" xs="6">
        <Link to="/">
          {/* <img
            alt="..."
            src={require("../../assets/img/brand/argon-react.png")}
          /> */}
          TELECOM
        </Link>
      </Col>
      <Col className="collapse-close" xs="6">
          <button className="navbar-toggler" id="navbar-collapse-main" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
          <span />
          <span />
          </button>
        </Col>
      </Row>
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