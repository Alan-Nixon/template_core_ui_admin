import React from 'react'

const ReportManagement = React.lazy(() => import('./views/reportManagement'))
const Buttons = React.lazy(() => import('./views/Buttons'))
const Charts = React.lazy(() => import('./views/Charts'))
const Dashboard = React.lazy(() => import('./views/Dashboard'))
const FormControl = React.lazy(() => import('./views/FormControl'))
const CoreUIIcons = React.lazy(() => import('./views/CoreUIIcons'))
const UserManagement = React.lazy(() => import('./views/userManagement'))
const Widgets = React.lazy(() => import('./views/Widgets'))

 
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/userManagement', name: 'UserManagement', element: UserManagement, exact: true },
  { path: '/reportManagement', name: 'Base', element: ReportManagement, exact: true },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes