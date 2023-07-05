/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {useEffect, useState } from "react";
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
import { getUser, logout } from "../../../features/Auth/AuthSlice.jsx";
import { dataPackage, getAllDataPlan, reset } from "../../../features/DataPlan/DataPlanSlice.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { baseApiUrl } from "../../../Utils/constants.js";
import { updateWalletBalance, walletBalance } from "../../../features/Wallet/WalletSlice.jsx";
import Spinner from "../../../Component/Spinner.jsx";





const Buy_Data = () => {
  const dispatch = useDispatch()
  const [copiedText, setCopiedText] = useState();
  const {user} = useSelector(getUser)
  const {dataPlans, isError, isSuccess, message, isLoading} = useSelector(dataPackage)
  const {balance} = useSelector(walletBalance)
  const [network, setNetwork] = useState('')
  const [dataOptions, setDataOptions] = useState([])
  const [dataPlanId, setDataPlanId] = useState('')
  const [planId, setPlanId] = useState()
  const [amount, setAmount] = useState()
  const [Loading, setLoading] = useState(false)

  const [form] = Form.useForm();

  useEffect(()=> {
      dispatch(getAllDataPlan())
  }, [])

  useEffect(()=> {
      if(user) {
        if(message === 'token expired') {
          dispatch(logout())
        }
      }
      dispatch(reset())
  },[message, isSuccess])

  console.log(dataPlans)


  const networkOnChange = (value) => {
    setNetwork(value)
  }

  const dataPlanOnChange = (value) => {
    setDataPlanId(value)
  }

  const mobileNumberFormat = (number) => {
    let numberFormat = '234' + number.substring(1)
    return numberFormat
  }
  
  useEffect(()=> {
      form.resetFields(['dataplanId']);
      setAmount(0)
      if(network === 'glo'){
        const gloDataPlans = dataPlans?.filter((gloData)=> gloData?.network === 'glo')
        setDataOptions(gloDataPlans) 
      }
      if(network === 'mtn'){
        const mtnDataPlans = dataPlans?.filter((mtnData)=> mtnData?.network === 'mtn')
        setDataOptions(mtnDataPlans)
      }
      if(network === '9mobile') {
        const nineMobileDataPlans = dataPlans?.filter((nineMobileData)=> nineMobileData?.network === '9mobile')
        setDataOptions(nineMobileDataPlans)
      }
      if(network === 'airtel') {
        const airtelDataPlans = dataPlans?.filter((airtelData)=> airtelData?.network === 'airtel')
        setDataOptions(null)
      }
  }, [network])

  useEffect(()=> {
    const dataSelect = dataPlans?.find((data)=> data?._id === dataPlanId)
    setPlanId(dataSelect?.planId)
    setAmount(dataSelect?.amount)
  }, [dataPlanId])

  const buyData = async(formData) => {
    const headers = {
      'Authorization': `Bearer ${user?.accessToken}`,
      'Content-Type': 'application/json'
    };
      try {
        setLoading(true)
        const response = await axios.post(baseApiUrl + '/api/data' + '/buy-data', formData, {headers} )
        console.log(response.data.message)
        if(response.data.message !== 'Data Purchased Successfully' ){
          if(response.data.walletBalance){
            form.resetFields()
            setAmount(0)
            dispatch(updateWalletBalance(response.data.walletBalance))
            toast.info(response.data.message)
          } else {
            toast.error(response.data.message)
          }
        } 
        if (response.data.message === 'Data Purchased Successfully') {
          form.resetFields()
          setAmount(0)
          dispatch(updateWalletBalance(response.data.walletBalance))
          toast.success(response.data.message)
        }
      } catch (error) {
        if(error.response.data === 'token expired') {
          toast.error('Error!! Please Login again')
          dispatch(logout())
        } else if (error.response.data){
        console.log(error.response.data)
        toast.error(error.response.data.message)
        } else{
          console.log(error)
          toast.error(error)
        }
      } finally {
        setLoading(false)
      }
  }

  const onFinish = (e) => {
    if(!amount){
     toast.info('No amount!! Please refresh page')
    } else if( amount >  balance) {
      toast.error('Insufficient Funds in Wallet')
    } else if(e.msisdn[0] === '0' && e.msisdn.length === 11){
      const phoneNumber = mobileNumberFormat(e.msisdn)
      const FormData = {dataplanId: e.dataplanId, msisdn: phoneNumber, amount, planId}
      console.log(FormData) 
      buyData(FormData)
    } else if (e.msisdn.length !== 11){
      toast.info('Mobile Number is Incomplete')
    } else {
      toast.info('Mobile Number Format is incorrect')
    }
  }
  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Buy Data</title>
      </Helmet>
      {Loading && <Spinner />}
     <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
      {/* Page content */}
      <Container className="" style={{marginTop: "-22rem"}} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Buy Data</h3>
              </CardHeader>
              <CardBody>
          <Form form={form} className='w-100 bg-white p-4 rounded-xl' onFinish={onFinish}>
          <label htmlFor="">Network</label>
          <Form.Item name="network" rules={[{required: 'true', message: "Please select a network"}]}>
            <Select value={network} onChange={networkOnChange}>
              <Select.Option value='mtn'>MTN</Select.Option>
              <Select.Option value='9mobile'>9Mobile</Select.Option>
              <Select.Option value='glo'>Glo</Select.Option>
              <Select.Option value='airtel'>Airtel</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Data Plans</label>
          <Form.Item name="dataplanId" rules={[{required: 'true', message: "Please select a data plan"}]}>
            <Select value={dataPlanId} onChange={dataPlanOnChange}>
              {dataOptions?.map((dataOption, key)=> 
                <Select.Option value={dataOption?._id} key={key}>{dataOption?.network.toUpperCase()} - {dataOption?.volume + dataOption?.unit} for {dataOption?.validity + 'days'}</Select.Option>
              )}
            </Select>
          </Form.Item>
          <label htmlFor="">Mobile Number</label>
          <Form.Item name="msisdn" rules={[{required: 'true', message: "Please input your Mobile Number"}]}>
            <Input maxLength={11}
            suffix={
              <Tooltip title="Eg: 0812345678">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            />
          </Form.Item>
          <label htmlFor="">Amount</label>
          <Form.Item>
            <Input value={amount} disabled type='number' />
          </Form.Item>
          <Form.Item>
          <Button className="bg-gradient-info text-white" htmlType="submit">Buy now</Button>
          </Form.Item>
        </Form>
            </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Buy_Data;
