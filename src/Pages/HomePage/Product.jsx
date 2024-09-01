import React from "react";
import Data from "../../Data/Data";
import "../css/Hproduct.css";
import { Link, useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  let data = Data.filter((ab) => ab.off == props.dd);

  let addcart=()=>{
    setCart(cart+1)
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{props.dd}</h2>
            <Link
              className="text-decoration-none text-secondary btn-link"
              to={`/Detail/${props.dd}`}
            >
              Show All
            </Link>
          </div>

          {data.slice(0, 6).map((a) => (
            <div className="col-lg-2 col-md-4 col-6 data-image" key={a.id}>
              <Link to={`/detail/${a.id}`} className="text-decoration-none text-dark">
                <div className="my-3 mx-1">
                  <img className="w-100" src={a.img} alt="" />
                  <h6 className="pt-3 mb-0 fw-bold">{a.title}</h6>
                  <p className="p-0 mb-2 text-body-tertiary text">
                    By {a.author}
                  </p>
                  <p className="fsize fw-bold">Rs. {a.disc}</p>
                  </div>
              </Link>
                  <button className="btn" onClick={addcart}>ADD TO CART</button>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
