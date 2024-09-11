import React from "react";
import Data from "../../Data/Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/Action";


function Category() {
  const dispatch=useDispatch();
  const addcart=(cc)=>{
    dispatch(addtocart(cc))
  }
  let { cid } = useParams();
  let data = Data.filter((ab) => ab.cate == cid);
  return (
    <div className="container my-5">
      <h4 className="mt-4 fw-bold">{cid}</h4>
      <div className="row">
        {data.map((cc) => (
          <div className="col-lg-2 col-md-4 col-6 data-image my-3" key={cc.id}>
            <Link
              to={`/detail/${cc.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="my-3 mx-1">
                <img className="w-100" src={cc.img} alt="" />
                <h6 className="pt-3 mb-0 fw-bold">{cc.title}</h6>
                <p className="p-0 mb-2 text-body-tertiary text">
                  By {cc.author}
                </p>
                <p className="fsize fw-bold">Rs. {cc.disc}</p>
              </div>
            </Link>
            <button className="btn" onClick={()=>addcart(cc)}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
