import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
        <h1 className=' text-[#262626] font-[500]'>Explore our menu</h1>
        <p className='explore-menu-textm lg:max-w-[100%] ax-w-[50%] text-[#808080]'>Choose from a diverse menu featuring array of dishes.Our mission is to satisfy</p>
        <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll whitespace-nowrap" style={{ scrollbarWidth: "none", msOverflowStyle: "none",}}>
           {menu_list.map((item,index)=>{
            return(
                <div className="explore-menu-list-items" key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                    <img src={item.menu_image} alt="" className={category===item.menu_name?' border-[4px] border-solid border-[#FF574A]  p-[2px] w-[8.5vw] max-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s]':' w-[8.5vw] max-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s]'}/>
                    <p className=' mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                </div>
            )
           })}
        </div>
        <hr className='my-[10px] mx-[0px] h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu