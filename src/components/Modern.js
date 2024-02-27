import React from 'react'
import "./Modern.css"
import Couch from "../Assets/images/couch.png"
import { Link } from 'react-router-dom'
function Modern() {
    return (
        <div className='.container-fluid'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row w-75 row_first">
                        <div className="col  ">
                            <h1 className='text-white fw-bold mt-2 '>Modern Interriar <br /> Design Studio</h1>
                            <p className='text-white mt-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <div className='buttons mt-5'>
                                <button className='b1'><Link to="/shop">Shop Now</Link></button>
                                <button className='b2'>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 imgs">
                    <img src={Couch} alt="images" />
                </div>
            </div>


        </div>
    )
}

export default Modern