import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home'
import Shop from '../components/Shop'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import About from '../components/About'
import CartPage from "../components/CartPage"
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Service />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            <Route path='cart' element={<CartPage />} />
        </Routes>
    )
}

export default AllRoutes