import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <footer class="footer bg-dark text-light fs-3 mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h3 className='my-3'>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                        </div>
                        <div class="col-md-4">
                            <h3 className='my-3'>Quick Links</h3>
                            <ul class="list-unstyled">
                                <li ><Link style={{ listStyle: "none" }} to={"/"}>Home</Link></li>
                                <li><Link to={"/shop"}>Shop</Link></li>
                                <li><Link to={"/cart"}>Cart</Link></li>

                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3 className='my-3'>Contact Us</h3>

                            <strong>Address:</strong><br />
                            123 Main Street, City, Country<br />
                            <strong>Phone:</strong> (123) 456-7890<br />
                            <strong>Email:</strong> info@example.com

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <hr class="light" />
                            <p>&copy; 2024 Your Furniture Store. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer