import "../pages/List.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {

    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error");
    }
  };

  useEffect(()=>{
    fetchList();
  },[])

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList()
    if(response.data.success){
      toast.success("Removed Successfully");
    }else{
      toast.error("Error");
    }
  }

  return (
    <div className="list  w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px] flex flex-col gap-[10px]">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-solid border-[#cacaca] text-[13px] bg-[#f9f9f9]" >
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-solid border-[#cacaca] text-[13px] ">
              <img src={`${url}/images/`+item.image} alt="" className="w-[50%]"/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className=" cursor-pointer" onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
