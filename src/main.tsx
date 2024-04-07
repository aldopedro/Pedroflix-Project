import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeBR from "./pages/HomeBR.tsx"
import HomeEn from "./pages/HomeEn.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/Netflix-Project/",
    element: <HomeBR />
  },
  {
    path:"/Netflix-Project/en",
    element: <HomeEn />
  },
  {
    path:"/Netflix-Project/test"
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
