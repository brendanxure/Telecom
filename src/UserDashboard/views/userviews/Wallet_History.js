import React, { useState } from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import { useSelector } from 'react-redux'
import { getUserWalletHistory } from '../../../features/Wallet/WalletHistorySlice'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";


const Wallet_History = () => {
    const walletHistoryData = useSelector(getUserWalletHistory)
    const {walletHistory, isLoading, isError, isSuccess } = walletHistoryData
    console.log(walletHistoryData)

    const [filter, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })
  return (
    <div className="card px-3">
        <h1 className='text-center my-2'>Wallet History</h1>
        <InputText placeholder='search' className='searchdrop p-2 border w-25 my-2' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
        <DataTable value={walletHistory} filters={filter} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
        <Column field='timestamp' header='Date' style={{width: '30%'}}></Column>
        <Column field='transactionType' header='Transaction Type' style={{width: '30%'}}></Column>
        <Column field='amount' header='Amount' style={{width: '30%'}}></Column>
        </DataTable>
    </div>
  )
}

export default Wallet_History