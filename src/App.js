import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import Content from './components/Content'


const UserManagement = React.lazy(() => import('./views/userManagement'))
const Dashboard = React.lazy(() => import('./views/Dashboard'))
const ReportManagement = React.lazy(() => import('./views/reportManagement'))
const LiveStream = React.lazy(() => import('./views/LiveStream'))
const BannerManagement = React.lazy(() => import('./views/BannerManagement'))
const OfferManagement = React.lazy(() => import('./views/OfferManagement'))



// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) { setColorMode(theme) }
    if (isColorModeSet()) { return }
    setColorMode(storedTheme)
  }, [])

  return (
    <HashRouter>
      <Suspense fallback={<div className="pt-3 text-center"><CSpinner color="primary" variant="grow" /></div>}>
        <Routes>
          <Route path="/dashboard" name="dashboard" element={<Content><Dashboard /></Content>} />
          <Route path='/liveStream' name="charts" element={<Content><LiveStream /></Content>} />
          <Route path='/BannerManagement' element={<Content><BannerManagement /></Content>} /> 
          <Route path="/offerManagement" name="user_management" element={<Content><OfferManagement /></Content>} />
          <Route path="/userManagement" name="user_management" element={<Content><UserManagement /></Content>} />
          <Route path="/reportManagement" name="reportManagement" element={<Content><ReportManagement /></Content>} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
