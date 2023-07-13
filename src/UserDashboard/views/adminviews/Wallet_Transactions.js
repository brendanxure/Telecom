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
import React, { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../features/Auth/AuthSlice.jsx";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import axios from 'axios';
import { baseApiUrl } from '../../../Utils/constants';
import { toast } from "react-toastify";
import { allUsers } from "../../../features/Users/UsersSlice.jsx";

const Wallet_Transactions = () => {
  const {user} = useSelector(getUser)
  const {AllUsers}= useSelector(allUsers)
  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
      global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  })
  const [walletTransactions, setWalletTransactions] = useState([])
  const [allWallet, setAllWallet] = useState([])

  const getUsername = (walletId) => {
    const wallet = allWallet?.find(username => username?._id === walletId?.walletId)
    const walletName =  AllUsers?.find(user=> user?._id === wallet?.user)
    return walletName?.username
  }
  
  const dateFormat = (date) => {
      return date.substring(0, 10)
  }

  const dateFormatTemplate = (walletTransactions)=> {
      return dateFormat(walletTransactions?.timestamp)
  }

  useEffect(()=> {
      const getWalletTransactions = async()=> {
          try {
              const headers = {
                  'Authorization': `Bearer ${user?.accessToken}`,
                  'Content-Type': 'application/json'
        
                };
              const response = await axios.get(baseApiUrl + '/api/wallet/get-all-wallet-histories', {headers})
              if(response.data){
                  setWalletTransactions(response.data)
              }
          } catch (error) {
            if(error.response.data === 'token expired') {
              toast.error('Error!! Please Login again')
              dispatch(logout())
            } else if(error.response){
                  toast.error(error.response.data)
              } else {
                toast.error(error)
              }
          }
      }

      getWalletTransactions()

  }, [])

  useEffect(()=> {
    const getAllWallet = async()=> {
      try {
        const headers = {
          'Authorization': `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'

        };
        const response = await axios.get(baseApiUrl + '/api/wallet/get-all-wallet', {headers})
        if(response.data){
          setAllWallet(response.data)
        }
      } catch (error) {
        if(error.response.data === 'token expired') {
          toast.error('Error!! Please Login again')
          dispatch(logout())
        } else if(error.response){
          toast.error(error.response.data)
      } else {
        toast.error(error)
      }
      }
    }
    getAllWallet()
  }, [])
  
  return (
    <>
      <Helmet defer={false}>
        <title>Telecom || Wallet Transactions</title>
      </Helmet>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
      {/* Page content */}
      <Container className="" style={{marginTop: "-22rem"}} fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">All Wallet Transactions</h3>
              </CardHeader>
              <div style={{background: 'orange'}}>
              <InputText placeholder='search' className='searchdrop p-2 border w-25 my-4' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
                <DataTable value={walletTransactions} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
                  <Column field="timestamp" header='Date' body={dateFormatTemplate} style={{width: '25%'}}></Column>
                  <Column field="walletId" header='User' body={getUsername} style={{width: '25%'}}></Column>
                  <Column field="amount" header='Amount'></Column>
                  <Column field="transactionType" header='Transaction Type' style={{width: '25%'}}></Column>
                </DataTable>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>)
};

export default Wallet_Transactions;
