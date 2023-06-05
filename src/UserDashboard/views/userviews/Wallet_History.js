import React, { useEffect, useState } from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWalletHistory, reset, userWalletHistory } from '../../../features/Wallet/WalletHistorySlice'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { Card, CardHeader, } from 'reactstrap'


const Wallet_History = () => {
    const dispatch = useDispatch()
    const walletHistoryData = useSelector(getUserWalletHistory)
    const {walletHistory, isLoading, isError, isSuccess } = walletHistoryData
    console.log(walletHistoryData)

    const [filter, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })
    useEffect(()=> {
        dispatch(userWalletHistory())
    },[])

    useEffect(()=> {
        if(isSuccess || isError){
            dispatch(reset())
            }
    }, [isSuccess, isError])
  return (
    <div className="card px-3 pb-3">
        <CardHeader className="bg-transparent">
            <h3 className="mb-0">Wallet History</h3>
        </CardHeader>
        <InputText placeholder='search' className='searchdrop p-2 border w-25 my-4' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
        <DataTable value={walletHistory} filters={filter} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
        <Column field='timestamp' header='Date' style={{width: '30%'}}></Column>
        <Column field='transactionType' header='Transaction Type' style={{width: '30%'}}></Column>
        <Column field='amount' header='Amount' style={{width: '30%'}}></Column>
        </DataTable>
    </div>
  )
}

export default Wallet_History