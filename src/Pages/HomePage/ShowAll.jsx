import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../../Data/Data"; // Assuming Data is your product data

function ShowAll() {
  const { category } = useParams(); // Get the category from the URL

  // Filter products based on the category
  const filteredData = Data.filter((product) => product.off === category);

  return (
    <div className="container my-5">
      <h2>{category} Products</h2>
      <div className="row">
        {filteredData.map((product) => (
          <div className="col-lg-2 col-md-4 col-6 data-image my-3" key={product.id}>
          <Link
            to={`/detail/${product.id}`}
            className="text-decoration-none text-dark"
          >
            <div className="my-3 mx-1">
              <img className="w-100" src={product.img} alt="" />
              <h6 className="pt-3 mb-0 fw-bold">{product.title}</h6>
              <p className="p-0 mb-2 text-body-tertiary text">
                By {product.author}
              </p>
              <p className="fsize fw-bold">Rs. {product.disc}</p>
            </div>
          </Link>
          <button className="btn">ADD TO CART</button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAll;
