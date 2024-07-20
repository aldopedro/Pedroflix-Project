import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeBr from "./pages/Home/homeBr.tsx"
import HomeEn from "./pages/Home/homeEn.tsx"
import RegisterBr from "./pages/Registration/registerBr.tsx"
import RegisterFormBr from './pages/Registration/registerFormBr.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RegisterEn from './pages/Registration/registerEn.tsx'
import RegisterFormEn from './pages/Registration/registerFormEn.tsx'

const router = createBrowserRouter([
  {
    path: "/Pedroflix-Project/",
    element: <HomeBr />,
  },
  {
    path: "/Pedroflix-Project/en",
    element: <HomeEn />,
  },
  {
    path: "/Pedroflix-Project/register-br",
    element: <RegisterBr />,
  },
  {
    path: "/Pedroflix-Project/register-br/regform",
    element: <RegisterFormBr />,
  },
  {
    path: "/Pedroflix-Project/register-en",
    element: <RegisterEn />
  },
  {
    path: "/Pedroflix-Project/register-en/regform",
    element: <RegisterFormEn />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
