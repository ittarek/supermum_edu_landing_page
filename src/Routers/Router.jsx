import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorElemnt/ErrorPage";
import Home from "../page/home/Home";
import Layout from "../layout/Layout";



export const router = createBrowserRouter([
     {
          errorElement:<ErrorPage/>,
          path: "/",
          element: <Layout/>,
          children:[

               {
path: "/",
element: <Home/>
               }
          ]
     }
])