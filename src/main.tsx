import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeBr from "./pages/HomeBr.tsx"
import HomeEn from "./pages/HomeEn.tsx"
import RegisterBr from "./pages/RegisterBr.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/Pedroflix-Project/",
    element: <HomeBr />,
  },
  {
    path: "/Pedroflix-Project/en",
    element: <HomeEn />
  },
  {
    path: "/Pedroflix-Project/register-br",
    element: <RegisterBr />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
