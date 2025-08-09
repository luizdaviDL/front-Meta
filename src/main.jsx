import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import { Login } from './pages/AccessControl/Login.jsx'
import { User } from './pages/registration/User.js'
import { Supplier } from './pages/registration/supplier.jsx'
import { TypeLot } from './pages/registration/TypeLot.jsx'
import { Lineage } from './pages/registration/Lineage.jsx'
import { Temaplat } from './pages/Temaplat.jsx'
import { TypeFeed } from './pages/registration/TypeFeed.jsx'
import { Vaccine } from './pages/registration/TypeVaccine.jsx'
import { Event } from './pages/registration/Event.jsx'
import { Integration } from './pages/registration/Integration.jsx'

const router = createBrowserRouter([
  {
    path: "/login",           // Página de login
    element: <Login />,
  },
  {
    path: "/",       // Página principal
    element: <Temaplat />,
    children: [
      {
        path: "cadastroUsuario",        // Default child when accessing /main
        element: <User />,
      },
      {
        path: "cadastroFornecedor",        // Default child when accessing /main
        element: <Supplier />,
      },
      {
        path: "cadastroLotea",        // Default child when accessing /main
        element: <TypeLot />,
      },
      {
        path: "cadastroLinhagem",        // Default child when accessing /main
        element: <Lineage />,
      },
      {
        path: "feed",        // Default child when accessing /main
        element: <TypeFeed />,
      },      
      {
        path: "vaccine",        // Default child when accessing /main
        element: <Vaccine />,
      },      
      {
        path: "event",        // Default child when accessing /main
        element: <Event />,
      },      
      {
        path: "integration",        // Default child when accessing /main
        element: <Integration />,
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
