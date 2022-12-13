import React from 'react'

function Hero() {
  return (
    <div className=' max-w-7xl m-auto px-4 py-6'>
      <div className='max-h-[500px]  relative m-auto '>
        {/* overley */}
        <div className='absolute bg-black/40 w-full h-full flex flex-col justify-center sm:text-5xl md:text-6xl lg:text-7xl px-4 font-bold' >
          <h1 className='text-white'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='text-orange-500'>Foods <span className='text-white'>Delivered</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Hero
