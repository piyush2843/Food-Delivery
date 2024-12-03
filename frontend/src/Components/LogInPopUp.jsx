import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import  axios  from 'axios';
import { StoreContext } from "../Context/StoreContext";

const LogInPopUp = ({ setShowLogin,setToken }) => {
  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
  });
  const url = "https://food-delivery-backend-ujve.onrender.com";

  
  const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl = "";
        if(currState==="Login"){
          newUrl += url+"/api/user/login";
        }else{
          newUrl += url+"/api/user/register";
        }

        try {
          const response = await axios.post(newUrl, data);
      
          if (response.data.success) {
            // let token = response.data.token;
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
          } else {
            alert(response.data.message);
          }
        } catch (error) {
          alert("Something went wrong. Please try again later.");
        }
  }

  return (
    <div className="login-popup absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="login-popup-container place-self-center w-[max(23vw,340px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[18px] animate-fadeIn duration-[0.2s]"
      >
        <div className="login-popup-title flex justify-between items-center font-[1000] text-black">
          <h2>{currState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <>
              <input
                type="text"
                className="border border-black mb-2 rounded-[5px] px-[10px]"
                placeholder="Your Name"
                required
                name="name"
                value={data.name}
                onChange={onChangeHandler}
              />
            </>
          )}
          <input
            className="border border-black mb-2 rounded-[5px] px-[10px]"
            type="text"
            placeholder="Your e-mail"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            className="border border-black rounded-[5px] px-[10px]"
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#ff8000] hover:bg-[#ff9100]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 "
        >
          {currState=="Sign Up"?"Create Account":"LogIn"}
        </button>
        <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
          <input type="checkbox" required className=" mt-[8px]"/>
          <p>By contuning,i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")} className=" text-[#FF6347] font-[500] cursor-pointer">Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")} className=" text-[17px] text-[#FF6347] font-[500] cursor-pointer whitespace-nowrap">Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogInPopUp;
