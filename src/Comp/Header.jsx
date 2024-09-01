import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./Header.css";
import Home from '../Pages/Home.jsx'
import Detail from '../Pages/HomePage/Detail.jsx'

import { Link, NavLink, Route, Routes } from "react-router-dom";
import Category from "../Pages/HomePage/Category.jsx";
import AboutUs from "../Pages/AboutUs.jsx";
import ContactUs from "../Pages/ContactUs.jsx";
import Shop from "../Pages/Shop.jsx";

function Header({cart}) {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-lg py-1">
      <div className="container">
        <Link className="navbar-brand" to="/">
          STORYSHELF
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link hov text-dark"  to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hov text-dark" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hov text-dark" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>

          <div className="my-3 text-end cart-user">
            <button
              type="button"
              className="btn position-relative mx-1"
            >
              <i className="fa-solid fa-cart-shopping text-dark fs-4">

              </i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1<span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              className="btn  rounded-circle position-relative"
            >
              <i className="fa-solid fa-user text-dark fs-4"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="category/:cid" element={<Category/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default Header;
