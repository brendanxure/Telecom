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



const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
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
              <Form className='w-100 bg-white p-4 rounded-xl '>
          <label htmlFor="">Name</label>
          <Form.Item>
            <Input disabled value='Brendan Xure'/>
          </Form.Item>
          <label htmlFor="">Network</label>
          <Form.Item>
            <Select>
              <Select.Option>MTN</Select.Option>
              <Select.Option>9Mobile</Select.Option>
              <Select.Option>Glo</Select.Option>
              <Select.Option>Airtel</Select.Option>
            </Select>
          </Form.Item>
          <label htmlFor="">Data Type</label>
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
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
