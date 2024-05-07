import React from 'react'

const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Buttons = React.lazy(() => import('./views/buttons/Buttons'))
const Charts = React.lazy(() => import('./views/charts/Charts'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const FormControl = React.lazy(() => import('./views/forms/FormControl'))
const CoreUIIcons = React.lazy(() => import('./views/icons/CoreUIIcons'))
const Colors = React.lazy(() => import('./views/theme/Colors'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

 
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
