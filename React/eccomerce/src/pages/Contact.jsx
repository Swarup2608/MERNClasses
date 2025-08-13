import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center pt-10 border-t'>
        <Title mainTitle={'Contact'} subHeading={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center items-center'>
        <img src={assets.contact} alt="Contact Image" className='w-full md:max-w-[550px]' />
        <div className='flex flex-col justify-center items-start gap-6 text-gray-600'>
          <div>
            <p className='font-bold text-gray-700 text-lg'>Our Store :</p>
            <p>Hyderabad</p>

          </div>
          <div>

            <p className='font-bold text-gray-700 text-lg'>Email : </p>
            <p>contact@shopify.com</p>
          </div>
          <div>

            <p className='font-bold text-gray-700 text-lg'>Mobile : </p>
            <p>+91 19198 387383</p>
          </div>
          <div>

            <p className='font-bold text-gray-700 text-lg'>Carrers At</p>
            <p>Learn more about job openings</p>
            <button className='bg-[#f28d23] px-5 py-3 text-white cursor-pointer mt-2 rounded hover:scale-105 transition-all ease-in-out duration-700'>Explore Jobs</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
