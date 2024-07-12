import React from 'react'
import './App.css'
import Article from './Article'
import Brand from './Brand'
import CTA from './CTA'
import Feature from './Feature'
import Navbar from './Navbar'
import Blog from './Blog'
import Features from './Features'
import Possibility from './Possibility'
import MyGpt from './MyGpt'
import Footer from './Footer'
import Header from './Header'


function App() {
  

  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <MyGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}  
    


export default App
