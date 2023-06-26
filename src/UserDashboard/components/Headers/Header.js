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
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { getUser, logout } from "../../../features/Auth/AuthSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faUser, faPeopleArrows, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateWalletBalance, walletBalance } from "../../../features/Wallet/WalletSlice";
import { getUserWalletHistory, reset, userWalletHistory } from "../../../features/Wallet/WalletHistorySlice";
import { toast } from "react-toastify";


const Header = () => {
  const {user} = useSelector(getUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const WalletBalance = useSelector(walletBalance)
  const { message } = useSelector(getUserWalletHistory) 

  useEffect(()=> {
    if(user){
      dispatch(userWalletHistory())
      if(message === 'token expired') {
        dispatch(logout())
        toast.info('Please Login')
      }
      dispatch(reset()) 
    }
  },[message])

  
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <div class="w-100 d-md-flex justify-content-between align-items-center px-5 my-5">
          <h2 className="col-12 col-md-8 fs-2 text-center text-md-left ">Welcome to Telecom</h2>
          <div style={{background: "#ff5722", borderRadius: "5rem", cursor: "pointer"}} className='col-12 col-md-4 col-lg-3 col-xl-2 text-center text-white px-2 py-2' onClick={()=>setIsModalOpen(true)}>Fund Wallet</div>
        </div>
        <Container fluid>
          <div className="header-body">
            <Modal open={isModalOpen} onCancel={()=>setIsModalOpen(false)} title='Fund Wallet' className="" style={{height: "60vh", top: "30vh"}} footer={null}>
              <div className="bg-gradient-info p-2 rounded-3 d-flex align-items-center my-4" style={{cursor: "pointer"}} onClick={()=> navigate('/admin/fundwallet')}>
               <i className="ni ni-credit-card text-white px-2 fs-1"></i> <h2 className="mx-2">Pay with Paystack</h2>
              </div>
            </Modal>
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Wallet Balance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                        ₦{WalletBalance?.balance}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          {/* <i className="fas fa-chart-bar" /> */}
                          <FontAwesomeIcon icon={faWallet}  />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row style={{cursor: 'pointer'}} onClick={()=> navigate("/admin/wallethistory")}>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Wallet History
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Transactions
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Subscribers
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49</span>
                      </div>
                      <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
