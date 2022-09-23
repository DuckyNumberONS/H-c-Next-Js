import React from 'react'
import Footer from './Footer'
import Navbar from './navbar'

export default function Layout({children}) {
  return (
    <div cl>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}
