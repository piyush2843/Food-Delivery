import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item w-[100%] m-auto rounded-[15px] animate-fadeIn  transition duration-[0.3s] shadow-[0_0_10px_rgba(0,0,0,0.08)]'>
      <div className="food-item-img-container relative">
        <img className='food-item-image w-[100%] rounded-tl-[15px] rounded-tr-[15px]' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
        ?<img className='add w-[35px] absolute right-[15px] bottom-[15px] cursor-pointer rounded-[50%]'src={assets.add_icon_white}  onClick={()=>addToCart(id)} alt=''/>
        :<div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img className=' w-[30px] ' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
            <p>{cartItems[id]}</p>
            <img className=' w-[30px] ' onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
         </div>}
      </div>
      <div className="food-item-info p-[10px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className=' text-[20px] font-[500]'>{name}</p>
          <img src={assets.rating_starts} alt="" className=' w-[70px]'/>
        </div>
      </div>
      <p className="food-item-desc text-[#676767] text-[12px] px-[20px]">{description}</p>
      <p className="food-item-price text-[#FF6347] text-[22px] my-[10px] px-[20px]">${price}</p>
    </div>
  )
}

export default FoodItem