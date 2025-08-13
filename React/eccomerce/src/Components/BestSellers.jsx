import React, { useEffect, useState } from 'react'
import {products } from '../assets/assets'
import Title from './Title';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const [bestSellers,setBestSellers] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    if(products.length > 0){
      setLoading(true);
      const bestProducts = products.filter((item)=> (item.bestseller))
      setBestSellers(bestProducts.slice(0,5))
      setLoading(false);
    }
  },[products])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title subHeading={"Sellers"} mainTitle={"Best"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptates nulla, praesentium animi accusamus, ratione officia est hic iure voluptate modi impedit rem quo numquam. Delectus nulla reiciendis velit cumque.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"> 
        {
          loading ? 
            <p className='text-center col-span-full text-gray-600'>Loading...</p>
          :
            bestSellers.length=== 0?
              
            <p className='text-center col-span-full text-gray-600'>No Products Found</p>
            :
             bestSellers.map((item,index)=>
                <ProductCard key={item._id || index} id={item._id } name={item.name} price={item.price} image={item.images} />
            )
        }
      </div>
    </div>
  )
}

export default BestSellers
