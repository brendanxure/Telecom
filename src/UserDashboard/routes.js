/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index.js";
import Profile from "./views/userviews/Profile.js";
import Register from "./views/userviews/Register.js";
import Login from "./views/userviews/Login.js";
import Buy_Data from "./views/userviews/Buy_Data.js";
import Fund_Wallet from "./views/userviews/Fund_Wallet.js";
import Wallet_History from "./views/userviews/Wallet_History.js";
import Data_Plan from "./views/adminviews/Data_Plan.js";
import Wallet_Histories from "./views/adminviews/Wallet_Histories.js";
import All_Payments from "./views/adminviews/All_Payments.js";
import MTNLOGO from '../Logos/New-mtn-logo.jpg';
import GLOLOGO from '../Logos/Glo-Logo.png'
import Data_Transactions from "./views/userviews/Data_Transactions.js";


var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/user",
  },
  {
    path: "/all-users",
    name: "Users",
    icon: "",
    component: "",
    layout: "/user",
  },
  {
    path: "/buy-data",
    name: "Buy Data",
    icon: "fas fa-solid fa-signal text-blue",
    component: <Buy_Data />,
    layout: "/user",
  },
  {
    path: "/wallet-transactions",
    name: "Wallet Transactions",
    icon: "ni ni-mobile-button text-orange",
    // component: <Wallet_Histories />,
    layout: "/user",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  {
    path: "/all-payments",
    name: "All Payments",
    icon: "ni ni-money-coins text-red",
    component: <All_Payments />,
    layout: "/user",
  },
  // {
  //   path: "/data-transactions",
  //   name: "Data Transactions",
  //   icon: "ni ni-email-83 text-pink",
  //   component: <Data_Transactions />,
  //   layout: "/user",
  // },
  // {
  //   path: "/user-report",
  //   name: "Report",
  //   icon: "ni ni-support-16 text-teal",
  //   // component: <Profile />,
  //   layout: "/user",
  // },
  {
    path: "/fund-wallet",
    name: "Fund Wallet",
    icon: "ni ni-credit-card text-blue",
    component: <Fund_Wallet />,
    layout: "/user",
  },
  
  {
    path: "/wallet-history",
    name: "Wallet History",
    icon: "fas fa-chart-pie text-orange",
    component: <Wallet_History />,
    layout: "/user",
  },
  {
    path: "/data-plan",
    name: "Data Plan",
    icon: "fas fa-chart-pie text-green",
    component: <Data_Plan />,
    layout: "/user"
  },
  {
    path: "/user-glo-transactions",
    name: "Glo",
    icon: GLOLOGO,
    component: <Data_Transactions />,
    layout: "/user",
    
  },
  {
    path: "/user-mtn-transactions",
    name: "MTN",
    icon: MTNLOGO,
    component: <Data_Transactions />,
    layout: "/user",
  },
  {
    path: "/user-payments",
    name: "Payments",
    icon: "fas fa-money-check text-orange",
    // component: <Profile />,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
