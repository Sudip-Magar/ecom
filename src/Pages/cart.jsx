import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT, REMOVE_FROM_CART } from '../Redux/Reducer';
import './css/Cart.css'
import { useNavigate } from 'react-router-dom';



const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector((state) => state.totalPrice);
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch({ type: INCREMENT, payload: id });
    };

    const handleDecrement = (id) => {
        dispatch({ type: DECREMENT, payload: id });
    };
    const removeFromCart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    }

    const navigate = useNavigate()
    return (
        <div className="container py-4 my-3">
            <h2>Shopping Cart ({cart.length})</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="row">
                        <div className='col-lg-8 my-2 py-3 border-bottom'>
                            {cart.map((item) => (
                                <div>
                                    <div className='d-flex flex-column flex-lg-row justify-content-between'>
                                        <div className='d-flex gap-4'>
                                            <img width={100} src={item.img} alt="" />
                                            <div className=''>
                                                <div><h5>{item.title}</h5>
                                                    <p>By: {item.author}</p></div>
                                                <div className='d-flex align-items-center quantity'>
                                                    <button className='' onClick={() => handleDecrement(item.id)}>-</button>
                                                    <p className=''>{item.quantity}</p>
                                                    <button className='' onClick={() => handleIncrement(item.id)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-lg-end mt-4 mt-lg-0'>
                                            <p className='fw-bold'>Rs. {item.price}</p>
                                            <div className='remove'>
                                                <button onClick={()=>removeFromCart(item.id)} ><i className="fa-solid fa-trash"></i> Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-end fw-bold'>
                                        <p className='mt-4 mb-1'>Total Price: Rs.{item.price * item.quantity}</p></div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className='border border-3 p-4 checkout'>
                                <h4>Order Summary</h4>
                                <div className='d-flex justify-content-between mt-4 '>
                                    <span>Subtotal:</span>
                                    <span>Rs. {totalPrice}</span>
                                </div>
                                <button className='mt-5' onClick={() => navigate('/checkout')}>Procceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;