import { Button, Form, Input, Tooltip } from 'antd'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, register } from '../features/Auth/AuthSlice'
import Spinner from './Spinner'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector(getUser)

  const formRef = useRef()


  const onFinish = (e) => {
    console.log(e)
    if(e.confirmpassword !== e.password) {
      alert('password doesnt match')
    }
    if(e.confirmpassword === e.password) {
      dispatch(register(e))
      navigate('/login')
    }
    if(isSuccess) {
      formRef.current.resetFields()
    }
    
}

  return (
    <div className='h-full w-full bg-gradient-to-tr from-teal-800 to-teal-500 flex justify-center items-center py-8 px-4'>
      {isLoading && <Spinner />}
        <div className='bg-white py-8 px-6 md:px-8'>
            <Link to='/'><h1 className='text-3xl text-center font-bold text-teal-400 my-4'>TELECOM</h1></Link>
            <h1 className='text-4xl text-center my-4'>Create an Account</h1>
            <Form ref={formRef} onFinish={onFinish} className="min-w-[320px] md:min-w-[400px]">
              <label htmlFor="">Username</label>
              <Form.Item  className='' name='Username' label='' rules={[{type: 'string', required: 'true', message: "Please Enter Your Username"}]}>
                <Input className='mt-2'
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon " />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              } />
              </Form.Item>
              <label className=''>Email</label>
                <Form.Item className='' name="Email" label='' rules={[{type: 'email', required: 'true', message: "Please Enter Your Email Address"}]}>  
                    <Input placeholder='Input Email' className='mt-2 w-full' />
                </Form.Item>
                <label htmlFor="">Phone Number</label>
                <Form.Item className='' label="" name='PhoneNumber' rules={[{required: 'true', message: "Please Enter Your Phone Number"}]}>
                  <Input placeholder='0812345678'
                   suffix={
                    <Tooltip title="Eg: 0812345678">
                      <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                  />
                </Form.Item>
                <label htmlFor="">Address</label>
                <Form.Item className='' name='Address' label='' rules={[{type:'string', required: 'true', message: "Please Enter Your Address"}]}>
                  <Input />
                </Form.Item>
                <label htmlFor="">Referral Username [optional]</label>
                <Form.Item className='' name='Referral' label='' rules={[{type:'string'}]}>
                  <Input className='mt-2'/>
                </Form.Item>
                <label className=''>Password</label>
                <Form.Item className='flex flex-col' name="password" label='' rules={[{required: 'true', message: "Please Input Your Password"}]}>
                    <Input.Password placeholder='Input Password' className='mt-2'/>
                </Form.Item>
                <label className=''>Confirm Password</label>
                <Form.Item className='flex flex-col' name="confirmpassword" label='' rules={[{required: 'true', message: "Please Make Sure Password Match"}]}>
                    <Input.Password placeholder='Input Password' className='my-2'/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' className='bg-b my-4 w-full'>Register</Button>
                </Form.Item>
                <div className='w-full flex flex-col md:flex-row justify-between text-blue-500'>
                    <a href=''>Forgot Password</a>
                    <span className='text-black/90 '>Already have an Account? <Link to='/login'><a href='' className='text-blue-500'>Log In</a></Link></span>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default SignUp