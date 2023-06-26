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
import React, { useEffect } from "react";
import { useLocation, Route, Routes, Navigate, useNavigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/Sidebar";



// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/argon-dashboard-react.scss";
import "../assets/plugins/nucleo/css/nucleo.css"
import "../assets/scss/argon-dashboard-react.scss"
import "@fortawesome/fontawesome-free/css/all.min.css"


import routes from "../routes";
import { useSelector } from "react-redux";
import { getUser } from "../../features/Auth/AuthSlice";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  const {user} = useSelector(getUser)
  const navigate = useNavigate()

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  useEffect(()=> {
    if(!user) {
      navigate('/')
    }
  }, [user])

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/user/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
