import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function Layout() {
  return (
    <>
    <div className=' text-white flex flex-col  bg-[url(./assets/pattern5.png)] min-h-screen bg-center bg-contain bg-fixed '>
    <Navbar />
    <main className='w-full grow min-h-screen flex'>
    <Outlet/>
    </main>
    
    <Footer/>
    </div>
    </>
    
  )
}

export default Layout