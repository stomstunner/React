// so in this file we make the layout of the page ki hamra header aur footer same jagah pe hi rahe but hamra biche ka content change hote rahe 
import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'

function Layout() {
  return (
    <>
    <Header/>
    {/* so outlet ke jagaha pe ham dynamicically cizo ko laa sakte hai  */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout