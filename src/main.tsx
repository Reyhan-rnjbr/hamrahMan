import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import "./assets/Fonts/fontiran.css"
import './i 18n';
import Login from './pages/Login';
import Asli from './pages/Asli';
import Otp from './pages/Otp';
import Main from './pages/Main';
import Charge from './pages/Charge';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/asli",
    element: <Asli/>
  },
  {
    path:"/otp",
    element: <Otp/>
  },
  {
    path: "/main",
    element: <Main/>
  },
 {
  path: "/charge",
  element:<Charge/>
 }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
