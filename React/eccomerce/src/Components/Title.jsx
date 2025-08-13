import React from 'react'

const Title = ({mainTitle,subHeading}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-700 text-xl font-bold'>{mainTitle}</p>
      <p className='text-gray-500 '>{subHeading}</p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#f28d23]'></p>
    </div>
  )
}

export default Title