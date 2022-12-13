import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DishCards from './components/DishCards'
import Restruents from './components/Restruents'
import Categories from './components/Categories'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero/>
      <Restruents/>
      <DishCards/>
      <Categories/>
    </div>
  )
}

export default App
