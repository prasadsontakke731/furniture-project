import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } from '../utils/cartSlice'
const CartPage = () => {
    const dispatch = useDispatch()

    const { cart, totalQuantity, totalPrice } = useSelector((store) => store.allCart)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    console.log(cart);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table bg-light">
                                <thead>
                                    <tr className='fw-bold'>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope='col'>delete</th>
                                        {/* <th scope="col">Total</th> */}
                                    </tr>
                                </thead>
                                {
                                    cart.map((data) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={data.img} alt="ProductImage" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
                                                            <h3 className=''>{data.name}</h3>
                                                        </div>
                                                    </td>
                                                    <td><h4 className='mt-4 text-primary fw-bold'>${data.price}</h4></td>
                                                    <td>
                                                        <div className="input-group mt-3" style={{ width: "130px" }}>
                                                            <button className="btn btn-outline-secondary fw-bold fs-3 text-bg-danger text-light" type="button" onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>
                                                            <input type="text" className="form-control text-center fw-bold" id="quantity1" value={data.quantity} />
                                                            <button className="btn btn-outline-secondary fw-bold fs-3 text-bg-success text-light" type="button" onClick={() => dispatch(increaseItemQuantity(data.id))} >+</button>
                                                        </div>
                                                    </td>
                                                    <td><i className="fa-solid fa-trash fs-1 mt-3 text-danger" onClick={() => dispatch(removeItem(data.id))}></i></td>

                                                </tr>

                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                            <div>
                                <h1 className='text-end me-4 fw-bold'>Total Price : <span className='text-success'>${totalPrice}</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage