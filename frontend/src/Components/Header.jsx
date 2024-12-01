import React from 'react'

const Header = () => {
  return (
    <div className=" header h-[34vw] my-[30px]  mx-auto  bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn lg:max-w-[45%] sm:max-w-[65%]">
            <h2 className=' font-[500] text-white text-2 text-[max(4.5vw,22px)]'>Order your favouraite food here</h2>
            <p className=' text-white text-[1vw] hidden sm:flex'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy  your craving and elevate your dining experience,one delicious meal at a time. </p>
            <button className=' border-none font-[500] lg:py-[1vw] lg:px-[2.3vw] md:py-[1vw] md:px-[1vw] sm:py-[2vw] sm:px-[4vw]  bg-white text-[max(1vw,13px) rounded-[50px]'>View Menu</button>
        </div>
    </div>
  )
}

export default Header