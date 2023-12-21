import React from 'react'
import '../styles/global.scss'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <main className="mainContainer">
                {children}
            </main>
            <Footer />
        </div>
    )
}
