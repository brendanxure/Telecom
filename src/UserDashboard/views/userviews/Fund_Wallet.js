import { useState, useEffect } from "react";
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
} from "reactstrap";
// core components
import { Button, Form, Input } from 'antd'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice.jsx";
import { baseApiUrl } from "../../../Utils/constants.js";
import axios from 'axios';

import { json, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import { reset } from "../../../features/Wallet/WalletSlice.jsx";

const Fund_Wallet = () => {
  const { user } = useSelector(getUser)
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('trxref');
    const verifyTransaction = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'

        };
        const response = await axios.get(baseApiUrl + `/api/paystack/verify/${reference}`, { headers });
        if (response.status === 200) {
          toast.success("Wallet Funded Sucessfully")
          navigate('/admin/fundwallet')
        }
        else {
          toast.error(" Wallet Not  Funded Sucessfully due to " + response.data.message)
        }
      }
      catch (error) {
        console.log(error);
      } finally {
        dispatch(reset())
      }
    };

    if (reference) {
      verifyTransaction();
    }
  }, []);


  const handleFundWallet = async (e) => {
    e.preventDefault();
    const headers = {
      'Authorization': `Bearer ${user?.accessToken}`,
      'Content-Type': 'application/json'
    };
    const data = {
      amount: amount
    }

    try {
      const response = await axios.post(baseApiUrl + "/api/paystack/initialize", data, { headers });
      if (response.data.status) {
        window.location.href = response.data.data.authorization_url;
      }
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Fund Wallet</title>
      </Helmet>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{ height: "70vh" }}></div>

      {/* Page content */}
      <Container className="" style={{ marginTop: "-22rem" }} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Fund Wallet(Paystack)</h3>
              </CardHeader>
              <CardBody>
                <Form className='w-100 bg-white p-4 rounded-xl ' >
                  <label htmlFor="">Name</label>
                  <Form.Item>
                    <Input disabled value={user?.username} />
                  </Form.Item>
                  <label htmlFor="">Amount</label>
                  <Form.Item>
                    <Input value={amount} onChange={(event) => { setAmount(event.target.value) }} />
                  </Form.Item>
                  <Button type="button" onClick={handleFundWallet} className="bg-gradient-info text-white">Fund Wallet</Button>
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