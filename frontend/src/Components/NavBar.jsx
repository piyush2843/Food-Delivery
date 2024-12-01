import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import "./NavBar.css"

const NavBar = ({ setShowLogin,token,setToken }) => {
  const [menu, setMenu] = useState("Menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className="navbar py-5 flex justify-between items-center ">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="logo w-[150px] lg:w-[140px] md:w-[120px]"
        />
      </Link>
      <ul className="navbar-menu hidden sm:flex list-none gap-5 text-[#49557e] text-[18px] lg:text-[17px] md:text-[16px] cursor-pointer lg:gap-[20px] md-gap-[15px]">
        <Link
          className={
            menu === "Home" ? "border-b-[2px] pb-[2px] border-solid" : ""
          }
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={
            menu === "Menu" ? "border-b-[2px] pb-[2px] border-solid" : ""
          }
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={
            menu === "Mobile-App" ? "border-b-[2px] pb-[2px] border-solid" : ""
          }
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={
            menu === "Contact Us" ? "border-b-[2px] pb-[2px] border-solid" : ""
          }
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right flex items-center gap-10 lg:gap-[30px] ">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className=" lg:w-[22px] md:w-[20px] "
        />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="basket_icon"
              className=" lg:w-[22px] md:w-[20px] "
            />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute min-h-[10px] min-w-[10px] bg-[#EC2D01] rounded-[5px] top-[-8px] right-[-8px]"
            }
          ></div>
        </div>
        {!token? 
          <button
            className="bg-white hover:bg-gray-100 text-[#49557e] font-semibold lg:px-[25px] lg:py-2 md:py-[7px] md:px-[20px] py-2 px-4 md:text-[15px] border border-gray-400 rounded-[20px] shadow"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Sign In
          </button>
          : (
          <div className="navbar-profile relative">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute hidden z-1 right-0">
              <li onClick={()=>navigate("/myorders")} className="flex items-center gap-[10px] cursor-pointer hover:text-[#ff8000]">
                <img src={assets.bag_icon} alt=""  className="w-[20px]" />
                <p>Orders</p>
              </li>
              <hr />
              <li className="flex items-center gap-[10px] cursor-pointer hover:text-[#ff8000]">
                <img src={assets.logout_icon} alt="" className="w-[20px] " />
                <p onClick={logout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
