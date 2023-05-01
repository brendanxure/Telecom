import React, {useEffect, useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [check, setcheck] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    })
    useEffect(() => {
        const windsize = () => {
            setWindowSize({
                width: window.innerWidth
            })
        }
        windsize()
        window.addEventListener('resize', windsize)
}, [])

   useEffect(()=> {
    if(windowSize.width > 1024) {
        setcheck(false)
    }
   },[windowSize.width])


  return (
    <div className='px-4 flex justify-between items-center w-full py-4 bg-teal-900 text-white'>
        {/* left-side */}
        <div className='basis-1/2 text-3xl'>
            <a href='#'>TELECOM</a>
        </div>
        <input type="checkbox"  className='hidden' checked={check} name="" id="nav-check" />
        {/* mobile menu/right-side */}
        <ul className='xure-nav flex flex-col absolute left-[0%] top-[-100%] z-10 bg-teal-400 w-full text-black lg:relative lg:z-0 lg:p-0 lg:left-0 lg:bg-inherit lg:flex-row lg:text-white basis-1/2 justify-between'>
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href=''>Home</a></li>
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href=''>About Us</a></li>
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href="">Services</a></li>
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href="">Pricing</a></li>            
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href="">Login</a></li>
            <li className='py-3 lg:py-2 border-t-2 border-solid border-teal-900 px-3 lg:px-0 lg:border-none'><a href="">Register</a></li>
        </ul>
        {!check && <label onClick={()=> setcheck(!check)} htmlFor="nav-check" className='lg:hidden cursor-pointer '><GiHamburgerMenu size={40} /></label>}
        {check && <label onClick={()=> setcheck(!check)} htmlFor="nav-check" className='lg:hidden cursor-pointer '><AiOutlineClose size={40} /></label>}
    </div>
  )
}

export default Navbar