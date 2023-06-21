import {useEffect, useRef, useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";
import { Button, Form, Input, Select, Modal, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice.jsx";
import { createDataPlan, dataPackage, deleteDataPlanById, getAllDataPlan, reset } from "../../../features/DataPlan/DataPlanSlice.jsx";
import { toast } from "react-toastify";
import Modaldiv from "./Modaldiv.js";
import Spinner from "../../../Component/Spinner.jsx";

const Data_Plan = () => {
    const formRef = useRef(null)
    const gridRef = useRef(null)
    const dispatch = useDispatch()
    const {user} = useSelector(getUser)
    const {dataPlans, isError, isLoading, isSuccess, message} = useSelector(dataPackage)
  
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [created, setCreated] = useState(false)
    const [prompt, setPrompt] = useState(false)
    const [editData, setEditData] = useState([])
    const [deleteData, setDeleteData] = useState([])
    const [isAddPlanOpen, setIsAddPlanOpen] = useState(false)

    useEffect(()=> {
      if (created && isSuccess){
        dispatch(getAllDataPlan())
        formRef.current.resetFields();
        gridRef.current.scrollIntoView({behavior: "smooth"}) 
        toast.success('Data Plan Created')
      }
      if (created && isLoading) {
        toast.error(message)
      }
      if(prompt && isLoading) {
        toast.info('Deleting...')
      }
      if(prompt && isSuccess) {
        dispatch(getAllDataPlan())
        setPrompt(false)
        toast.success('Data Plan Deleted')
      }
      if(prompt && isError) {
        toast.error(message)
      }
      dispatch(reset())
      setCreated(false)
    }, [isSuccess, isError])

    useEffect(()=> {
      dispatch(getAllDataPlan())
    }, [])

    const onFinish = (formData) => {
        setCreated(true)
        dispatch(createDataPlan(formData))
    }

    const onEdit =(dataId)=> {
        const dataToEdit = dataPlans.filter((dataPlan)=> dataId === dataPlan?._id)
        if(dataToEdit){
        setEditData(dataToEdit)
        setIsModalOpen(true)
        }
    }

    const onDelete = (dataId)=> {
        const dataToDelete = dataPlans.filter((dataPlan)=> dataId === dataPlan?._id)
        if(dataToDelete){
          setDeleteData(dataToDelete)
          setPrompt(true)
        }
  }
  const deleteButton = () => {
    const data = deleteData.find(data=> data._id)
    const dataId = data._id
    dispatch(deleteDataPlanById(dataId))
  }
  return (
    <div>
        <Helmet defer={false}>
        <title>Telecom || Data Plan</title>
      </Helmet>
      {isLoading && <Spinner />}
     <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
      <Modaldiv editData={editData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Modal open={prompt} onOk={deleteButton} onCancel={()=>setPrompt(false)} title='' className="" style={{width: "300px", height: "60vh", position: "fixed", top: "30vh", left: "25vw"}} centered  >
         {deleteData?.map(data=> 
          <Card key={data?._id} className="shadow mt-4">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Delete Data Plan</h3>
              </CardHeader>
              <CardBody>
                <p>{'Are you sure you want to delete this ' + data?.network.toUpperCase() + ' plan?'}</p>
              </CardBody>
          </Card>
          )}
       </Modal>  
      {/* Page content */}
      <Container className="alert alert-success mx-auto" onClick={()=>setIsAddPlanOpen(true)} style={{marginTop: "-22rem", width: "90%", cursor: "pointer"}}  fluid><i className="fas fa-solid fa-plus text-white mr-2"></i>Add a new Data Plan</Container>
      <Modal open={isAddPlanOpen} footer={null} onCancel={()=> setIsAddPlanOpen(false)} width={700} title='' className="my-3"  centered>
      <Container className="mx-0" style={{marginTop:''}} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="my-4">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Add Data Plan</h3>
              </CardHeader>
              <CardBody>
          <Form ref={formRef} className='w-100 bg-white p-2 rounded-xl' onFinish={onFinish}>
          <label htmlFor="">Name</label>
          <Form.Item>
            <Input disabled value={user?.username}/>
          </Form.Item>
          <label htmlFor="">Network</label>
          <Form.Item name="network" rules={[{required: 'true'}]}>
            <Select>
              <Select.Option value='mtn'>MTN</Select.Option>
              <Select.Option value='9mobile'>9Mobile</Select.Option>
              <Select.Option value='glo'>Glo</Select.Option>
              <Select.Option value='airtel'>Airtel</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Plan Name</label>
          <Form.Item name="planName" rules={[{required: "true"}]}>
            <Input />
          </Form.Item>
          <label htmlFor="">Plan ID</label>
          <Form.Item name="planId" rules={[{required: "true"}]}>
            <Input type="number" />
          </Form.Item>
          <label htmlFor="">Volume</label>
          <Form.Item name="volume" rules={[{required: 'true'}]}>
            <Input type="number"/>
          </Form.Item>
          <label htmlFor="">Unit</label>
          <Form.Item name="unit">
            <Select>
              <Select.Option value="mb">mb</Select.Option>
              <Select.Option value="gb">gb</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Data Type</label>
          <Form.Item name="type" rules={[{required: 'true'}]}>
            <Select>
              <Select.Option value='gifting'>Gifting</Select.Option>
              <Select.Option value='sme'>SME</Select.Option>
              <Select.Option value='corporate gifting'>Corporate Gifting</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Validity</label>
          <Form.Item name="validity" rules={[{required: 'true'}]}>
            <Input type="number" placeholder="Duration in days" 
              suffix={
                <Tooltip title="Duration in days">
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
          <label htmlFor="">Amount</label>
          <Form.Item name="amount" rules={[{required: 'true'}]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item>
          <Button className="bg-gradient-info text-white" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
      </Modal>
      <Container className="mb-5 mx-auto" style={{width: "94%"}} fluid>
        <Row>
        <Card className="shadow" style={{width: '100%'}}>
        <div className='col'>
          <CardHeader>
            <h3>Data Plans</h3> 
          </CardHeader>
          <CardBody>
            <div ref={gridRef}>
            {dataPlans && dataPlans.map(dataPlan=> 
              <div key={dataPlan?._id} className="d-flex w-100 justify-content-between align-content-center mt-3 border-2 border-bottom border-gray">
              <p style={{width: '25%'}}>{dataPlan?.network.toUpperCase()}</p>
              <p style={{width: '25%'}}>{dataPlan?.type}</p>
              <p style={{width: '25%'}}>{dataPlan?.volume + dataPlan?.unit}</p>
              <p style={{width: '20%'}}>{dataPlan?.validity + 'days'}</p>
              <div className="d-flex mt-2" style={{width: ''}}>
                <i className="fas fa-pen-to-square mx-4 text-primary" style={{cursor: "pointer"}}  onClick={()=>onEdit(dataPlan?._id)}/>
                <i className="fa-sharp fa-solid fa-trash text-danger" style={{cursor: "pointer"}} onClick={()=>onDelete(dataPlan?._id)}/>
              </div>
            </div>
            )}
            </div>
          </CardBody>
        </div>
        </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Data_Plan