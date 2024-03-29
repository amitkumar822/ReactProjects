import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Card from './components/Card'
import { items } from './data/Data'




function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])


  return (
    <>
    <Router>
      <Navbar cart={cart} setData={setData}/>
         <Routes>
            <Route path='/' element={<Product items={data} cart={cart} setCart={setCart}/>}/>
            <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>}/>
            <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart}/>}/>
            <Route path='/cart' element={<Card cart={cart} setCart={setCart}/>}/>
         </Routes>
      
    </Router>
    </>
  )
}

export default App

