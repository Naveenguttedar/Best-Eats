import React from 'react'
import{RxHamburgerMenu} from "react-icons/rx"
import {MdOutlineSearch,MdOutlineShoppingCart ,MdOutlineClose,MdHelp,MdFavorite} from "react-icons/md"

import{sideBar} from "../assets/RawData"
import { useState } from 'react'

function Navbar() {
  const [nav,setNav]=useState(false);
  return (
    <div className='flex justify-between  pt-2 px-4'>
    <div className='flex justify-between items-center max-w-[160px] '>
      {/* left side of navbar */}
      <div className='flex gap-2'>
      <div className='cursor-pointer' onClick={()=>setNav(!nav)}><RxHamburgerMenu size={30} />
      </div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-1'>
        Best<span className='px-1 font-bold'>Eat's</span>
      </h1>
    </div>
    <div className=' hidden md:flex p-1 bg-gray-200 rounded-full text-sm'>
      <p className='text-white bg-black p-2 rounded-full'>Delivery</p>
      <p className='p-2 text-black'>pickUp</p>
    </div>
    
    </div>
    {/* search field*/}
    <div className='flex bg-gray-200 items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] rounded-full'>
      <div className='mx-1'>
        <MdOutlineSearch size={25}/>
      </div>
      <input className='bg-transparent w-full focus:outline-none font-nunito  ' placeholder="Search food's"type="text"  />
    </div>
    {/* Cart*/}
    <div>
      <button className=' hidden sm:flex gap-2 bg-black text-white items-center px-4 py-2 rounded-full '>
        <MdOutlineShoppingCart size={25}/>Cart
      </button>
    </div>
    {/* modle */}
    {nav==true?<div className='bg-black/80 w-full fixed h-screen z-10 top-0 left-0'></div>:""}
    {/* sidebar */}
    <div className={nav?'fixed h-screen bg-white z-20 w-[300px]  left-0 top-0 px-4  py-2 backdrop-blur-sm ':'fixed h-screen bg-white z-20 w-[300px]  left-[-100%] top-0 px-4  py-2 backdrop-blur-sm '}>
      <h1 className='text-2xl '>
        Best<span className='px-1 font-bold'>Eat's</span>
      </h1>
      <MdOutlineClose size={30} onClick={()=>setNav(!nav)} className="cursor-pointer absolute right-0 top-0 mx-4 mt-2"/>
      <nav >
        <ul>
          {sideBar.map((value) => {
            return(
              <li key={value.feature} className="text-xl flex gap-2 py-4 cursor-pointer">
                {value.icon}
                 {value.feature}</li>
            )
          })}
        </ul>
      </nav>
    </div>
    </div>
  )
}
export default Navbar

