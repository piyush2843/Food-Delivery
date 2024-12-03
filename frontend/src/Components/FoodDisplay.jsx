import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display mt-[30px] ' id='food-display'>
        <h2 className=' text-[max(2vw,24px)] font-[600]'>Top Dishes Near You</h2>
        <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] row-gap-[50px]">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay