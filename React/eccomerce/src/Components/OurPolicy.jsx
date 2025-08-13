import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange} alt="Easy Exchange Policy" className="w-12 m-auto mb-5"/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nostrum libero expedita?</p>
        </div>
        <div>
            <img src={assets.return1} alt="7 Days Return Policy" className="w-12 m-auto mb-5"/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nostrum libero expedita?</p>
        </div>
        <div>
            <img src={assets.quality} alt="Best Quality Check" className="w-12 m-auto mb-5"/>
            <p className='font-semibold'>Best Quality Check</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nostrum libero expedita?</p>
        </div>
    </div>
  )
}

export default OurPolicy
