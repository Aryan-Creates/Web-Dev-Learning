import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/user",
      element: <><Navbar/><User/></>
    }
  ])

  return (
    <>
    <div>Scooby Dooby Dooo</div>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
