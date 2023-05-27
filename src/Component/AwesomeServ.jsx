import React from 'react'

const AwesomeServ = () => {
  return (
    <div className='d-flex align-items-center' style={{backgroundColor: "rgb(229 231 235)"}}>
        <img className='awesomeservimg col-12 col-lg-6' style={{height: '80vh'}} src="https://images.pexels.com/photos/4350202/pexels-photo-4350202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='col-12 col-lg-6 px-4 py-5'>
            <h1 className='awesomeservheader' style={{fontSize: "30px", color: " #1171ef"}}>We offer outstanding services to our clients</h1>
            <p className='awesomeservmsg' style={{fontSize: "20px"}}>At TELECOM, we are committed to providing excellent services that simplify your life. We believe that certain things can be challenging, but making payments should not be one of them. With our help, you can easily pay for the services you enjoy, all from the comfort of your home or office. Our services offer total convenience, fast delivery, and easy payment options, all available at your fingertips.</p>
        </div>
    </div>
  )
}

export default AwesomeServ