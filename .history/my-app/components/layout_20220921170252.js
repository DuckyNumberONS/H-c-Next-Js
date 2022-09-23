import React from 'react'
import Footer from './Footer'
import Navbar from './navbar'

export default function Layout({child}) {
  return (
    <div>
        <Navbar />

        <Footer />
    </div>
  )
}
