import React from 'react'

const Agent = () => {
  return (
    <div>
        <div className='agent d-flex my-4 align-items-center' style={{backgroundColor: "rgb(229 231 235)"}}>
            <div className='col-12 col-lg-6 px-3 py-3'>
                <h1 className='text-center' style={{color: '#1171ef', fontSize: "50px"}}>Become An Agent</h1>
                <div className='py-2'>
                <p className='text-start' style={{fontSize: "19px"}}>Join our network of exceptional entrepreneurs who partner with TELECOM and help us expand our 'easy-payments' experience to your network. As a Referrer, you will earn a commission for every transaction you perform for your customers and be part of our effort to promote technology and empower students on campuses of higher learning and youths in diaspora.</p>
                <p className='text-start' style={{fontSize: "19px"}}>
                Our referral program offers outstanding incentives to encourage entrepreneurial and managerial skill acquisition, enhance growth and development, and promote empowerment. By becoming a Referrer, you will have the opportunity to leverage your network and earn extra income while contributing to the advancement of technology in our society.
                </p>
                <p className='text-start'  style={{fontSize: "19px"}}>
                Join our team today and help us bring the benefits of TELECOM's 'easy-payments' experience to more people!
                </p>
                </div>
                {/* <Button className='bg-primary'>Get Started</Button> */}
            </div>
            <img src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=400" className='col-md-6' style={{height: "100vh"}} alt="" />
        </div>
    </div>
  )
}

export default Agent