import React from "react";
import { assets } from "../assets/assets";
import {NavLink} from "react-router-dom"


const SideBar = () => {
  return (
    <div className="sidebar w-[18%] min-h-[100vh] border-[1.5px] border-solid border-[#a9a9a9] border-t-[0] text-[1vw,10px]">
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink to={"/add"} className="sidebar-option flex items-center gap-[12px] border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-tl-[3px] rounded-bl-[3px] hover:bg-[#fff0ed] hover:border-[#ff8000]">
          <img src={assets.add_icon} alt="" />
          <p className=" hidden md:block">Add Items</p>
        </NavLink>
        <NavLink to={"/list"} className="sidebar-option flex items-center gap-[12px] border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-tl-[3px] rounded-bl-[3px] hover:bg-[#fff0ed] hover:border-[#ff8000]">
          <img src={assets.order_icon} alt="" />
          <p className=" hidden md:block">List Items</p>
        </NavLink>
        <NavLink to={'/orders'} className="sidebar-option flex items-center gap-[12px] border border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer rounded-tl-[3px] rounded-bl-[3px]  hover:bg-[#fff0ed] hover:border-[#ff8000]">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
