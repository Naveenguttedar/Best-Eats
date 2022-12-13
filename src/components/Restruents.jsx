import React from 'react'
import { resturentsCards } from '../assets/RawData'
function Restruents() {
  return (
    <div className='px-4 pt-12'>
      <div className='max-w-7xl m-auto grid  sm:grid-cols-3 xs:grid-cols-2 gap-6'>
      {resturentsCards.map(menu=>{
        return(
          <div key={menu.id} className='relative rounded-md overflow-hidden shadow-lg '>
        {/* overley */}
        <div className='h-full w-full bg-black/50 absolute text-white px-2 '>
          <p className='font-bold text-lg md:text-2xl lg:3xl pt-4 '>{menu.cardTitle}</p>
          <p>Through {menu.date}</p>
          <button className={menu.avilable?'border bg-green-500 text-white p-2 rounded-xl absolute bottom-4':'border bg-gray-500 text-white p-2 rounded-xl absolute bottom-4'}>Order Now</button>
        </div>
        <img className='w-full max-h-[160px] md:max-h-[200px] object-cover' src={menu.dishUrl}alt="" />
      </div>
        )
      })}
      </div>
    </div>
  )
}

export default Restruents
