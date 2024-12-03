import "./Orders.css"
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import  axios  from 'axios';
import { assets } from '../assets/assets';


const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async ()=>{
    const response = await axios.get(url+"/api/order/list")
    if(response.data.success){
      setOrders(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order add'>
      <div className=" flex justify-center items-center mt-[20px]">
      <h3 className=" text-[30px] font-[1000]">Orders</h3> 
      </div>
       <div className='order-list mx-[100px] my-[100px]'>
        {orders.map((order,index)=>(
          <div className='order-item grid grid-cols-[_0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] border-solid border-[1px] border-[#EC2D01] p-[20px] my-[13px] text-[14px] text-[#505050]' key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food font-[600]'>
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name + " x " + item.quantity
                  }else{
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
              <p className='order-item-name mt-[30px] mb-[5px] font-[600]' >{order.address.firstName+" " +order.address.lastName}</p>
              <div className='order-item-address mb-[10px]'>
                <p>{order.address.street+" , "}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border-solid border-[1px] border-[#EC2D01] w-[max(10vw,12px)] p-[10px] outline-none'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
       </div>
    </div>
  )
}

export default Orders