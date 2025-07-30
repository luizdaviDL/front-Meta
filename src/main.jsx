import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import { Login } from './pages/login/Login.jsx'
import { User } from './pages/registration/User.js'
import { Supplier } from './pages/registration/supplier.jsx'
import { TypeLot } from './pages/registration/TypeLot.jsx'
import { Lineage } from './pages/registration/Lineage.jsx'
import { Temaplat } from './pages/Temaplat.jsx'

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
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
