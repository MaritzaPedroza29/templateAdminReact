import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Inicio= React.lazy(()=> import('../views/pages/Inicio'))
const Usuario= React.lazy(()=> import('../views/pages/usuarios'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/inicio', name:'Inicio', element: Inicio},
  { path: '/usuario', name: 'Usuario', element: Usuario },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
