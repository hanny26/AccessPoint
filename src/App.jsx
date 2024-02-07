import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {browserRouter,Routes, Router} from 'react-router-dom';
import shop from './Pages/Shop';
import shop from './Pages/ShopCategory';


function App() {
 
  return (
    <>
    <div>
      <browserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory/>} />
      <Route path='/womens' element={<ShopCategory/>} />
      <Route path='/kids' element={<ShopCategory/>} />
      
      </Routes>
      </browserRouter>
    </div>
    </>
  )
}

export default App
