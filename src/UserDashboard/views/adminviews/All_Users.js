import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
import { Helmet } from 'react-helmet-async'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import {FilterMatchMode} from 'primereact/api'
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, getAllUsers, resetAllUsers } from '../../../features/Users/UsersSlice';
import { toast } from 'react-toastify';
import { logout } from '../../../features/Auth/AuthSlice';

const All_Users = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })
     
    const {AllUsers, isLoadingAllUsers, isSuccessAllUsers, isErrorAllUsers, isMessageAllUsers} = useSelector(allUsers)
    
    const dateFormat = (date) => {
        return date.substring(0, 10)
    }

    const dateFormatTemplate = (users)=> {
        return dateFormat(users?.createdAt)
    }

    useEffect(()=> {
        dispatch(getAllUsers())
    }, [])

    useEffect(()=> {
        if(isMessageAllUsers === 'token expired'){
            toast.error('Error!! Please Login again')
            dispatch(logout())
        } else if (isMessageAllUsers !== ''){
            toast.error(isMessageAllUsers)
        }

        if(isSuccessAllUsers || isErrorAllUsers){
            dispatch(resetAllUsers())
        }

    }, [isSuccessAllUsers, isErrorAllUsers])

  return (
    <div>
        <Helmet defer={false}>
            <title>Telecom || All Users</title>
        </Helmet>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" style={{height : "70vh"}}></div>
        {/* Page content */}
        <Container className="" style={{marginTop: "-22rem"}} fluid>
        {/* Table */}
        <Card className="shadow px-3 pb-4">
        <CardHeader className="bg-transparent">
            <h3 className="mb-0">All Registered Users</h3>
        </CardHeader>
        <InputText placeholder='search' className='searchdrop p-2 border w-25 my-4' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} />
        <DataTable value={AllUsers}  filters={filter} responsiveLayout='scroll' showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 40]}>
        <Column field='createdAt' header='Date' body={dateFormatTemplate} style={{width: '30%'}}></Column>
        <Column field='username' header='Username' style={{width: '30%'}}></Column>
        <Column field='phonenumber' header='Phone Number' style={{width: '30%'}}></Column>
        <Column field='isAdmin' header='Admin' ></Column>
        </DataTable>
        </Card>
        </Container>
    </div>
  )
}

export default All_Users