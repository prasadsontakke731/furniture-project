import React from 'react'
import "./Explore.css"
import nordicImg from "../data/images/nordic1.png"
import ecoImg from "../data/images/nordic4.png"
import krusoImg from "../data/images/kruzo1.png"
import { useNavigate } from "react-router-dom"
const Explore = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/shop")
    }
    return (
        <div className='container-fluid explore'>
            <div className="row">
                <div className="col-lg-3 col-md-6 explore-txt">
                    <h3>Crafted with excellent material.</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada.
                        Nullam ac aliquet velit. Aliquam vulputate velit
                        imperdiet dolor tempor tristique.</p>

                    <button onClick={handleClick}>Explore</button>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img src={nordicImg} alt="" className='chair_img' />
                    <h4>Nordic Chair</h4>
                    <h5>$50.00</h5>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img src={krusoImg} alt="" className='chair_img' />
                    <h4>Nordic Chair</h4>
                    <h5>$50.00</h5>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <img src={ecoImg} alt="" className='chair_img' />
                    <h4>Nordic Chair</h4>
                    <h5>$50.00</h5>
                </div>
            </div>

        </div>
    )
}

export default Explore