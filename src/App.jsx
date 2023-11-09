import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './compenents/NavBar'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
