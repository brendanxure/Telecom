import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Dashboard from '../DashTemplate/pages/Dashboard'

import '../DashTemplate/charts/ChartjsConfig'
import '../DashTemplate/css/style.css'


const DashboardPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);
  return (
    <div>
       <Dashboard />
    </div>
  )
}

export default DashboardPage