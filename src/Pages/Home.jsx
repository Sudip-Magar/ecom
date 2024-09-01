import React from 'react'
import Banneer from './HomePage/Banneer'
import Product from './HomePage/Product'


function Home() {
  return (
    <div>
      <Banneer/>
      <Product dd='Best Offer Books'/>
      <Product dd='New Arrivals'/>
      <Product dd='Most Sales Books'/>
    </div>
  )
}

export default Home
