import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Card, CardHeader, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dataTransactions, getAllDataTransaction } from '../../../features/DataTransaction/DataTransactionSlice'

const Data_Transactions = () => {
  const dispatch = useDispatch()
  const { dataTransaction, isError, isSuccess, isLoading, message} = useSelector(dataTransactions)

  console.log(dataTransaction)
  console.log(message)
  useEffect(()=> {
    dispatch(getAllDataTransaction())
  }, [])
  return (
    <div>
      <Helmet defer={false}>
        <title>Telecom || Data Transactions</title>
      </Helmet>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{ height: "70vh"}}></div>
      <Container className="" style={{ marginTop: "-22rem" }} fluid>
      <Card className="shadow px-3 pb-4">
      <CardHeader className="bg-transparent">
            <h3 className="mb-0">Data Transactions</h3>
      </CardHeader>
      </Card>
      </Container>
    </div>
  )
}

export default Data_Transactions