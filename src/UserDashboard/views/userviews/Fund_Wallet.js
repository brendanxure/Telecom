import { useState } from "react";
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
import { Button, Form, Input, Select } from 'antd'
import { Helmet } from 'react-helmet-async'
import { useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice.jsx";

const Fund_Wallet = () => {
    const {user} = useSelector(getUser)
    return (
      <>
        <Helmet defer={false}>
          <title>Telecom || Fund Wallet</title>
        </Helmet>
       <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
        {/* Page content */}
        <Container className="" style={{marginTop: "-22rem"}} fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0">Fund Wallet(Paystack)</h3>
                </CardHeader>
                <CardBody>
                <Form className='w-100 bg-white p-4 rounded-xl '>
            <label htmlFor="">Name</label>
            <Form.Item>
              <Input disabled value={user?.username}/>
            </Form.Item>
            <label htmlFor="">Amount</label>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
            <Button className="bg-gradient-info text-white">Fund Wallet</Button>
            </Form.Item>
          </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
}

export default Fund_Wallet