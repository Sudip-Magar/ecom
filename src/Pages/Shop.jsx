import React, { useState } from "react";
import Data from "../Data/Data";
import { Link } from "react-router-dom";
import './css/Shop.css'
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/Action";
function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track selected category
  const dispatch=useDispatch();
  const addcart=(product)=>{
    dispatch(addtocart(product))
  }

  // Get unique categories from the products data
  const categories = ['All', ...new Set(Data.map(product => product.cate))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? Data
    : Data.filter(product => product.cate === selectedCategory);

  // Function to handle category filtering
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="border p-3 m-3 shadow bg">
            <h5 className="border-bottom py-2 border-black">All Genres</h5>
            <div>
              {/* Render category buttons dynamically */}
              {categories.map(category => (
                <div key={category}>
                  <button className={`botton ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleCategoryClick(category)}>
                    {category}
                  </button>
                </div>
              ))}
            </div>
            </div>
          </div>
          
          <div className="col-lg-9">
            <div className="row">
              {filteredProducts.map((product) => (
                <div className="col-lg-3 col-md-4 col-6 data-image" key={product.id}>
                  <Link to={`/detail/${product.id}`} className="text-decoration-none text-dark">
                    <div className="my-3 mx-1">
                      <img className="w-100" src={product.img} alt="" />
                      <h6 className="pt-3 mb-0 fw-bold">{product.title}</h6>
                      <p className="p-0 mb-2 text-body-tertiary text">
                        By {product.author}
                      </p>
                      <p className="fsize fw-bold">Rs. {product.disc}</p>
                    </div>
                  </Link>
                  <button className="btn" onClick={()=>addcart(product)}>ADD TO CART</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
