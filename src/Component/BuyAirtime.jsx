import React from 'react'
import { Button, Form, Input, Select } from 'antd'

const BuyAirtime = () => {
  return (
    <div className='midde_cont'>
        <h1 className='text-center font-bold text-3xl mt-4'>Buy Airtime</h1>
        <Form className='w-[80%] my-4 mx-auto bg-white p-4 rounded-xl shadow-black shadow-lg'>
          <label htmlFor="">Network</label>
          <Form.Item>
            <Select>
              <Select.Option>MTN</Select.Option>
              <Select.Option>9Mobile</Select.Option>
              <Select.Option>Glo</Select.Option>
              <Select.Option>Airtel</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Airtime Type</label>
          <Form.Item>
            <Select>
              <Select.Option>Gifting</Select.Option>
              <Select.Option>SME</Select.Option>
              <Select.Option>Corporate Gifting</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Mobile Number</label>
          <Form.Item>
            <Input />
          </Form.Item>
          <label htmlFor="">Amount</label>
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className=''>Buy Now</Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default BuyAirtime