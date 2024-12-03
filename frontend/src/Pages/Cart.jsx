import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, idx) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={idx}>
                   <div className="cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black text-[max(1vw,12px)] my-[10px] mx-[0px] ">
                  <img src={url+"/images/"+item.image} className=" w-[50px]" alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p
                    className="cross cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className=" h-[px] bg-[#e2e2e2]" />
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)] max-sm:flex-col-reverse max-sm:justify-start">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=" my-[10px] mx-[0px]"/>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className=" my-[10px] mx-[0px]"/>
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className=" border-none text-white bg-[#ff8000] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer" onClick={()=>navigate("/order")}>Procced to checkout</button>
        </div>
        <div className="cart-promocode flex-1">
          <div>
            <p className=" text-[#555]">If you have a promo code,Enter it here</p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input type="text" placeholder="Promo Code" className="border border-black rounded-[5px] px-[10px] bg-transparent border-none outline-none pl-[10px] "/>
              <button className=" w-[max(10vw,150px)] py-[10px] px-[5px] bg-black border-none text-white rounded-[4px]">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
