import React, { useState } from 'react'
import Cards from './components/Cards'
import Cars from './components/Cars';
import Timer from './components/Timer';

const App = () => {

    var [name,setNameHook] = useState("Swarup");
    const [age,setAge] = useState(23);
     const [car,setCar] = useState({
        brand : 'Tata',
        model : 'Nano',
        color : 'Green'
    });
  return (
    <div className='abc'>
      <Cards name={name} age={age} setName={setNameHook} setAge={setAge} />
      <Cars car={car} setCar={setCar}  />
      <Timer />
    </div>
  )
}

export default App
