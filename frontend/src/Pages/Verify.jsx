import axios from "axios";
import "./Verify.css"
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const url = "http://localhost:4000"
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post("http://localhost:4000/api/order/verify",{success,orderId})
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