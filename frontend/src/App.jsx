import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'


const App = () => {
 const [showLogin,setShowLogin] =useState(false)

  return (
    <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>


  )
}

export default App
