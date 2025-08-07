import React, {  useState } from 'react'
import Cards from './Cards'

const Cars = ({car,setCar}) => {
   

  return (
    <div>
       <Cards name={car.model} age={car.brand} />
    </div>

    
  )
}

export default Cars
