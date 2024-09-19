import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './css/Cart.css'
import { useNavigate } from 'react-router-dom';


function Checkout() {
    const check = useSelector(state => state.cart)
    const totalPrice = useSelector((state) => state.totalPrice);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate =useNavigate()
    const orderComplete=()=>{
        if (!name || !number || !email || !address) {
            alert('Please fill in all fields');
            return;
        }
        alert('Order Placed Successfully')
        navigate('/')
    }
    return (
        <div className='container py-5 my-3 mx-auto '>


            <h2 className='fw-bold text-success'>Checkout</h2>
            <form >
                <div className="row">
                    <div className="col-lg-7">
                        <div>
                            <div className=' my-2'>
                                <div className='w-100 m-1'>
                                    <label htmlFor="name" className='fw-bold'>Your Name: </label> <br />
                                    <input className='w-100 rounded p-1' type="text" name="Name" id="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required />
                                </div>
                                <div className='w-100 m-1'>
                                    <label htmlFor="num" className='fw-bold'>Your Number: </label> <br />
                                    <input className='w-100 rounded p-1' type="number" name="Name" id="num" onChange={(e) => setNumber(e.target.value)} placeholder='Enter Your Number' required />
                                </div>
                            </div>

                            <div className=' my-2'>
                                <div className='w-100 m-1'>
                                    <label htmlFor="mail" className='fw-bold'>Your Email: </label> <br />
                                    <input className='w-100 rounded p-1' type="text" name="Name" id="mail" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-Mail' required />
                                </div>
                                <div className='w-100 m-1 selet'>
                                    <label htmlFor="pay" className='fw-bold'>Payment Method: </label> <br />
                                    <select name="" id="pay" className='w-100 rounded' required>
                                        <option value="Cash On Delivery">Cash On Delivery</option>
                                        <option value="Credit">Credit Card</option>
                                        <option value="Phone pay">Fone Pay</option>
                                        <option value="Khalti">Khalti</option>
                                        <option value="E-Sewa">E-Sewa</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className='w-100 m-1'>
                                    <label htmlFor="add" className='fw-bold'>Your Address: </label> <br />
                                    <input className='w-100 rounded p-1' type="text" name="Name" id="add"  onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className='my-4 border '>
                            <div className='border-bottom'>
                                {check.map((item) => (
                                    <div className='d-flex justify-content-between px-4 py-2 border border-bottom'>
                                        <div className='d-flex gap-3 '>
                                            <img width={100} src={item.img} alt="" />
                                            <div>
                                                <p className='fw-bold mb-1 mt-2'>{item.title}</p>
                                                <p className='text-secondary m-0'>Rs. {item.price} x {item.quantity}</p>
                                            </div>
                                        </div>

                                        <div className='text my-2'>
                                            <p>Rs. {item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='p-4'>
                                <div className='d-flex align-items-center justify-content-between mx-1 fw-bold'>
                                    <p className=''>Total Price: </p>
                                    <p>Rs. {totalPrice}</p>
                                </div>
                                <button className='w-100 btn bg-success text-white p-2' type='button' onClick={()=>orderComplete()}>ORDER NOW</button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Checkout
