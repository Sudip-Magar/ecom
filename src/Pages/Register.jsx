import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate=useNavigate();
  return (
    <div className='log-width border shadow-lg rounded my-5 mx-auto p-3'>
      <form action="" className=''>
      <div className='my-2'>
        <label htmlFor="text" className='py-1'>Name <span className='text-danger'>✶</span></label> <br />
        <input className='w-100 rounded p-1' type="text" placeholder='Enter Your Name' id='text' required/>
        </div>

        <div className='my-2'>
        <label htmlFor="email" className='py-1'>Email <span className='text-danger'>✶</span></label> <br />
        <input className='w-100 rounded p-1' type="email" placeholder='Enter Your Email' id='name' required/>
        </div>

        <div className=''>
            <label htmlFor="password" className='py-1'>Password <span className='text-danger'>✶</span></label> <br />
            <input className='w-100 rounded p-1' type="password" name="" id="password" placeholder='Enter Your Paasword' required />
        </div>
        <div className='mt-2'>
            <button className='w-100 my-2 bg-primary text-white border-0 rounded'>Login</button>
        </div>
        <div className='text-center my-2'>
            <p>Already have an account? <a href="" className='text-decoration-none' onClick={()=>navigate('/login')}>Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default Register
