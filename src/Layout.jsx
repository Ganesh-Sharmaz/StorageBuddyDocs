import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <div className=' text-white  bg-[url(./assets/pattern5.png)] min-h-screen bg-center bg-contain bg-fixed'>
    <Navbar />
    <Outlet/>
    </div>
    </>
    
  )
}

export default Layout