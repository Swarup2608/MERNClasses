import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, products } from '../assets/assets';

const Product = () => {
  const { productid } = useParams();
  console.log(productid)
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProduct = () => {
    products.map((item) => {
      if (item._id == productid) {
        setProductData(item);
        setImage(item.images[0]);
      }
    })
  }

  useEffect(() => {
    fetchProduct();
  }, [productid, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-10 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex images-scroll sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData?.images.map((item, index) => (
                <img key={index} src={item} className="w-[24%] sm:w-full sm:mb-3 flex cursor-pointer" onClick={() => setImage(item)} />
              ))

            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt={productData.name} />
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-2'>
          <h1 className='font-bold text-4xl mt-2'> {productData.name}</h1>
          <div className='flex items-center gap-1 mt-2 ml-1'>
            <img src={assets.star} className='w-5' alt="" />
            <img src={assets.star} className='w-5' alt="" />
            <img src={assets.star} className='w-5' alt="" />
            <img src={assets.star} className='w-5' alt="" />
            <img src={assets.star_dull} className='w-5' alt="" />
          </div>
          <p className="mt-5 ml-2 text-3xl font-medium">$ {productData.price}</p>
          <p className='mt-5 ml-2 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4'>
            <p>Select Size : </p>
            <div className='flex gap-2'>

              {
                productData.sizes.map((item, index) => (
                  <button className={`cursor-pointer px-4 py-2 bg-gray-300 border-2 ${item === size ? 'border-orange-500 bg-orange-50' : 'border-gray-400 hover:bg-gray-200'}`} onClick={()=>setSize(item)}  key={index}>{item}</button>
                ))
              }
            </div>
            <button className='bg-black text-white px-8 py-3 text-sm cursor-pointer hover:bg-gray-700'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No Product Found</div>
  )
}

export default Product
