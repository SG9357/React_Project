import React from "react";
import ReactDOM from "react-dom/client"
import Heading from "./components/Heading";
import Body from "./components/Body";
import About from "./components/About";
import Conatct from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Menu from "./components/ResMenu";


const App=()=>{
    return(
        <div className="App">
            <Heading/>
            <Outlet/>
        </div>
    )
}


const RouterApp=createBrowserRouter([
    {
       path:'/',
       element:<App/>,
       children:[
        {
            path:'/',
            element:<Body/> 
         },
        {
            path:'/about',
            element:<About/> 
         },
         {
            path:'/contact',
            element:<Conatct/> 
         },
         {
            path:"/resturant/:resid",
            element:<Menu/> 
         }
       ],
       errorElement:<Error/>
    }

])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RouterApp}/>);