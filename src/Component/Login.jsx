import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'


const Login = () => {

    const onFinish = (e) => {
        console.log(e)
    }
  return (
    <div className='h-screen w-full bg-gradient-to-tr from-teal-800 to-teal-500 flex justify-center items-center'>
        <div className='bg-white p-8'>
            <Link to='/'><h1 className='text-3xl text-center font-bold text-teal-400 my-4'>TELECOM</h1></Link>
            <h1 className='text-4xl text-center my-4'>Sign In</h1>
            <Form onFinish={onFinish} className="min-w-[320px] md:min-w-[400px]">
            <label className='my-2'>Email</label>
                <Form.Item className='' name="Email" label='' rules={[{type: 'email', required: 'true'}]}>  
                    <Input placeholder='Input Email' className='my-2 w-full' />
                </Form.Item>
                <label className=''>Password</label>
                <Form.Item className='flex flex-col' name="Password" label='' rules={[{required: 'true'}]}>
                    <Input.Password placeholder='Input Password' className='my-2'/>
                </Form.Item>
                <Form.Item>
                    <Button className='bg-b my-4 w-full'>Sign In</Button>
                </Form.Item>
                <div className='w-full flex justify-between text-blue-500'>
                    <a href=''>Forgot Password</a>
                    <span className='text-black/90'>No Account? <Link to='/Signup'><a href='' className='text-blue-500'>Sign Up</a></Link></span>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Login