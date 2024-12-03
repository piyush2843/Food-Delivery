import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = (props) => {
  const { getTotalCartAmount,food_list,cartItems,token,setToken,url} = useContext(StoreContext);
  
  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }else{
      alert("Error is")
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate("/cart");
    }else if(getTotalCartAmount()===0){
      {
        navigate("/cart")
      }
    }
  },[token])

  return (
    <form
    onSubmit={placeOrder}
      action=""
      className="place-order flex items-start justify-between gap-[50px] mt-[100px]"
    >
      <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-[500] mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-feild flex gap-[10px]">
          <input
            type="text"
            name="firstName" 
            required
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First Name"
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
            onChange={onChangeHandler}
            value={data.lastName}
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
        </div>
        <input
          type="email"
          name="email"
          required
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
          className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
        />
        <input
          type="text"
          name="street"
          required
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
          className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
        />
        <div className="multi-feild flex gap-[10px]">
          <input
            type="text"
            name="city"
            required
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            required
            onChange={onChangeHandler}
            value={data.state}
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
        </div>
        <div className="multi-feild flex gap-[10px]">
          <input
            type="text"
            name="zipcode"
            required
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip Code"
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
          <input
            type="text"
            name="country"
            required
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          required
          onChange={onChangeHandler}
          value={data.phone}
          className="border border-[#c5c5c5] rounded-[4px]  mb-[10px] w-[100%] p-[10px] outline-[#ff8000]"
        />
      </div>
      <div className="place-order-right w-[100%] max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=" my-[10px] mx-[0px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className=" my-[10px] mx-[0px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="submit" className=" border-none text-white bg-[#ff8000] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer mt-[30px]">
            Procced to Paymnet
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
