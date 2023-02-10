import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phone from "./routes/Phone";
import ConfirmPhone from "./routes/ConfirmPhone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Phone />,
    // error:,
    // loading:
  },
  {
    path:'confirm',
    element:<ConfirmPhone/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
