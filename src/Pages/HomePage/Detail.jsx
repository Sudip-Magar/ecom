import React, { useState } from "react";
import Data from "../../Data/Data";
import "../css/Hproduct.css";
import { Link, useParams } from "react-router-dom";
import Catdata from "../../Data/Catdata";

function Detail() {
  let { id } = useParams();
  let [qty, setQty] = useState(1);
  let [message, setMessage] = useState("");
  let det = Data.find((a) => a.id == id);

  let decrease = () => {
    if (qty == 1) {
      setQty(qty);
    } else setQty(qty - 1);
  };

  let increase = () => {
    if (det.stock == qty) {
      setMessage("Warning: Stock exceeds the limit!");
    } else {
      setQty(qty + 1);
    }
  };
  setTimeout(() => {
    setMessage("");
  }, 4000);

  return (
    <>
      <div>
        {message && <div className="message">{message}</div>}
        <div className="container my-5">
          <div className="my-4">
            <Link to="/" className="text-dark text-decoration-none">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/category/${det.cate}`}
              className="text-dark text-decoration-none"
            >
              {det.cate}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">{det.title}</span>
          </div>

          <div className="row detail">
            <div className="col-xl-2 col-md-3 order-1 text-center text-xl-start">
              <img className="" src={det.img} alt="" />
            </div>

            <div className="col-xl-7 col-md-12 mid-sec order-2 order-md-3  order-xl-2">
              <h2 className="fw-bold text-center text-xl-start">{det.title}</h2>
              <p className="text-center text-xl-start">By {det.author}</p>
              <div className="border-bottom pb-2 d-flex gap-1 gap-xl-4 flex-column  flex-xl-row">
                <div className="fw-bold text-center text-xl-start">
                  Sold by <span className="text-primary ">StoryShelf</span>
                </div>

                <div className="stock text-center text-xl-start">
                  Only {det.stock} item left in stock!
                </div>
              </div>
              <h4 className="fw-bold my-3">Synopsis</h4>
              <p>{det.summ}</p>
            </div>

            <div className="col-xl-3 col-md-9 p-4 order-3 order-md-2 order-xl-3 end-sec">
              <div className="border-0 border-xl-1  shadows border-2 p-4">
                <h6 className="fw-bold">Get Estimated Arrival Time</h6>
                <div className="d-flex gap-3">
                  <p className="fw-bold ">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                  </p>
                  <p className="fw-bold ">Nepal</p>
                </div>
                <div className="d-flex gap-2 border-bottom">
                  <p className="fw-bold">
                    <i className="fa-solid fa-truck"></i>
                  </p>
                  <p>
                    <span className="fw-bold ">Delivery Within</span> <br />9 to
                    10 Days
                  </p>
                </div>
                <p className="fw-bold fs-5 my-2">Rs. {det.disc}</p>

                <div className="d-flex justify-content-between align-items-center  quantity">
                  <button className="" onClick={decrease}>
                    -
                  </button>
                  <p className="fw-bold">
                    QTY: <span>{qty}</span>
                  </p>
                  <button className="" onClick={increase}>
                    +
                  </button>
                </div>
                <button className="cart">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
        {Data.map((a) => (
            <div className="col-lg-2 col-md-4 col-6 data-image my-3" key={a.id}>
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
                  <button className="btn" >ADD TO CART</button>
                
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Detail;
