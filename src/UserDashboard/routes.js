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
import Buy_Airtime from "./views/userviews/Buy_Airtime.js";
import Register from "./views/userviews/Register.js";
import Login from "./views/userviews/Login.js";
// import Tables from "./views/examples/Tables.js";
import Buy_Data from "./views/userviews/Buy_Data.js";
import Fund_Wallet from "./views/userviews/Fund_Wallet.js";
import Wallet_History from "./views/userviews/Wallet_History.js";

var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/buydata",
    name: "Buy Data",
    icon: "ni ni-planet text-blue",
    component: <Buy_Data />,
    layout: "/admin",
  },
  {
    path: "/buyairtime",
    name: "Buy Airtime",
    icon: "ni ni-mobile-button text-orange",
    component: <Buy_Airtime />,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  {
    path: "/tables",
    name: "Pay bills",
    icon: "ni ni-money-coins text-red",
    // component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Send bulk SMS",
    icon: "ni ni-email-83 text-pink",
    // component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Report",
    icon: "ni ni-support-16 text-teal",
    // component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/user-profil",
    name: "Referer code",
    icon: "ni ni-single-02 text-yellow",
    // component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/fundwallet",
    name: "Fund Wallet",
    icon: "ni ni-credit-card text-blue",
    component: <Fund_Wallet />,
    layout: "/admin",
  },
  
  {
    path: "/wallethistory",
    name: "Wallet History",
    icon: "fas fa-chart-pie text-orange",
    component: <Wallet_History />,
    layout: "/admin",
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
