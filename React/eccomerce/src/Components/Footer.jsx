import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-12 mb-10 mt-40 text-sm '>
        <div >
          <Link to={'/'} className='text-3xl flex items-center justify-start gap-2'>Shopify <span className='text-6xl mb-6 text-[#f28d23] leading-6'>.</span></Link>
          <p className='w-full md:w-2/3  text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis corrupti aut totam veniam, consequatur quo ad, eius culpa cumque laborum nisi, quisquam ducimus. Culpa maxime facilis cum expedita quas amet.</p>
        </div>
        <div>

          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className=' flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 19198 387383</li>
            <li>contact@shopify.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright @2025 shopify.com - All rights reserved</p>
    </div>
  )
}

export default Footer
