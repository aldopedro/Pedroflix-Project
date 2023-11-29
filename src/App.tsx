
import Home from "./pages/Home.tsx"
import HomeEn from "./pages/HomeEn.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:"/net-project",
    element: <Home />
  },
  {
    path:"/net-project/En",
    element: <HomeEn/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
