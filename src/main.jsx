import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import { Login } from './pages/login/Login.jsx'
import { User } from './pages/user/User.js'
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
        path: "cadastro",        // Default child when accessing /main
        element: <User />,
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
