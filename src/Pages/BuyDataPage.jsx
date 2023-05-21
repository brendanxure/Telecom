import React from 'react'
import DashNavbar from '../Component/DashNavbar'
import { Helmet } from 'react-helmet-async'
import DashSidebar from '../Component/DashSidebar'
import BuyData from '../Component/BuyData'

const BuyDataPage = () => {
  return (
    <div className='full_container'>
       <Helmet defer={false}>
          <title>Telecom || Dashoard</title>
          <link rel="icon" href="assest/images/fevicon.png" type="assest/image/png" />
         {/* <!-- bootstrap css --> */}
         <link rel="stylesheet" href="assest/css/bootstrap.min.css" />
         {/* <!-- site css --> */}
         <link rel="stylesheet" href="assest/style.css" />
         {/* <!-- responsive css --> */}
         <link rel="stylesheet" href="assest/css/responsive.css" />
         {/* <!-- color css --> */}
         <link rel="stylesheet" href="assest/css/colors.css" />
         {/* <!-- select bootstrap --> */}
         <link rel="stylesheet" href="assest/css/bootstrap-select.css" />
         {/* <!-- scrollbar css --> */}
         <link rel="stylesheet" href="assest/css/perfect-scrollbar.css" />
         {/* <!-- custom css --> */}
         <link rel="stylesheet" href="assest/css/custom.css" />
       </Helmet>
        <div className='inner_conatiner'>
        <DashSidebar />
        <div id="content">
        <DashNavbar />
        <BuyData />
        </div>
        </div>

    </div>
  )
}

export default BuyDataPage