import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="container py-4">
      <h1 className='my-3'>STORYSHELF</h1>
        <div className="row">
          <div className="col-lg-3 py-4">
          <h4 className='fw-bolder'>Physical Store</h4>
           
            
            <a href="" className='text-decoration-none text-dark'>
            <div className='d-flex align-items-center my-3'>
            <i className="fa-solid fa-location-dot fs-3"> </i> 
            <div className='mx-2'> <div> <strong>StoryShelf Book Store</strong></div>  <div>Baneshwor, ktm</div></div>
            </div>
            </a>
            <a href="" className='text-decoration-none text-dark'>
            <div className='d-flex align-items-center my-3'>
            <i className="fa-solid fa-location-dot fs-3"> </i> 
            <div className='mx-2'> <div> <strong>StoryShelf Book Store</strong></div>  <div>Teku, Kalimati</div></div>
            </div>
            </a>
            
            
          </div>

          <div className="col-lg-3 py-4">
          <h4 className='fw-bolder'>Quick Links</h4>
            <ul className='list-unstyled my-4'>
            <li className='my-2'><Link to="/about" className='text-decoration-none text-dark '>About Us</Link></li>
              <li className='my-2'><Link to="/shop" className='text-decoration-none text-dark '>Shop</Link></li>
              <li className='my-2'><Link to="/contact" className='text-decoration-none text-dark '>Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 py-4">
          <h4 className='fw-bolder'>Social Media</h4>
            <ul className='list-unstyled my-4'>
            <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-brands fa-facebook fs-4"></i> Facebook</a></li>
              <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-brands fa-instagram fs-4"></i> Instagram</a></li>
              <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-brands fa-tiktok fs-4"></i> Tiktok</a></li>
            </ul>
          </div>

          <div className="col-lg-3 py-4">
          <h4 className='fw-bolder'>Contact Info</h4>
            <ul className='list-unstyled my-4'>
            <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-solid fa-mobile"></i> 9825648720</a></li>
              <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-solid fa-phone"></i> 01-4146257</a></li>
              <li className='my-2'><a href="" className='text-decoration-none text-dark '><i className="fa-solid fa-envelope"></i> Sudeepmagar834@gmail.com</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
