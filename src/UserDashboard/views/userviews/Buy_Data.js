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
import {useState } from "react";
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
import { Button, Form, Input, Select, Modal } from 'antd'
import { Helmet } from 'react-helmet-async'
import { useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice.jsx";




const Buy_Data = () => {
  const [copiedText, setCopiedText] = useState();
  const {user} = useSelector(getUser)
  

  const [isModalOpen, setIsModalOpen] = useState(false)
  const onFinish = (e) => {
    console.log(e)
    setIsModalOpen(false)
  }
  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Buy Data</title>
      </Helmet>
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
          <Form className='w-100 bg-white p-4 rounded-xl' onFinish={onFinish}>
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
          <label htmlFor="">Data Type</label>
          <Form.Item name="type" rules={[{required: 'true'}]}>
            <Select>
              <Select.Option value='gifting'>Gifting</Select.Option>
              <Select.Option value='sme'>SME</Select.Option>
              <Select.Option value='corporate gifting'>Corporate Gifting</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Mobile Number</label>
          <Form.Item name="number" rules={[{required: 'true'}]}>
            <Input maxLength={11}/>
          </Form.Item>
          <label htmlFor="">Amount</label>
          <Form.Item name="amount" rules={[{required: 'true'}]}>
            <Input />
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
