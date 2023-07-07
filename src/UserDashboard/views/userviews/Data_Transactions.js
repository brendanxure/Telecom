import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Card, CardHeader, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dataTransactionByDates, dataTransactions, getAllDataTransaction, resetDataTransactions, } from '../../../features/DataTransaction/DataTransactionSlice'
import { toast } from 'react-toastify'
import { getUser, logout } from '../../../features/Auth/AuthSlice'
import {DatePicker} from 'antd'
import axios from 'axios'
import { baseApiUrl } from '../../../Utils/constants'
import { dataPackage, getAllDataPlan, resetDataPlan } from '../../../features/DataPlan/DataPlanSlice'


const Data_Transactions = () => {
  const {RangePicker} = DatePicker
  const dispatch = useDispatch()
  const {user} = useSelector(getUser)
  const [dates, setDates] = useState([])
  const { dataTransaction, isError, isSuccess, isLoading, message} = useSelector(dataTransactions)
  const {dataPlans} = useSelector(dataPackage)

  
  console.log(dates)

  const searchDates = async() => {
    if(dates === null) {
      toast.error('Please Select dates')
    } else {
      const formData = {startDate: dates[0], endDate: dates[1]}
      console.log(formData)
      try {
        const headers = {
          'Authorization': `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'

        };
        const response = await axios.post(baseApiUrl + "/api/data/data-transactions-by-dates", formData, {headers})
        if(response.data){
          console.log(response.data)
          dispatch(dataTransactionByDates(response.data))
        }
      } catch (error) {
        if(error.response.data !== 'token expired'){
          console.log(error.response.data)
          toast.error(error.response.data)
        } else {
          dispatch(logout())
          toast.error('Error!! Please Login')
        }
      }
    }
  }

  const dateFormat = (date) => {
    return date?.substring(0, 10)
}

const dateFormatTemplate = (dataTransaction)=> {
    return dateFormat(dataTransaction?.createdAt)
}

const numberFormat = (number) => {
  return '0' + number?.substring(3)
}

const numberFormatTemplate = (dataTransaction) => {
  return numberFormat(dataTransaction?.msisdn)
}
 
const [filter, setFilter] = useState({
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
})

  // console.log(dataTransaction)
  // console.log(message)

  useEffect(()=> {
    dispatch(getAllDataTransaction())
    dispatch(getAllDataPlan())
  }, [])

  useEffect(()=> {
    if(message === 'token expired') {
        toast.error('Error!! Please Login again')
        dispatch(logout())
    } else if(message !== '') {
      toast.error(message)
    }
    
    if(isSuccess || isError){
        dispatch(resetDataTransactions())
        dispatch(resetDataPlan())
        }
}, [isSuccess, isError])

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
      <div className='d-flex justify-content-between mt-5'>
      <RangePicker 
        className='w-75'
        onChange={(values) =>
           setDates(values?.map(item=> 
             item.format("YYYY-MM-DD")
          ))
        }
      />
      <button onClick={searchDates} disabled={!dates} className='btn btn-primary w-25 mx-5' type='submit'>Search</button> 
      </div>
      {isLoading ? <div className='alert alert-light mt-2'>......Loading</div> : <div><InputText placeholder='search' className='searchdrop p-2 border w-25 my-4' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
        <DataTable value={dataTransaction} filters={filter} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
        <Column field='createdAt' header='Date' body={dateFormatTemplate} style={{width: '30%'}}></Column>
        <Column field='dataPlan' header='Data Plan'></Column>
        <Column field='msisdn' header='Mobile Number' body={numberFormatTemplate} style={{width: '30%'}}></Column>
        <Column field='status' header='Status' style={{width: '30%'}}></Column>
        </DataTable></div>}
      </Card>
      </Container>
    </div>
  )
}

export default Data_Transactions