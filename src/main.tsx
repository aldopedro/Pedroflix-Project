import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeBr from "./pages/HomeBr.tsx"
import HomeEn from "./pages/HomeEn.tsx"
import RegisterBr from "./pages/RegisterBr.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/Netflix-Project/",
    element: <HomeBr />
  },
  {
    path: "/Netflix-Project/en",
    element: <HomeEn />
  },
  {
    path: "/Netflix-Project/register-br",
    element: <RegisterBr />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
