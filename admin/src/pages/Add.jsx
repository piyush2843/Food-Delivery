import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
              name: "",
              description: "",
              price: "",
              category: "Salad",
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message);
        }
  }

  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form action="" className="flex flex-col gap-[10px] " onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex flex-col gap-[10px] ">
          <p>Uplaod Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image): assets.upload_area}
              alt=""
              className="w-[120px]"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-black rounded-[5px] px-[10px]"
          />
        </div>
        <div className="add-product-name flex flex-col gap-[10px] w-[max(40%,280px)]">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type Here"
            className="border border-black rounded-[5px] px-[10px] p-[10px]"
          />
        </div>
        <div className="add-product-description w-[max(40%,280px)] flex flex-col gap-[10px]">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="write content here"
            onChange={onChangeHandler}
            value={data.description}
            required
            id=""
            className="border border-black rounded-[5px] p-[10px] "
          ></textarea>
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex flex-col gap-[10px] ">
            <p>Product Category</p>
            <select
              name="category"
              className="border border-black rounded-[5px] px-[10px] max-w-[120px] p-[10px]"
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex flex-col gap-[10px]">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
              className="border border-black rounded-[5px] px-[10px] max-w-[120px] p-[10px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn border border-black rounded-[5px] p-[10px] max-w-[120px] bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;