import React from 'react'
import { useState } from 'react';
import { Dishdata } from '../assets/RawData'
function FoodCustomizer({foodsData,setFoodsData}) {
  //filtering categories
  const [filteredFoods,setFilteredFoods]=useState(foodsData);
  console.log('1',filteredFoods)
  const filterFood=(category)=>{
    setFilteredFoods(()=>{
     let arr= Dishdata.filter(item=>item.category===category)
     setFoodsData(arr)
    return arr
    });
    
  }

const filterFoodByPrice=(price)=>{
  setFoodsData(filteredFoods.filter(item=>item.price===price))
}
  return (
    <div className='w-full  '>
      <h3 className='text-2xl text-center md:text-3xl font-bold text-orange-500 '>Top Rated Menu Item's</h3>
      {/* filter type */}
      <div className='mt-2 m-auto   max-w-7xl' >
        <p className='font-bold text-xl mt-1 '>Filter type</p>
        <div  className='flex gap-2 flex-wrap mt-1'>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600' onClick={()=>setFoodsData(Dishdata)}>All</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600' onClick={()=>filterFood('burger')}>Burger</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 focus:text-white focus:bg-orange-600 rounded-xl '  onClick={()=>filterFood('pizza')}>Piza</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600' onClick={()=>filterFood('salad')}>Salads</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600'  onClick={()=>filterFood('chicken')}>Chicken</button>
        </div>
      </div>
      {/*filter price*/}
      <div className='my-2 max-w-7xl m-auto'>
        <p className='font-bold text-xl mt-1'>Filter price</p>
        <div className='flex gap-2 flex-wrap mt-1'>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600 ' onClick={()=>filterFoodByPrice('$')}>$</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600 ' onClick={()=>filterFoodByPrice('$$')}>$$</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600 ' onClick={()=>filterFoodByPrice('$$$')}>$$$</button>
        <button className='border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 rounded-xl focus:text-white focus:bg-orange-600 ' onClick={()=>filterFoodByPrice('$$$$')}>$$$$</button>
        </div>
      </div>
    </div>
  )
}

export default FoodCustomizer
