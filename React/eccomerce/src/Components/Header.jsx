import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Header = () => {
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={'/'} className='text-3xl flex items-center justify-center gap-2'>Shopify <span className='text-6xl mb-6 text-[#f28d23] leading-6'>.</span></Link>
      <ul className='hidden sm:flex gap-5  text-base text-gray-700 '>
        <NavLink to={'/'} className='flex flex-col items-start group gap-1'>
          <p>Home</p>
          <div className='w-3/4 h-[1px] bg-[#f28d23] opacity-0 group-hover:opacity-100'></div>
        </NavLink>
        <NavLink to={'/collections'} className='flex flex-col items-start group gap-1'>
          <p>Collections</p>
          <div className='w-3/4 h-[1px] bg-[#f28d23] opacity-0 group-hover:opacity-100'></div>
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col items-start group gap-1'>
          <p>About</p>
          <div className='w-3/4 h-[1px] bg-[#f28d23] opacity-0 group-hover:opacity-100'></div>
        </NavLink>
        <NavLink to={'/contact'} className='flex flex-col items-start group gap-1'>
          <p>Contact</p>
          <div className='w-3/4 h-[1px] bg-[#f28d23] opacity-0 group-hover:opacity-100'></div>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search} alt="Search Icon" className='w-7 cursor-pointer' />

        <div className='group relative'>
          <img onClick={()=>{setIsUserLoggedIn(!isUserLoggedIn)}} src={assets.profile} alt="Profile Image" className='w-7 cursor-pointer' />
          {
            isUserLoggedIn ? 
            <div className='group-hover:block absolute hidden  right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-600 rounded '>
                  <NavLink to={'/profile'} className='hover:text-black' >Profile</NavLink>
                  <NavLink to={'/orders'} className='hover:text-black' >Orders</NavLink>
                  <NavLink onClick={()=>(setIsUserLoggedIn(!isUserLoggedIn))} className='hover:text-black' >Logout</NavLink>
              </div>

            </div> 
            : ""
          }
        </div>
        
        <Link to={'/cart '}><img src={assets.cart} alt="Cart Icon"  className='w-7 cursor-pointer' /></Link>

      </div>
    </div>
  )
}

export default Header
