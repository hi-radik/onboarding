import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Phone from './routes/Phone'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Phone/>,
  },
  // {
  //   path:"signin",
  //   element:<Phone/>
  // }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
