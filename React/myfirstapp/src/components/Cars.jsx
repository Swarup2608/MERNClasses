import React, {  useState } from 'react'

const Cars = ({car,setCar}) => {
   

    function updateCar(color){
        setCar(prevState => {
            return {...prevState,"color":color}
        })
    }

  return (
    <div>
      My Car is {car.brand} {car.model} of {car.color} color.
      <select value={car.color} onChange={(e)=>{updateCar(e.target.value)}}  name="" id="">
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>x
    </select>
    </div>

    
  )
}

export default Cars
