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
import React from "react";

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

import { Helmet } from 'react-helmet-async'
import { useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice.jsx";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'

const Wallet_Histories = () => {
  const {user} = useSelector(getUser)
  
  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Wallet Histories</title>
      </Helmet>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
      {/* Page content */}
      <Container className="" style={{marginTop: "-22rem"}} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">All Wallet Histories</h3>
              </CardHeader>
              <div style={{background: 'orange'}}>
                <DataTable responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
                  <Column></Column>
                  <Column></Column>
                  <Column></Column>
                </DataTable>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>)
};

export default Wallet_Histories;
