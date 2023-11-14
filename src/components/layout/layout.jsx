import React from 'react'
import Navbar from '../navbar/navbar'
import NavbarComponents from '../navbar'

function Layout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarComponents/>

      <div>{children}</div>

    </div>
  )
}

export default Layout