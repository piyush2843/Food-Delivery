import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-[100px] text-[max(3vw,20px)] text-center' id='app-download'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-[40px]">
            <img className=" w-[max(30vw,120px)] max-w-[180px]  duration-[0.5s] cursor-pointer hover:scale-105 transition-transform " src={assets.play_store} alt="" />
            <img className=" w-[max(30vw,120px)] max-w-[180px] duration-[0.5s] cursor-pointer hover:scale-105 transition-transform" src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload