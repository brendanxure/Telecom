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
import { getUser, logout } from "../../../features/Auth/AuthSlice.jsx";
import { baseApiUrl } from "../../../Utils/constants.js";
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { reset, updateWalletBalance, walletBalance } from "../../../features/Wallet/WalletSlice.jsx";
import Spinner from "../../../Component/Spinner.jsx";

const Fund_Wallet = () => {
  const { user } = useSelector(getUser)
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const WalletBalance = useSelector(walletBalance)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('trxref');
    const verifyTransaction = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'

        };
        setLoading(true)
        const response = await axios.get(baseApiUrl + `/api/paystack/verify/${reference}`, { headers });
        console.log(response.data)
        if (response.status === 200) {

          // Dispatch the action to update the wallet balance in Redux store
          dispatch(updateWalletBalance(response.data.walletbalance));
          localStorage.setItem("userTelecomBalance", JSON.stringify(response.data.walletbalance))
          toast.success("Wallet Funded Sucessfully")
          navigate('/user/fund-wallet')
        }
        else {
          toast.error(" Wallet Not Funded Sucessfully due to " + response.data.message)
        }
      }
      catch (error) {
        console.log(error.response.data);
      } finally {
        setLoading(false)
        // dispatch(reset())
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
      setLoading(true)
      const response = await axios.post(baseApiUrl + "/api/paystack/initialize", data, { headers });
      console.log(response.data)
      if (response.data.status) {
        window.location.href = response.data.data.authorization_url;
      }
    }
    catch (error) {
      if(error.response.data === 'token expired') {
        toast.error('Error!! Please Login again')
        dispatch(logout())
      } else{
      console.log(error.response.data);
      toast.error(error.response.data.error)
      }
    } finally {
      setLoading(false)
    }
  };


  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Fund Wallet</title>
      </Helmet>
      {loading && <Spinner />}
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{ height: "70vh" }}></div>

      {/* Page content */}
      <Container className="" style={{ marginTop: "-22rem" }} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Fund Wallet(Paystack)</h3>
                <h3 className="mb-0 bg-gradient-info px-4 py-2 rounded-lg text-white"> Wallet Balance: ₦{WalletBalance?.balance}</h3>
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