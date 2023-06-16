import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select, Modal, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { getUser } from "../../../features/Auth/AuthSlice.jsx";
import {
  Card,
  Container,
} from "reactstrap";
import { useSelector } from 'react-redux';

const Modaldiv = ({editData, isModalOpen, setIsModalOpen}) => {
  const {user} = useSelector(getUser)


  const onFinish = (formData) => {
    console.log(formData)
  }
  return (
    <div>
        <Modal open={isModalOpen} onCancel={()=>setIsModalOpen(false)} title='Update Data Plan' className="w-50" style={{height: "60vh", position: "fixed", top: "3vh", left: "25vw"}} centered  footer={null}>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "20vh"}}></div>
      {editData.map((data)=> 
      <Container key={data._id} className="col" style={{marginTop: "-13rem"}} fluid>
      <Card className="shadow p-3">
      <Form onFinish={onFinish}>
      <label htmlFor="">Name</label>
        <Form.Item>
          <Input disabled value={user?.username}/>
        </Form.Item>
        <label htmlFor="">Network</label>
        <Form.Item initialValue={data?.network} name="network" rules={[{required: 'true'}]}>
          <Select>
            <Select.Option value='mtn'>MTN</Select.Option>
            <Select.Option value='9mobile'>9Mobile</Select.Option>
            <Select.Option value='glo'>Glo</Select.Option>
            <Select.Option value='airtel'>Airtel</Select.Option>
          </Select>
        </Form.Item>
        <label htmlFor="">Size</label>
        <Form.Item initialValue={data?.size} name="size" rules={[{required: 'true'}]}>
          <Input type="number"/>
        </Form.Item>
        <label htmlFor="">Unit</label>
        <Form.Item initialValue={data?.unit} name="unit">
          <Select>
            <Select.Option value="mb">mb</Select.Option>
            <Select.Option value="gb">gb</Select.Option>
          </Select>
        </Form.Item>
        <label htmlFor="">Data Type</label>
        <Form.Item initialValue={data?.type} name="type" rules={[{required: 'true'}]}>
          <Select>
            <Select.Option value='gifting'>Gifting</Select.Option>
            <Select.Option value='sme'>SME</Select.Option>
            <Select.Option value='corporate gifting'>Corporate Gifting</Select.Option>
          </Select>
        </Form.Item>
        <label htmlFor="">Duration</label>
        <Form.Item initialValue={data?.duration} name="duration" rules={[{required: 'true'}]}>
          <Input type="number" placeholder="Duration in days" 
            suffix={
              <Tooltip title="Duration in days">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <label htmlFor="">Amount</label>
        <Form.Item initialValue={data?.amount} name="amount" rules={[{required: 'true'}]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
        <Button className="bg-gradient-info text-white" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
      </Card>
    </Container>
      )}
      </Modal>
    </div>
  )
}

export default Modaldiv