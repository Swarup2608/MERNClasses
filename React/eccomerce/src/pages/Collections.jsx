import React, { useEffect, useState } from 'react'
import {products } from '../assets/assets'
import Title from '../Components/Title';
import ProductCard from '../Components/ProductCard';

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState('relavent');

  const applyFilter = () =>{
    let productsDupe = products.slice()
    if(category.length > 0){
      productsDupe = productsDupe.filter((item)=>category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsDupe = productsDupe.filter((item)=>subCategory.includes(item.subcategory))
    }
    setFilterProducts(productsDupe)
  }

  useEffect(()=>{
    setLoading(true);
    applyFilter();
    setLoading(false);
    console.log(filterProducts)
  },[category,subCategory,products])

  const toggleCategory = (e) =>{
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item!=e.target.value))
      }
      else{
        setCategory(prev=>[...prev,e.target.value])
      }
  }
  const toggleSubCategory = (e) =>{
      if(subCategory.includes(e.target.value)){
        setSubCategory(prev=>prev.filter(item=>item!=e.target.value))
      }
      else{
        setSubCategory(prev=>[...prev,e.target.value])
      }
  }

  const sortProduct = () =>{
    let productsDupe = filterProducts.slice()
    switch(sortType){
      case "low-high":
        setFilterProducts(productsDupe.sort((a,b)=>(a.price - b.price)))
        break;
      case "high-low":
        setFilterProducts(productsDupe.sort((a,b)=>(b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
     setLoading(true);
     sortProduct();
     setLoading(false)
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-19 pt-10 border-t border-gray-300'>
      <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>

          <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                
                <p className='flex gap-2'> <input onClick={(e)=>toggleCategory(e)} type="checkbox" value={'Men'} className='w-3'/> Men</p>
                <p className='flex gap-2'> <input onClick={(e)=>toggleCategory(e)} type="checkbox" value={'Women'} className='w-3'/> Women</p>
                <p className='flex gap-2'> <input onClick={(e)=>toggleCategory(e)} type="checkbox" value={'Kids'} className='w-3'/> Kids</p>
            </div>          
          </div>
          <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Sub Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                
                <p className='flex gap-2'> <input onClick={(e)=>toggleSubCategory(e)}  type="checkbox" value={'TopWear'} className='w-3'/> TopWear</p>
                <p className='flex gap-2'> <input onClick={(e)=>toggleSubCategory(e)}  type="checkbox" value={'BottomWear'} className='w-3'/> BottomWear</p>
                <p className='flex gap-2'> <input onClick={(e)=>toggleSubCategory(e)}  type="checkbox" value={'Accessorices'} className='w-3'/> Accessorices</p>
            </div>          
          </div>
      </div>

      <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title mainTitle={"ALL"} subHeading={"Collections"} />
        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

        {
          loading 
          ? <p className='text-center col-span-full text-gray-600'>Loading...</p> 
          : filterProducts.length === 0 ?
          <p className='text-center col-span-full text-gray-600'>No Products Found</p>
          :
          filterProducts.map((item,index)=><ProductCard key={item._id || index} name={item.name} image={item.image} price={item.price} />)
        }

      </div>
      </div>
    </div>
  )
}

export default Collections
