import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-center gap-[30px] p-[20px] bg-amber-100 hover:bg-amber-50 transition-all ease-in max-sm:flex-wrap'>
      <Link className='text-blue-800 hover:text-green-700 max-sm:w-[100%] text-center lg:w-[50%]' to={'/'}>Home</Link>
      <Link className='text-blue-800 hover:text-green-700 max-sm:w-[100%] text-center lg:w-[50%]' to={'/about'}>About</Link>
      <Link className='text-blue-800 hover:text-green-700 max-sm:w-[100%] text-center lg:w-[50%]' to={'/cart'}>Cart</Link>
      <Link className='text-blue-800 hover:text-green-700 max-sm:w-[100%] text-center lg:w-[50%]' to={'/shop'}>Shop</Link>
    </div>
  )
}

export default Header
