import axios from "axios";
import "./Verify.css"
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from "../Context/StoreContext";

const Verify = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            navigate("/myorders")
        }else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])
  return (
    <div className='verify min-h-[60vh] grid'>
        <div className="spinner w-[100px] h-[100px] place-self-center border-[5px] border-solid border-[#bdbdbd] border-top-color border-t-[#EC2D01] rounded-[50%] "></div>
    </div>
  )
}

export default Verify