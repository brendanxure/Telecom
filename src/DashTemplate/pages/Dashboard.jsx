import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faUser, faPeopleArrows, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { dashboardGrid } from '../../Data';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cards, setCards] = useState(dashboardGrid)

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8 w-[98%] ">

              {/* Left: Avatars */}
            <div className='min-w-[200px] px-4 py-4 shadow-lg mx-2 my-4 md:my-0 shadow-black/90 rounded-xl w-full'>
              <div> 
                <FontAwesomeIcon icon={faWallet} className='text-orange-500 text-6xl text-center w-full items-center my-2'/>
              </div>
              <div className='text-center text-xl my-2'>
                <p class="total_no">2500</p>
                <p class="head_couter">Wallet Balance</p>
              </div>
            </div>
            <div className='min-w-[200px] px-4 py-4 shadow-lg mx-2 my-4 md:my-0 shadow-black/90 rounded-xl w-full'>
              <div> 
              <FontAwesomeIcon icon={faUser} className='text-blue-500 text-6xl text-center w-full items-center my-2' />
              </div>
              <div className='text-center text-xl my-2'>
              <p class="total_no">123.50</p>
              <p class="head_couter">Referral Bonus</p>
              </div>
            </div>
            <div className='min-w-[200px] px-4 py-4 shadow-lg mx-2 my-4 md:my-0 shadow-black/90 rounded-xl w-full'>
              <div> 
              <FontAwesomeIcon icon={faPeopleArrows} className='text-green-700 text-6xl text-center w-full items-center my-2'/>
              </div>
              <div className='text-center text-xl my-2'>
              <p class="total_no">1,805</p>
              <p class="head_couter">My Total Referral</p>
              </div>
            </div>
            <div className='min-w-[200px] px-4 py-4 shadow-lg mx-2 my-4 md:my-0 shadow-black/90 rounded-xl w-full'>
              <div> 
              <FontAwesomeIcon icon={faCreditCard} className='text-red-700 text-6xl text-center w-full items-center my-2'/>
              </div>
              <div className='text-center text-xl my-2'>
              <p class="total_no">54</p>
              <p class="head_couter">Transactions</p>
              </div>
            </div>
            </div>

            {/* Account Details */}
            <div className="w-full bg-gray-400 py-6 px-4 text-lg">
              <h1 className='text-3xl font-bold my-4'>Account Number: 12334421</h1>
              <p>Account Name: rumegaexpress.com - brendanxure</p>
              <p>Bank Name:</p>
              <div className='mt-4 text-sm'>
                <h1>AUTOMATED BANK TRANSFER</h1>
                <p>Make transfer to this account to fund your wallet</p>
              </div>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-4 justify-between my-4 mx-auto'>
              {cards.map(card => 
              <div className='px-4 max-w-[90%] py-4 shadow-lg mx-2 my-4 border border-solid hover:scale-110 duration-150 ease-in shadow-black/90 rounded-xl w-full text-center'>
                <img src='' />
                <p>{card.title}</p>
              </div>  
              )}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;