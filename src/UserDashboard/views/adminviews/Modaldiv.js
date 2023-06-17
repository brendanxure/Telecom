import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select, Modal, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { getUser } from "../../../features/Auth/AuthSlice.jsx";
import {
  Card,
  Container,
} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { dataPackage, getAllDataPlan, reset, updateDataPlanById } from '../../../features/DataPlan/DataPlanSlice.jsx';
import { toast } from 'react-toastify';

const Modaldiv = ({editData, isModalOpen, setIsModalOpen}) => {
  const {isLoading, isError, message, dataPlans, isSuccess} = useSelector(dataPackage)
  const dispatch = useDispatch()
  const {user} = useSelector(getUser)

  useEffect(()=> {
    if(isModalOpen && isLoading) {
      toast.info('Updating...')
    }
    if(isModalOpen && isSuccess) {
      dispatch(getAllDataPlan())
      setIsModalOpen(false)
      toast.success('Updated Successfully')
    }
    if(isModalOpen && isError) {
      toast.success(message)
    }
    dispatch(reset())
  }, [dispatch, isError, isLoading, isSuccess])

  const onFinish = (formData) => {
    const dataId = editData?.map(id=> id._id)
    const dataID = dataId.toString()
    const formDataWithID = {_id: dataID, network: formData.network, size: formData.size, unit: formData.unit, duration: formData.duration, type: formData.type, amount: formData.amount}
    if (formDataWithID._id) {
      dispatch(updateDataPlanById(formDataWithID))
    }
  }
  return (
    <div>
        <Modal open={isModalOpen} onCancel={()=>setIsModalOpen(false)} title='Update Data Plan' className="w-50" style={{height: "", position: "fixed", top: "2vh", left: "25vw"}} footer={null}>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "20vh"}}></div>
      {editData.map((data)=> 
      <Container key={data._id} className="col" style={{marginTop: "-15rem"}} fluid>
      <Card className="shadow px-3 py-2">
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