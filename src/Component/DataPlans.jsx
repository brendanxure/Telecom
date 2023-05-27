import React, { useState } from 'react'
import MTNLOGO from '../Logos/New-mtn-logo.jpg';
import GLOLOGO from '../Logos/Glo-Logo.png'
import NINEMOBILELOGO from '../Logos/9mobile-Logo.svg'
import AIRTELLOGO from '../Logos/Airtel-logo.png'
import { AIRTELDATA, GLODATA, MTNDATA, NINEMOBILEDATA } from '../Data';
import {HiOutlineShoppingCart} from 'react-icons/hi'

const DataPlans = () => {
    const [mtnDataPlans, setMtnDataPlans] = useState(MTNDATA)
    const [gloDataPlans, setGloDataPlans] = useState(GLODATA)
    const [airtelDataPlans, setAirtelDataPlans] = useState(AIRTELDATA)
    const [nineMobileData, setNineMobileData] = useState(NINEMOBILEDATA)
  return (
    <div id='DataPlans' className='w-100 mx-auto'>
    <div className='w-100 px-4 mx-auto'>
          {/* Title */}
     <h1 className='text-center mt-5' style={{color: "#1171ef", fontSize: "50px"}}>Affordable Data Plans And Prices</h1>
     {/* Data Plans Div */}
     <div className='dataplandiv d-flex w-100 mx-auto justify-content-center p-4 my-2 flex-xl-nowrap flex-wrap'>
         {/* MTN DIV */}
         <div className='col-12 col-md-8 col-xl-3 my-3 mx-2 py-5' style={{backgroundColor: "rgb(229 231 235)", height: "fit-content"}}>
             {/* MTN LOGO */}
             <div className='text-center'><img className='' src={MTNLOGO} style={{width: "80px"}} alt="" />
             <h4>MTN DATA</h4>
             </div>
             {/* MTN DATA PLANS */}
             <div className='text-center my-5'>
                 {mtnDataPlans?.map((data, id) => 
                 <div className='d-flex my-3 align-items-center text-center w-100 justify-content-between border-2 border-bottom border-dark' style={{minWidth: "275px"}}>
                     <p className='col-4'>{data.Data}</p>
                     <p className='col-4'>{data.Price}</p>
                     <p className='col-4'>{data.Duration}</p>
                 </div>
                 )}
             </div>
             <div className='d-flex justify-content-center align-items-center  mx-auto w-50 py-2' style={{cursor: "pointer", background:"#1171ef", color: "white"}}><HiOutlineShoppingCart size={25} /><p className='m-0 mx-1' style={{fontSize: '20px'}}>Buy now</p></div>
         </div>
         {/* GLO DIV */}
         <div className='col-12 col-md-8 col-xl-3 my-3 mx-2 py-5' style={{backgroundColor: "rgb(229 231 235)", height: "fit-content"}}>
         {/* GLO LOGO */}
        <div className='text-center'>
        <img src={GLOLOGO} style={{width:"80px"}} alt="" />
         <h4>GLO DATA</h4>
        </div>
         {/* GLO DATA PLANS */}
         <div className='text-center my-5'>
             {gloDataPlans?.map((data, id)=> 
             <div className='d-flex my-3 align-items-center text-center w-100 justify-content-between border-2 border-bottom border-dark' style={{minWidth: "275px"}}>
                 <p className='col-4'>{data.Data}</p>
                 <p className='col-4'>{data.Price}</p>
                 <p className='col-4'>{data.Duration}</p>
             </div>
             )}
         </div>
         <div className='d-flex justify-content-center align-items-center mx-auto w-50 py-2' style={{cursor: "pointer", background:"#1171ef", color: "white"}}><HiOutlineShoppingCart size={25} /><p className='m-0 mx-1' style={{fontSize: '20px'}}>Buy now</p></div>
         </div>
         {/* AIRTEL DIV */}
         <div className='col-12 col-md-8 col-xl-3 my-3 mx-2 py-5' style={{backgroundColor: "rgb(229 231 235)", height: "fit-content"}}>
             {/* AIRTEL LOGO */}
             <div className='text-center'>
             <img src={AIRTELLOGO} style={{width: "80px"}} alt="" />
             <h4>AIRTEL DATA</h4>
             </div>
             {/* AIRTEL DATA PLANS */}
             <div className='text-center my-5'>
                 {airtelDataPlans?.map((data, id)=>
                 <div className='d-flex my-3 align-items-center text-center justify-content-between border-2 border-bottom border-dark' style={{minWidth: "275px"}}>
                     <p className='col-4'>{data.Data}</p>
                     <p className='col-4'>{data.Price}</p>
                     <p className='col-4'>{data.Duration}</p>
                 </div>
                 )}
             </div>
             <div className='d-flex justify-content-center align-items-center  mx-auto w-50 py-2' style={{cursor: "pointer", background:"#1171ef", color: "white"}}><HiOutlineShoppingCart size={25} /><p className='m-0 mx-1' style={{fontSize: '20px'}}>Buy now</p></div>
         </div>
         {/* 9mobile DIV */}
         <div className='col-12 col-md-8 col-xl-3 my-3 mx-2 py-5' style={{backgroundColor: "rgb(229 231 235)", height: "fit-content"}}>
             {/* 9mobile LOGO */}
             <div className='text-center'>
             <img src={NINEMOBILELOGO} style={{width: "80px"}} alt="" />
             <h4>9MOBILE DATA</h4>
             </div>
             {/*9MOBILE  DATA PLANS */}
             <div className='text-center my-5'>
                 {nineMobileData.map((data, id)=> 
                 <div id={id} className='d-flex my-3 align-items-center justify-content-between border-2 border-bottom border-dark' style={{minWidth: "275px"}}>
                     <p className='col-3'>{data.Data}</p>
                     <p className='col-3'>{data.Price}</p>
                     <p className='col-5'>{data.Duration}</p>
                 </div>
                 )}
             </div>
             <div className='d-flex justify-content-center align-items-center mx-auto w-50 py-2' style={{cursor: "pointer", background:"#1171ef", color: "white"}}><HiOutlineShoppingCart size={25} /><p className='m-0 mx-1' style={{fontSize: '20px'}}>Buy now</p></div>
         </div>
     </div>
    </div>
 </div>
  )
}

export default DataPlans