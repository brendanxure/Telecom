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
import { Helmet } from "react-helmet-async";
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
import { getUser, register, reset } from "../../../features/Auth/AuthSlice";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    address: "",
    referral: "",
    password: "",
    confirmpassword: ""
})


const {username, email, phonenumber, address, referral, password, confirmpassword} = formData

const {user, isLoading, isError, isSuccess, message} = useSelector(getUser)

useEffect(()=>{
  if(isError) {
      toast.error(message)
  }
  if(isSuccess) {
    setFormData({
      username: "",
      email: "",
      phonenumber: "",
      address: "",
      referral: "",
      password: "",
      confirmpassword: ""
  })
      toast.success('Account Created Successfully')
      //navigate to your dash if you are logged in
      navigate('/auth/login')
      
  }
  if(user) {
      navigate('/admin')
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
  const userData = {
    username, email, phonenumber, address, referral, password
  }
  console.log(userData)
  e.preventDefault()
  if (confirmpassword !== password) {
    toast.info('password doesnt match')
  }
  else if(username === referral) {
    toast.info('Username and referral cannot be the same')
  }
  else {
    dispatch(register(userData))
  }
  
}
  return (
    <>
    <Helmet defer={false}>
      <title>Telecom || Register</title>
    </Helmet>
    {isLoading && <Spinner />}
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small style={{fontSize: "20px"}}>Sign Up</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="username" type="text" required name="username" value={username} onChange={onChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
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
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-pin-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Phone Number eg: 08123456789"
                    type="text"
                    required
                    name="phonenumber"
                    value={phonenumber}
                    onChange={onChange}
                    maxLength={11}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-planet" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Address"
                    type="text"
                    required
                    name="address"
                    value={address}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Referral Username"
                    type="text"
                    name="referral"
                    value={referral}
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
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    required
                    autoComplete="new-password"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div> */}
              {/* <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row> */}
              <div className="text-center">
                <Button className="mt-4" color="primary" onClick={onSubmit} type="button">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
