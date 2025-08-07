import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Product from './pages/Product'
import { Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collections' element={<Collections />}/>
        <Route path='/product/:productid' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
