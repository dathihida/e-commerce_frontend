import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import Contact from './contact'

const Rout = ({shop, Filter, allcateFilter, addtoCart, cart, setcart}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home addtoCart={addtoCart}/>}/>
        <Route path='cart' element={<Cart cart={cart} setcart={setcart} />}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcateFilter={allcateFilter} addtoCart={addtoCart} />}/>
        <Route path='contact' element={<Contact  />}/>
      </Routes>
    </>
  )
}

export default Rout
