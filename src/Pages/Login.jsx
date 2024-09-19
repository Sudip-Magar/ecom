import React from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  return (
    <div className='log-width border shadow-lg rounded my-5 mx-auto p-3'>
      <form action="" className=''>
        <div className='my-2'>
        <label htmlFor="email" className='py-1'>Email <span className='text-danger'>✶</span></label> <br />
        <input className='w-100 rounded p-1' type="text" placeholder='Enter Your Username' id='name' required/>
        </div>

        <div className=''>
            <label htmlFor="password" className='py-1'>Password <span className='text-danger'>✶</span></label> <br />
            <input className='w-100 rounded p-1' type="password" name="" id="password" placeholder='Enter Your Paasword' required />
        </div>
        <div className='mt-2'>
            <button className='w-100 my-2 bg-primary text-white border-0 rounded'>Login</button>
        </div>
        <div className='d-flex justify-content-between mb-3'>
           <div> <input type="radio" name='Remember Me'/> Remember me</div>
           <div className=''>
            <a href="" className='text-decoration-none'>Forgot Password?</a>
           </div>
        </div>
        <div className='text-center my-2'>
            <p>Don't have an account? <a href="" className='text-decoration-none' onClick={()=>navigate('/register')}>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
