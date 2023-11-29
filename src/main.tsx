import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.tsx"
import HomeEn from "./pages/HomeEn.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/net-project",
    element: <Home />
  },
  {
    path:"/net-project/en",
    element: <HomeEn />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
