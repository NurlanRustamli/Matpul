import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'
import Footer from './footer'

function UserLayout() {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserLayout