import React from 'react'
import { useState } from 'react'
import { Dishdata } from '../assets/RawData'
import FoodCustomizer from './FoodCustomizer'
function DishCards() {
  const [foodsData,setFoodsData]=useState(Dishdata);
  return (
    <div className='px-4 py-6 m-h-[1640px]'>
      <FoodCustomizer foodsData={foodsData} setFoodsData={setFoodsData}/>
    <div className='py-12 max-w-7xl m-auto grid sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 my-2 gap-6'>
      {foodsData.map(menu=>{
        return(
          <div key={menu.id} className='relative rounded-md overflow-hidden shadow-lg hover:scale-105 duration-300 hover:shadow-2xl'>
        <img className='w-full max-h-[160px] md:max-h-[200px] object-cover' src={menu.image}
        alt="" />
        <div className='bg-white p-2 flex justify-between items-center'>
        <div className='text-xl bg-white'>{menu.name}</div>
        <div className='border bg-orange-600 text-white px-2 py-1 rounded-full'>{menu.price}</div>
        </div>
      </div>
        )
      })}
      </div>
      
      </div>
  )
}

export default DishCards
