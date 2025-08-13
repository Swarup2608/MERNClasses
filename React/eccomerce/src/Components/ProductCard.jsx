import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({id,name,image,price}) => {
  
  const imgSrc = Array.isArray(image) ? image[0] : image || '/fallback.jpg';
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer '>
        <div className='overflow-hidden'>
            <img src={imgSrc} alt={name} className='w-[300px] h-[300px] hover:scale-110 transition-all ease-in-out ' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>$ {price}</p>
    </Link>
  )
}

export default ProductCard
