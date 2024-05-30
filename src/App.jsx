import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './layout.scss'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Hot from './Component/Hotproperty/Hot'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Page/Layout/Layout'
import Home from './Page/Home/Home'
import List from './Page/List/Listpage'
import Singlepage from './Page/Singlepage/Singlepage'
import Listpage from './Page/List/Listpage'
import Profile from './Page/Profile/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[{
        path:"/",
        element:<Home/>
      },
    {
      path:"/list",
      element:<Listpage/>
    },
    {
      path:"/:id",
      element:<Singlepage/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ]
    },
   
  ]);

  return (
    <>
     
        <RouterProvider router={router}/>

    </>
  )
}

export default App
