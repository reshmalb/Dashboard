
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/home/Home";
import Products from "./Pages/product/Products";
import Single from "./Pages/single/Single";
import Customers from "./Pages/customers/Customers";
import New from "./Pages/new/New"
import Login from  "./Pages/login/Login"
import Register from "./Pages/register/Register"





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/customers",
    element: <Customers/>,
  },  {
    path: "/products",
    element: <Products/>,
  },
    {
    path: "/products/:productId/new",
    element: <New/>,
  },
  {
    path: "/customers/:customerId/new",
    element: <New/>,
  },
    {
    path: "/customers/:customerId",
    element: <Single/>,
  },
  {
    path: "/products/:productId",
    element: <Single/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },



]);



function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
