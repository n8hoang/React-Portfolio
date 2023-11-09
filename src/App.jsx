import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './compenents/Navigation'
import Footer from './compenents/Footer'
import Header from './compenents/Header'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
