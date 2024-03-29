import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function Layout() {
  return (
    <>
      <div className="container mx-auto w-[1117px]">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>    
    </>
  )
}

export default Layout