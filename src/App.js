import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashborad from './admin/pages/Dashborad';
import Manage from './admin/pages/Manage';
import Home from "./user/pages/Home"
import Shop from "./user/pages/Shop"
import Blog from "./user/pages/Blog"
import { Navbar } from './atoms/Atoms';
import Footer from './user/pages/component/Footer';
import Cart from './user/pages/Cart';
import { ProductContext } from './Context/ProductContext';

const App = () => {

  const [cart, setcart] = useState([])
  const [dark, setdark] = useState(true)

  let role = "user";
  if (role == "admin") {
    return (
      <>
        <ProductContext.Provider value={{ cart, setcart }}>
          <Navbar element={role} />
          <Routes>
            <Route path='/dashborad' element={<Dashborad />} />
            <Route path='/manage' element={<Manage />} />
          </Routes>
        </ProductContext.Provider>
      </>
    )
  } else if (role == "user") {

    return (
      <>
        <ProductContext.Provider value={{ cart, setcart }}>
          <Navbar element={role} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </ProductContext.Provider>
      </>
    )
  }

}

export default App
