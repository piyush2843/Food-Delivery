import "./MyOrder.css"
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'


const MyOrders = () => {

    const [data,setData] = useState([])
    const {url,token} = useContext(StoreContext)

    const fetchOrders = async ()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders my-[50px] mx-[0px]'>
        <h2>My Orders</h2>
        <div className="container flex flex-col gap-[20px] mt-[30px]">
            {data.map((order,index)=>{
                return(
                    <div className='my-orders-order grid grid-cols-[_0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border-solid border-[1px] border-[#ff8000]' key={index}>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name+" x "+item.quantity
                            }else{
                                return item.name+" x "+item.quantity+" , "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span className='text-[#ff8000]'>&#x25cf;</span> <b className='font-[500] text-[#454545]'>{order.status}</b></p>
                        <button onClick={fetchOrders} className='border-none py-[12px] px-[0px] bg-[#ffe1e1] text-[#454545]'>Track Order</button>
                    </div>
                ) 
            })}
        </div>
    </div>
  )
}

export default MyOrders