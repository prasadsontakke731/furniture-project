import React, { useEffect, useState } from 'react'
import "./Header.css"
import Modern from './Modern'
import { FaUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getCartTotal } from '../utils/cartSlice';

const Header = () => {
    const [hide, setHide] = useState(false)

    const dispatch = useDispatch()

    const { cart, totalQuantity } = useSelector((store) => store.allCart)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
        <>
            <div className='bg'>
                <nav className="navbar navbar-expand-lg fixed-top bg-black">
                    <div className="container-fluid">
                        <li className="nav-item">
                            <Link to="/">Furni...</Link>
                        </li>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto ul">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/service">Service</Link>
                                </li>
                                <Link to="/blog">
                                    <li className="nav-item">Blog</li>
                                </Link>
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to=""><FaUserCircle /></Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/cart"><LuShoppingCart /> <span className='crtcount'>{totalQuantity}</span></Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>
                {
                    <Link to="/"></Link> ? <Modern /> : ""


                }


            </div>
            <Outlet />

        </>
    )
}

export default Header