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
/*eslint-disable*/
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import './Sidebar.css'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/Auth/AuthSlice";
import { setDataTransactionNetwork } from "../../../features/DataTransaction/DataTransactionSlice";



var ps;

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const {user} = useSelector(getUser)
  //state for wallet links
  const [walletLinksOpen, setWalletLinksOpen] = useState(false)
  const [reportLinksOpen, setReportLinksOpen] = useState(false)
  const [dataTransLinksOpen, setDataTransLinksOpen] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  //report onClick handler
  const reportOnclick = () => {
    setReportLinksOpen(!reportLinksOpen)
    setDataTransLinksOpen(false)
  }
  // creates the links that appear in the left menu / Sidebar
  
  const createUserLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.path === '/' || prop.path === "/buy-data") {
        return (
          <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
        )}
    });
  };

  const createAdminLinks = (routes) => {
    return routes.map((prop, key)=> {
      if (prop.path === '/' || prop.path === '/data-plan' || prop.path === '/wallet-histories' || prop.path === '/all-payments' || prop.path === '/data-transactions') {
        return (
          <NavItem key={key}>
            <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        )
      }
    })
  }

  const createUserWalletLinks = (routes) => {
    const walletlinks = routes.filter((eachfilter, key)=> {
      if (eachfilter.path === '/fund-wallet' || eachfilter.path === '/wallet-history') {
        return eachfilter
      }
    })
    return (
      <NavItem>
        <NavLink style={{cursor: 'pointer'}} onClick={()=> setWalletLinksOpen(!walletLinksOpen)}><i className="fas fa-wallet text-danger" />Wallet{walletLinksOpen? <i className="fas fa-angle-down text-center"/> :<i className="fas fa-angle-right text-center" />}</NavLink>
        {walletlinks?.map((eachWalletLink)=> 
        <div className="walletLinksDiv bg-gradient-info">
          <NavLink className={walletLinksOpen ? "walletLinks" : "noWalletLinks"}
          to={eachWalletLink.layout + eachWalletLink.path} 
          tag={NavLinkRRD} 
          onClick={closeCollapse}>
          <i className={eachWalletLink.icon} />
          {eachWalletLink.name}
        </NavLink>
        </div>
        )}
      </NavItem>
    )
  }

  const createUserReportLinks = (routes) => {
    const reportLinks = routes?.filter((eachfilter, key)=> {
      if(eachfilter.path === '/user-payments') {
        return eachfilter
      }
    })
      const dataTransactionLinks = routes?.filter((eachfilter, key)=> {
        if(eachfilter?.path === '/user-glo-transactions' || eachfilter?.path === '/user-mtn-transactions'){
          return eachfilter
        }
      })
    return (
      <NavItem>
        <NavLink style={{cursor: 'pointer'}} onClick={reportOnclick}><i className="ni ni-support-16 text-teal" /> Report {reportLinksOpen ? <i className="fas fa-angle-down text-center"/> :<i className="fas fa-angle-right text-center" />}</NavLink>
        <div className="walletLinksDiv bg-gradient-info">
        <NavLink style={{cursor: 'pointer'}} className={reportLinksOpen ? "walletLinks" : "noWalletLinks"}  onClick={()=> setDataTransLinksOpen(!dataTransLinksOpen)}><i className="fas fa-arrows-rotate text-white" /> Data Transactions {dataTransLinksOpen ? <i className="fas fa-angle-down text-center"/> :<i className="fas fa-angle-right text-center" />}</NavLink>
        </div>
        {dataTransactionLinks?.map((eachTransactionLink)=>
        <div className="dataTransLinks">
          <NavLink className={dataTransLinksOpen ? "walletLinks" : "noWalletLinks"}
          to={eachTransactionLink?.layout + eachTransactionLink?.path}
          tag={NavLinkRRD}
          // tag={NavLinkRRD ? dispatch(setDataTransactionNetwork(eachTransactionLink?.path)) : dispatch(setDataTransactionNetwork(''))}
          onClick={()=> {
            dispatch(setDataTransactionNetwork(eachTransactionLink?.path)), 
            setCollapseOpen(false)
            }}>
            <img className='' src={eachTransactionLink?.icon} style={{width: "20px", marginRight: "10px"}} alt="" />
            {eachTransactionLink?.name}
          </NavLink>
        </div>
        )}
        {reportLinks?.map((eachReportLink)=>
        <div className="walletLinksDiv bg-gradient-info">
          <NavLink className={reportLinksOpen ? "walletLinks" : "noWalletLinks"}
          to={eachReportLink.layout + eachReportLink.path}
          tag={NavLinkRRD}
          onClick={closeCollapse}>
            <i className={eachReportLink?.icon} />
            {eachReportLink?.name}
          </NavLink>
        </div>
        )}
      </NavItem>
    )
  }

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            {/* <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            /> */}
            <h1>TELECOM</h1>
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {/* {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )} */}
                  <h1>Telecom</h1>
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{!user?.isAdmin && createUserLinks(routes)}</Nav>
          <Nav navbar>{!user?.isAdmin && createUserWalletLinks(routes)}</Nav>
          <Nav navbar>{!user?.isAdmin && createUserReportLinks(routes)}</Nav>
          <Nav navbar>{user?.isAdmin && createAdminLinks(routes)}</Nav>
          {/* <Nav>
            <NavItem>
            <NavLink to='/auth/login' onClick={closeCollapse} >Login</NavLink>n
            </NavItem>
          </Nav> */}
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          {/* <h6 className="navbar-heading text-muted">Documentation</h6> */}
          {/* Navigation */}
          {/* <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship" />
                Getting started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                <i className="ni ni-palette" />
                Foundation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                <i className="ni ni-ui-04" />
                Components
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="mb-md-3" navbar>
            <NavItem className="active-pro active">
              <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship" />
                Upgrade to PRO
              </NavLink>
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
