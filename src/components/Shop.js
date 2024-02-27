import React from 'react'
import "./Shop.css"
import { chairData } from '../data/item'
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../utils/cartSlice'
const Shop = () => {
    const dispatch = useDispatch()
    console.log(chairData);

    const items = useSelector((store) => store.allCart.item)
    console.log(items);



    return (

        <div className='container shop'>
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-5'>
                {/* {
                    chairData.map((item, index) => {
                        return (
                            <div className='col'>
                                <div className='card h-100 shadow border-0 card_style element-with-gradient'>
                                    <img src={item.img} alt={item.name} className='card-img-fluid' />
                                    <div className='card-body'>
                                        <h3 className='text-center'>{item.name}</h3>
                                        <p className="fs-4 mb-5 text-center">${item.price}.00</p>
                                        <p className='text-center plus_icon'><i className="bi bi-plus-circle-fill"></i></p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                } */}
                {
                    items.map((item, index) => {
                        return (
                            <div className='col' key={index}>
                                <div className='card h-100 shadow border-0 card_style element-with-gradient'>
                                    <img src={item.img} alt={item.name} className='card-img-fluid' />
                                    <div className='card-body'>
                                        <h3 className='text-center'>{item.name}</h3>
                                        <p className="fs-4 mb-5 text-center">${item.price}.00</p>
                                        <p className='text-center plus_icon' onClick={() => dispatch(addToCart(item))}><i className="bi bi-plus-circle-fill"></i></p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop