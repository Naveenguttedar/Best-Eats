import React from 'react'
import { categories } from '../assets/RawData'
function Categories() {
  return (
    <div className='px-4 max-h-[1640px] m-auto'>
      <h3 className='text-2xl font-bold md:text-4xl text-orange-600 text-center'>Top Categories</h3>
      <div className='py-12 max-w-7xl m-auto grid sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 my-2 gap-6'>
        {
          categories.map(item=>{
            return(
              <div className='flex items-center justify-center gap-2 bg-gray-200 rounded px-2'>
                <h2 className='font-bold flex-1 md:flex-none'>{item.name}</h2>
                <img className='w-20 ' src={item.image} alt={item.name} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories
