import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
          
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />   
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
