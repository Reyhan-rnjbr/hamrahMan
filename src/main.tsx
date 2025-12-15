import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import "./assets/Fonts/fontiran.css"
import './i18n';
import Login from './pages/Login';
import Asli from './pages/Asli';
import Otp from './pages/Otp';
import Main from './pages/Main';
import Charge from './pages/Charge';
import TransferCredit from './pages/TransferCredit';
import Services from './pages/Services';
import Wallet from './pages/Wallet';
import Boxes from './pages/Boxes';



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
 },
 {
  path: "/transferCredit",
  element:<TransferCredit/>
 },
 {
  path: "/services",
  element:<Services/>
 },
 {
  path: "/wallet",
  element:<Wallet/>
 },
 {
  path: "/Boxes",
  element:<Boxes/>
 }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
