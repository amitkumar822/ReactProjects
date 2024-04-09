import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "../data/Data";
import { FaBeer } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";


function Navbar({ setData, cart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    console.log(element);
    setData(element);
  };

  const handleSubmit = (e) => {
    navigate(`/search/${searchTerm}`);
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <>
      <header className=" sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            AK Shopping
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaCartArrowDown style={{fontSize:"25px"}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {/*👉 Navigation bar Section */}
        {location.pathname === '/' && (
          <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div className="items" onClick={() => setData(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {">="}29999
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {">="}49999
          </div>
          <div className="items" onClick={() => filterByPrice(69999)}>
            {">="}69999
          </div>
          <div className="items" onClick={() => filterByPrice(89999)}>
            {">="}89999
          </div>
        </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
