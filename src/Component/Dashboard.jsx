import React from 'react'
import { Helmet } from 'react-helmet-async'
import DashNavbar from './DashNavbar'
import DashSidebar from './DashSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faUser, faPeopleArrows, faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
  return (
    <div class="full_container">
       <Helmet defer={false}>
          <title>Telecom || Dashoard</title>
       </Helmet>
         <div class="inner_container">
            {/* <!-- Sidebar  --> */}
           <DashSidebar />
            {/* <!-- end sidebar -->
            <!-- right content --> */}
            <div id="content">
               {/* <!-- topbar --> */}
            <DashNavbar />
               {/* <!-- end topbar -->
               <!-- dashboard inner --> */}
               <div class="midde_cont">
                  <div class="container-fluid">
                     <div class="row column_title">
                        <div class="col-md-12">
                           <div class="page_title items-center flex justify-content-between">
                              <h2>Dashboard</h2>
                              <div className='bg-[#ff5722] text-white px-4 py-2'>Fund Wallet</div>
                           </div>
                        </div>
                     </div>
                     <div class="row column1">
                        <div class="col-md-6 col-lg-3">
                           <div class="full counter_section margin_bottom_30">
                              <div class="couter_icon">
                                 <div> 
                                    <FontAwesomeIcon icon={faWallet} className='text-orange-500 text-6xl text-center w-full items-center my-2'/>
                                 </div>
                              </div>
                              <div class="counter_no">
                                 <div>
                                    <p class="total_no">2500</p>
                                    <p class="head_couter">Wallet Balance</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                           <div class="full counter_section margin_bottom_30">
                              <div class="couter_icon">
                                 <div> 
                                    <FontAwesomeIcon icon={faUser} className='text-blue-500 text-6xl text-center w-full items-center my-2' />
                                 </div>
                              </div>
                              <div class="counter_no">
                                 <div>
                                    <p class="total_no">123.50</p>
                                    <p class="head_couter">Referral Bonus</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                           <div class="full counter_section margin_bottom_30">
                              <div class="couter_icon">
                                 <div> 
                                    <FontAwesomeIcon icon={faPeopleArrows} className='text-green-700 text-6xl text-center w-full items-center my-2'/>
                                 </div>
                              </div>
                              <div class="counter_no">
                                 <div>
                                    <p class="total_no">1,805</p>
                                    <p class="head_couter">My Total Referral</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                           <div class="full counter_section margin_bottom_30">
                              <div class="couter_icon">
                                 <div> 
                                    <FontAwesomeIcon icon={faCreditCard} className='text-red-700 text-6xl text-center w-full items-center my-2'/>
                                 </div>
                              </div>
                              <div class="counter_no">
                                 <div>
                                    <p class="total_no">54</p>
                                    <p class="head_couter">Transactions</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     
                     
                        
            </div>          
            </div>      
            </div>
         </div>
         
      </div>
  )
}

export default Dashboard