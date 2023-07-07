import React, { useEffect, useState } from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWalletHistory, resetWalletHistory, userWalletHistory } from '../../../features/Wallet/WalletHistorySlice'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Card, CardHeader, Container } from 'reactstrap'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'
import { logout } from '../../../features/Auth/AuthSlice'


const Wallet_History = () => {
    const dispatch = useDispatch()
    const walletHistoryData = useSelector(getUserWalletHistory)
    const {walletHistory, isLoading, isError, isSuccess, message } = walletHistoryData
    console.log(walletHistory)

    const dateFormat = (date) => {
        return date.substring(0, 10)
    }

    const dateFormatTemplate = (walletHistory)=> {
        return dateFormat(walletHistory.timestamp)
    }
    

    const [filter, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })
    useEffect(()=> {
        dispatch(userWalletHistory())
    }, [])

    useEffect(()=> {
        if(message === 'token expired') {
            toast.error('Error!! Please Login again')
            dispatch(logout())
        }
        if(isSuccess || isError){
            dispatch(resetWalletHistory())
            }
    }, [isSuccess, isError])
    
    
  return (
    <div>
        <Helmet defer={false}>
        <title>Telecom || Wallet History</title>
        </Helmet>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{ height: "70vh"}}></div>
        <Container className="" style={{ marginTop: "-22rem" }} fluid>
        <Card className="shadow px-3 pb-4">
        <CardHeader className="bg-transparent">
            <h3 className="mb-0">Wallet History</h3>
        </CardHeader>
        {isLoading ? <div className='alert alert-light'>......Loading</div> : <div><InputText placeholder='search' className='searchdrop p-2 border w-25 my-4' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
        <DataTable value={walletHistory} filters={filter} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
        <Column field='timestamp' header='Date' body={dateFormatTemplate} style={{width: '30%'}}></Column>
        <Column field='transactionType' header='Transaction Type' style={{width: '30%'}}></Column>
        <Column field='amount' header='Amount' style={{width: '30%'}}></Column>
        </DataTable></div>}
        </Card>
        </Container>  
    </div>
  )
}

export default Wallet_History