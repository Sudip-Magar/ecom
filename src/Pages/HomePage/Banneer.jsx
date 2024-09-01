import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../css/Banner.css";
import bann1 from "../../img/banner1.png";
import bann2 from "../../img/banner2.png";
import Catdata from "../../Data/Catdata";
import { Link } from "react-router-dom";

function Banneer() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider1">
          <img className="w-100" src={bann1} alt="" />
        </div>
        <div className="slider2">
          <img className="w-100" src={bann2} alt="" />
        </div>
      </Slider>

      <div className="container my-4">
        <div className="row">
            <div className="pb-4">
            <h4 className="fw-bold">Genres</h4>
            <p className="text-secondary">Browse Our Extensive Collection of Books Across Different Genres.</p>
            </div>
          {Catdata.map((a)=>(
            <div className="text-center col-6  col-sm-4 col-lg-2 cate">
            <Link className="text-decoration-none  " to={`/category/${a.title}`}>
              <div className="bg-color"><i className={`${a.i} fs-1 text-info`}></i></div>
              <p className="text-dark">{a.title}</p>
            </Link>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Banneer;
