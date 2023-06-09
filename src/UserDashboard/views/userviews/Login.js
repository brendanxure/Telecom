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

// reactstrap components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Spinner from "../../../Component/Spinner";
import { getUser, login, reset } from "../../../features/Auth/AuthSlice";
import { Helmet } from 'react-helmet-async'
import { updateWalletBalance } from "../../../features/Wallet/WalletSlice";


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
})

const {email, password} = formData

const {user, isLoading, isError, isSuccess, message} = useSelector(getUser)

useEffect(()=>{
  if(isError) {
      toast.error(message)
  }
  if(isSuccess) {
    setFormData({
      email: "",
      password: ""
  })
      toast.success('Logged in Successfully')
      //navigate to your dash if you are logged in
      navigate('/user')
      dispatch(updateWalletBalance(user?.walletBalance))
      
  }
  if(user) {
    navigate('/user')
  }
  dispatch(reset())
  
},[user, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) => {
  setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
  }) )
}

const onSubmit = (e) => {
  e.preventDefault()
  const userData = {
      email, password
  }
  
  dispatch(login(userData))
}
  return (
    <>
    <Helmet defer={false}>
      <title>Telcom || Login</title>
    </Helmet>
    {isLoading && <Spinner />}
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small style={{fontSize: "20px"}}>Sign In</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    required
                    autoComplete="new-email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    required
                    autoComplete="new-password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" onClick={onSubmit} type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
