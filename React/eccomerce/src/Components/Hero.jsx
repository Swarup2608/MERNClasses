import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center'>
      <div className='w-full sm:w-1/2 flex justify-center py-10 sm:py-2'>
        <div className='text-[#333]'>
          <p className=''>Get Exicting Offers on Women Wear</p>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>70% <del className='text-xl lg:text-2xl'>50%</del> OFF</h1>
          <div className=' flex flex-col  gap-1 group w-24 cursor-pointer'>

            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#333] group-hover:w-18 transition-all ease-in-out duration-700'></p>
          </div>
        </div>
      </div>
      <img src={assets.HeroImage} alt="Hero Image" className='w-full sm:w-1/2' />
    </div>
  )
}

export default Hero
